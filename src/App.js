import { useState } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";

import TodoInput from './components/TodoInput'
import Todos from './components/Todos'

function App() {

    const todos = [];
    const [list, setList] = useState(todos);
    const [jext, setJext] = useState('')
    const [count, setCount] = useState(0);

    function handleText(text) {
        setJext(text);
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Yapılacaklar</Text>
            <Text style={styles.length}>{count}</Text>
            {list.map((todo, idx) => { return (<Todos key={idx} todo={todo} count={count} setCount={setCount} />) })}
            <View style={styles.Input}>
                <TodoInput count={count} setCount={setCount} jext={jext} setJext={setJext} list={list} setList={setList} handleText={handleText} />
            </View>
        </View>
    )
}


/* todoları listelemek ve kaydetmek için state yapısı kuracaktın !!! */

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#555555',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 28,
        color: 'orange',
    },
    Input: {
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 5,
        bottom: 50,
    },
    length: {
        position: 'absolute',
        top: 0,
        right: 20,
        fontWeight: 'bold',
        fontSize: 28,
        color: 'orange',
    }
})


export default App;