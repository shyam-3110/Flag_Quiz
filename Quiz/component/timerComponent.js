import React,{Component} from 'react';
import {AppRegistry, Text,View, StyleSheet,Image,Button,TouchableOpacity} from 'react-native';
import TimerCountdown from 'react-native-timer-countdown';

class Timer extends Component{
	constructor(props){
		super(props);
		this.state={
			initialSec : 10,
			option_a:'',
			option_b:'',
			option_c:'',
			option_d:'',

		}
	}

	dispSec = ()=>{
		this.setState({initialSec:this.state.initialSec-1})
	}
	timeComp = ()=>{
		this.setState({initialSec:0})
	}
	render(){
		return(
			<View>
		 		<TimerCountdown
		            initialSecondsRemaining={10000}
		            onTimeElapsed={() => this.timeComp()}
		            allowFontScaling={true}
		            style={{ fontSize: 20 }}
		        />
		        <Text>{this.state.initialSec}</Text>
			</View>

		);
	}
}

export default Timer;