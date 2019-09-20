import React, { Component } from 'react'
import { Text, View, TextInput, Button} from 'react-native'

export default class AddScreen extends Component {
    static navigationOptions = {
        title: 'Add new contact',
    };
    render() {
        return (
            <View>

                <TextInput style={{
                    height: 40,
                    margin: 20,
                    marginBottom: 10,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                    keyboardType="default"
                    placeholder="Enter name"
                ></TextInput>

                <TextInput style={{
                    height: 40,
                    margin: 20,
                    marginTop: 10,
                    borderColor:'gray',
                    borderWidth: 1
                }}
                    keyboardType="number-pad"
                    placeholder="Enter phone number"
                    secureTextEntry={true}

                ></TextInput>
                <Button title='Save' style="width:50"></Button>
            </View>
        )
    }
}
