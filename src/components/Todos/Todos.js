import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


function Todos(props) {

    const [isActive, setİsActive] = useState(false);

    const handlePress = () => {
        setİsActive(!isActive);
        if (!isActive) {
            props.setCount(props.count - 1)
        } if (isActive) {
            props.setCount(props.count + 1)
        }

    };

    return (
        <TouchableOpacity style={isActive ? styles.buttonPressed : styles.container} onPress={handlePress}>
            <Text style={styles.todo}>{props.todo.name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: '#47974A',
        height: 35,
        borderRadius: 5,
        padding: 5,
        margin: 5,
    },
    todo: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    buttonPressed: {
        margin: 10,
        backgroundColor: 'red',
        height: 35,
        borderRadius: 5,
        padding: 5,
        margin: 5,
    }
})


export default Todos;