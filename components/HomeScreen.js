import React, { Component } from 'react'
import { Button, View, Text, FlatList, ScrollView, Image, StyleSheet } from 'react-native';
import flatListData from './../data/flatListData'

export default class Home extends Component {
  static navigationOptions = {
    title: 'Contact',
  };
  render() {
    return (
      <View>
        <ScrollView>
          <View style={{ flex: 1 }}>
            <FlatList data={flatListData}
              renderItem={({ item, index }) => {
                return (
                  <FlatListItem item={item} index={index}
                  onPress={()=>this.props.navigation.navigate('Details')}
                   >
                  </FlatListItem>
                )
              }}
            >
            </FlatList>
          </View>
        </ScrollView>

        <View style={{ position: 'absolute', right: 10, bottom: 10, width: 40, height: 40, backgroundColor: '#3366CC', alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>
          <Text style={{ color: 'white', fontSize: 25 }}
            onPress={() => this.props.navigation.navigate('Add')}>+</Text>
        </View>

      </View>
    )
  }
}
class FlatListItem extends Component {
  render() {
    return (
      <View>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          backgroundColor: '#111111'
        }}
        >
          <Image source={{ uri: this.props.item.imageUrl }}
            style={{ width: 100, height: 100, margin: 5 }}
            >

          </Image>
          <View
            style={{ flex: 1, flexDirection: 'column' }}>
            <Text style={styles.flatListItem}>{this.props.item.name}</Text>
            <Text style={styles.flatListItem}>{this.props.item.phoneNumber}</Text>
          </View>

        </View>
        <View style={{ height: 1, color: 'white' }}>
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
