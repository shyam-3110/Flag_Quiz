/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import { Text, View ,StyleSheet, Image} from 'react-native';
import QuesAty from './component/question';
import Timer from './component/timerComponent';
class App extends Component {
  render() {
    return (
      <View style={styles.mainView}>
         <QuesAty />
      </View>
    );
  }
}

const styles = StyleSheet.create({
mainView:{
	backgroundColor: '#90A4AE',
	
	flex: 1,
 
}


});


export default App;