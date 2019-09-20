import React, { Component } from 'react'
import { Button, View, Text, FlatList, ScrollView, Image, StyleSheet } from 'react-native';
import flatListData from './../data/flatListData'
import { TouchableHighlight } from 'react-native';
import { SearchBar } from 'react-native-elements';
export default class Home extends Component {
  static navigationOptions = {
    title: 'Contact',
  };
  render() {
    return (
      <View>
         <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
      />
        <ScrollView>
          <View style={{ flex: 1 }}>
            <FlatList data={flatListData}
              renderItem={({ item, index }) => {
                return (
                  <View>
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('Details',{item})}>
                      <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        backgroundColor: '#111111'
                      }}>

                        <Image source={{ uri: item.imageUrl }}
                          style={{ width: 100, height: 100, margin: 5 }}>
                        </Image>

                        <View
                          style={{ flex: 1, flexDirection: 'column' }}>
                          <Text style={styles.flatListItem} >{item.name}</Text>
                          <Text style={styles.flatListItem} >{item.phoneNumber}</Text>
                        </View>

                      </View>
                    </TouchableHighlight>
                    <View style={{ height: 1, color: 'white' }}>
                    </View>

                  </View>
                )
              }}
            >
            </FlatList>
          </View>
        </ScrollView>

        <View style={{ position: 'absolute', right: 10, bottom: 80, width: 40, height: 40, backgroundColor: '#3366CC', alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>
          <Text style={{ color: 'white', fontSize: 25 }}
            onPress={() => this.props.navigation.navigate('Add')}>+</Text>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  flatListItem: {
    color: 'white',
    padding: 10,
    fontSize: 16
  }
})
