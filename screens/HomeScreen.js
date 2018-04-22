import React from 'react';
import {
  AppRegistry,
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
import AtoZList from 'react-native-atoz-list';
import randomcolor from 'randomcolor';
import _ from 'lodash';
import Swipeout from 'react-native-swipeout';
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
  {
    name: 'Mikhail Dicksucker',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Asshole'
  },
  {
    name: 'Alexey Pizdila',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Horse dickhead'
  },
]

export default class HomeScreen extends React.Component {
  constructor(props, context) {
      super(props, context);

    }
  state={
      data:list,
      swipeoutBtns:[
        {
          text: 'Button'
        }
      ],
  }
  static navigationOptions = {
    header: null,
  };
  onTextChange = (text) =>{
   let data=_.filter(list, { subtitle: text });
  /* let test=_.filter(list, function(value, key) {
    //  return key.startsWith("A");
    });  //);
    console.log(test);*/
    this.setState({data:data});
    if(text === ""){
      this.setState({data:list});
      console.log(this.state.data);
    }
    console.log(text); //TODO write search
  }
  onTextClear = () =>{
    console.log("clear")
  }
  componentDidMount(){
    console.log(list);
  }



  keyExtractor = (item, index) => index.toString();
  _renderHeader(data) {
    return (
        <View style={{ height: 35, justifyContent: 'center', backgroundColor: '#eee', paddingLeft: 10 }}>
            <Text>{data.sectionId}</Text>
        </View>
      )
  }

  renderItem = (data) => (
    <Swipeout right={[
    {
      text: 'delete',
      onPress:() => console.log('delete'),
      style: { backgroundColor: '#ff0000', color: 'white' },

    }
  ]}
  onOpen={() => console.log('open')}
  onClose={() => console.log('close')}
  >
    <ListItem //TODO Swipeout
      title={data.name}
      subtitle={data.subtitle}
      avatar={<Avatar
                small
                rounded
                source={{uri: data.avatar_url}}
                onPress={() => console.log("Avatar Pressed")}
                activeOpacity={0.7}
              />}
    />
    </Swipeout>
  )

      render() {

        let data = _.sortBy(this.state.data, 'name');
        data = _.groupBy(this.state.data, (item) => item.name[0].toUpperCase());
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
            <SearchBar
            lightTheme
            onChangeText={this.onTextChange}
            onClearText={this.onTextClear}
            icon={{ type: 'font-awesome', name: 'search' }}
            placeholder='Type Here...'
            />
            <AtoZList
              ref="atozlist"
              style={styles.content}
              contentContainerStyle={styles.contentContainer}
              sectionHeaderHeight={35}
              cellHeight={95}
              data={data}
              renderCell={this.renderItem}
              renderSection={this._renderHeader}
            />
          </View>
        );
  }


}
const styles = StyleSheet.create({
  content: {
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
  placeholderCircle: {
        width: 50,
        height: 50,
        backgroundColor: '#ccc',
        borderRadius: 25,
        marginRight: 10,
        marginLeft: 5,
    },
    name: {
        fontSize: 15,
    },
    cell: {

        height: 95,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
      },
      alphabetSidebar: {
        position: 'absolute',
        color:"#4244ff",
        backgroundColor: 'transparent',
        top: 0,
        bottom: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
      },
});
