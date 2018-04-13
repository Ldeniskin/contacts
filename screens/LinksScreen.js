import React from 'react';
import { ScrollView, StyleSheet,Text,Button } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  
  static navigationOptions = {
    title: 'Links',
  };
  onPressLearnMore=()=>{

  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Vasya hui</Text>
        <Button
    onPress={this.onPressLearnMore}
    title="Learn More"
    color="#f0f"
    accessibilityLabel="Learn more about this purple button"
  />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
