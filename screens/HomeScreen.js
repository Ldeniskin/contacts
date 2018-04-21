import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icon, ListItem, Avatar, SearchBar } from 'react-native-elements'
const list = [
  {
    name: 'Vasya Mrazina',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Huesos'
  },
  {
    name: 'Vitalik Huila',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Dolboeb'
  },
]
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      subtitle={item.subtitle}
      avatar={<Avatar
                small
                rounded
                source={{uri: item.avatar_url}}
                onPress={() => console.log("Avatar Pressed")}
                activeOpacity={0.7}
              />}
    />

  )
      render() {
        return (
          <View style={styles.container}>
            <View style={styles.topbar}>
                <View style={styles.toprightbar}>
                  <Icon
                    reverse
                    name='ios-create-outline'
                    type='ionicon'
                    color='#4244ff'
                    onPress={() => console.log("Edit Pressed")}
                    size={15}
                  />
                </View>
                <Text style={styles.title}>Contacts</Text>
                <View style = {styles.topleftbar}>
                  <Icon
                    reverse
                    name='ios-add'
                    type='ionicon'
                    color='#00ee67'
                    size={15}
                    onPress={() => console.log("Add Pressed")}

                  />
              </View>
            </View>
            <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
              <FlatList
                keyExtractor={this.keyExtractor}
                data={list}
                renderItem={this.renderItem}
              />
            </ScrollView>
          </View>
        );
  }


}

const styles = StyleSheet.create({
  content: {
    paddingTop: 30,
    flex:1,
  },
  container: {
    flex: 1,
    paddingTop:30,
    backgroundColor: '#fff',
    flexDirection:'column',
  },
  topbar:{
    flexDirection:'row',
  },
  toprightbar:{
    flex:1,
    alignItems:'flex-start'
  },

  topleftbar:{
    flex:1,
    alignItems:'flex-end'
  },

  title:{
    textAlign:'center',    
    flex:8,
    alignSelf:'center',
    fontSize: 20,
  },
  contentContainer: {

  },
});
