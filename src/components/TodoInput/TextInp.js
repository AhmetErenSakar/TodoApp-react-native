import { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Dimensions, Alert, TouchableOpacity } from 'react-native'

function TextInp(props) {


    const handleAddTodo = () => {
        if (props.jext.length > 0) {
            props.setList([...props.list, { "name": props.jext }]);
            props.setJext('');
            props.setCount(props.count + 1)
        }
    };


    return (
        <View style={styles.container}>
            <View style={styles.inner_container}>
                <TextInput placeholder='yapılacak...' style={styles.input} value={props.jext} onChangeText={(text) => props.handleText(text)} />
                <TouchableOpacity style={props.jext.length > 0 ? styles.buttonTrue : styles.button} onPress={handleAddTodo}>
                    <Text style={styles.button_text}>Kaydet</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#999999',
        margin: 10,
        borderRadius: 10,
    },
    inner_container: {
        margin: 10,
        width: '90%',

    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        fontWeight: 'bold',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        borderRadius: 10,
        width: '90%',
        height: '35%',
        margin: 10,
        padding: 10,
        backgroundColor: 'grey',
    },
    buttonTrue: {
        alignItems: 'center',
        borderRadius: 10,
        width: '90%',
        height: '35%',
        margin: 10,
        padding: 10,
        backgroundColor: 'orange',
    },
    button_text: {
        fontWeight: 'bold',
        color: 'white',
    }
})


export default TextInp