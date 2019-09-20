import React, { Component } from 'react'
import { Button, View, TextInput, Image, StyleSheet } from 'react-native';
export default class DetailsScreen extends Component {
    static navigationOptions = {
        title: 'Edit',
    };
    render() {
        const { navigation } = this.props;
        const item = navigation.getParam('item');
        return (
            <View style={{
               backgroundColor:'#E8E8E8'
            }}>
            <View style={{ justifyContent: 'center',
        alignItems: 'center',}}>
                <Image source={{ uri: item.imageUrl }}
                    style={styles.detailText}>
                </Image>
                </View>
                <TextInput style={{
                    height: 40,
                    margin: 20,
                    marginBottom: 10,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                    keyboardType="default"
                    placeholder="Enter name"
                defaultValue={item.name}
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
                    defaultValue={item.phoneNumber}

                ></TextInput>
                <Button title='Save' style="width:50"></Button>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    detailText: {
        width: 200,
         height: 200,
         margin: 5
    }
})
