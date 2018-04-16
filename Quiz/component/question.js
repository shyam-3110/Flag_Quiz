import React,{Component} from 'react';
import {AppRegistry, Text,View, StyleSheet,Image,TouchableOpacity} from 'react-native';
import TimerCountdown from 'react-native-timer-countdown';
import {Button,Container,Card,CardItem} from 'native-base';

class QuesAty extends Component{
   constructor(props){
        super(props);
        let list=[];
        var counter = 0;
        while(counter<10){
            let item = counter+ Math.floor(Math.random()*160);
            if(list.indexOf(item)==-1){
            list.push(item)
            counter++;
            }
        }
        this.state={
            initialSec : 10,
            questionCount:0,
            option_a:'',
            option_b:'',
            option_c:'',
            option_d:'',
            viweC:0,
            flagList:list,
            cc:[
              {name: 'Afghanistan', code: 'AF'},
              {name: 'Åland Islands', code: 'AX'},
              {name: 'Albania', code: 'AL'},
              {name: 'Algeria', code: 'DZ'},
              {name: 'American Samoa', code: 'AS'},
              {name: 'AndorrA', code: 'AD'},
              {name: 'Angola', code: 'AO'},
              {name: 'Anguilla', code: 'AI'},
              {name: 'Antarctica', code: 'AQ'},
              {name: 'Antigua and Barbuda', code: 'AG'},
              {name: 'Argentina', code: 'AR'},
              {name: 'Armenia', code: 'AM'},
              {name: 'Aruba', code: 'AW'},
              {name: 'Australia', code: 'AU'},
              {name: 'Austria', code: 'AT'},
              {name: 'Azerbaijan', code: 'AZ'},
              {name: 'Bahamas', code: 'BS'},
              {name: 'Bahrain', code: 'BH'},
              {name: 'Bangladesh', code: 'BD'},
              {name: 'Barbados', code: 'BB'},
              {name: 'Belarus', code: 'BY'},
              {name: 'Belgium', code: 'BE'},
              {name: 'Belize', code: 'BZ'},
              {name: 'Benin', code: 'BJ'},
              {name: 'Bermuda', code: 'BM'},
              {name: 'Bhutan', code: 'BT'},
              {name: 'Bolivia', code: 'BO'}, 
              {name: 'Botswana', code: 'BW'},
              {name: 'Bouvet Island', code: 'BV'},
              {name: 'Brazil', code: 'BR'}, 
              {name: 'Brunei Darussalam', code: 'BN'},
              {name: 'Bulgaria', code: 'BG'},
              {name: 'Burkina Faso', code: 'BF'},
              {name: 'Burundi', code: 'BI'},
              {name: 'Cambodia', code: 'KH'},
              {name: 'Cameroon', code: 'CM'},
              {name: 'Canada', code: 'CA'},
              {name: 'Cape Verde', code: 'CV'},  
              {name: 'Chad', code: 'TD'},
              {name: 'Chile', code: 'CL'},
              {name: 'China', code: 'CN'}, 
              {name: 'Colombia', code: 'CO'},
              {name: 'Comoros', code: 'KM'},
              {name: 'Congo', code: 'CG'},  
              {name: 'Costa Rica', code: 'CR'},
              {name: 'Cote D\'Ivoire', code: 'CI'},
              {name: 'Croatia', code: 'HR'},
              {name: 'Cuba', code: 'CU'},
              {name: 'Cyprus', code: 'CY'}, 
              {name: 'Denmark', code: 'DK'},
              {name: 'Djibouti', code: 'DJ'},
              {name: 'Dominica', code: 'DM'}, 
              {name: 'Ecuador', code: 'EC'},
              {name: 'Egypt', code: 'EG'},
              {name: 'Eritrea', code: 'ER'},
              {name: 'Estonia', code: 'EE'},
              {name: 'Ethiopia', code: 'ET'},  
              {name: 'Fiji', code: 'FJ'},
              {name: 'Finland', code: 'FI'},
              {name: 'France', code: 'FR'}, 
              {name: 'Gabon', code: 'GA'},
              {name: 'Gambia', code: 'GM'},
              {name: 'Georgia', code: 'GE'},
              {name: 'Germany', code: 'DE'},
              {name: 'Ghana', code: 'GH'},
              {name: 'Greece', code: 'GR'},
              {name: 'Greenland', code: 'GL'},
              {name: 'Grenada', code: 'GD'}, 
              {name: 'Guam', code: 'GU'}, 
              {name: 'Guyana', code: 'GY'},
              {name: 'Haiti', code: 'HT'}, 
              {name: 'Honduras', code: 'HN'},
              {name: 'Hong Kong', code: 'HK'},
              {name: 'Hungary', code: 'HU'},
              {name: 'Iceland', code: 'IS'},
              {name: 'India', code: 'IN'},
              {name: 'Indonesia', code: 'ID'},
              {name: 'Iran', code: 'IR'},
              {name: 'Iraq', code: 'IQ'},
              {name: 'Ireland', code: 'IE'}, 
              {name: 'Israel', code: 'IL'},
              {name: 'Italy', code: 'IT'},
              {name: 'Jamaica', code: 'JM'},
              {name: 'Japan', code: 'JP'},
              {name: 'Jersey', code: 'JE'},
              {name: 'Jordan', code: 'JO'},
              {name: 'Kazakhstan', code: 'KZ'},
              {name: 'Kenya', code: 'KE'},
              {name: 'Kiribati', code: 'KI'},
              {name: 'Kuwait', code: 'KW'},
              {name: 'Kyrgyzstan', code: 'KG'}, 
              {name: 'Latvia', code: 'LV'},
              {name: 'Lebanon', code: 'LB'},
              {name: 'Lesotho', code: 'LS'},
              {name: 'Liberia', code: 'LR'},
              {name: 'Lithuania', code: 'LT'},
              {name: 'Luxembourg', code: 'LU'},
              {name: 'Macao', code: 'MO'}, 
              {name: 'Madagascar', code: 'MG'},
              {name: 'Malawi', code: 'MW'},
              {name: 'Malaysia', code: 'MY'},
              {name: 'Maldives', code: 'MV'},
              {name: 'Mali', code: 'ML'},
              {name: 'Malta', code: 'MT'}, 
              {name: 'Martinique', code: 'MQ'},
              {name: 'Mauritania', code: 'MR'},
              {name: 'Mauritius', code: 'MU'},
              {name: 'Mayotte', code: 'YT'},
              {name: 'Mexico', code: 'MX'}, 
              {name: 'Monaco', code: 'MC'},
              {name: 'Mongolia', code: 'MN'},
              {name: 'Montserrat', code: 'MS'},
              {name: 'Morocco', code: 'MA'},
              {name: 'Mozambique', code: 'MZ'},
              {name: 'Myanmar', code: 'MM'},
              {name: 'Namibia', code: 'NA'},
              {name: 'Nauru', code: 'NR'},
              {name: 'Nepal', code: 'NP'},
              {name: 'Netherlands', code: 'NL'}, 
              {name: 'New Caledonia', code: 'NC'},
              {name: 'New Zealand', code: 'NZ'},
              {name: 'Nicaragua', code: 'NI'},
              {name: 'Niger', code: 'NE'},
              {name: 'Nigeria', code: 'NG'},
              {name: 'Niue', code: 'NU'},
              {name: 'Norway', code: 'NO'},
              {name: 'Oman', code: 'OM'},
              {name: 'Pakistan', code: 'PK'},
              {name: 'Palau', code: 'PW'}, 
              {name: 'Panama', code: 'PA'},
              {name: 'Paraguay', code: 'PY'},
              {name: 'Peru', code: 'PE'},
              {name: 'Philippines', code: 'PH'},
              {name: 'Pitcairn', code: 'PN'},
              {name: 'Poland', code: 'PL'},
              {name: 'Portugal', code: 'PT'},
              {name: 'Puerto Rico', code: 'PR'},
              {name: 'Qatar', code: 'QA'},
              {name: 'Reunion', code: 'RE'},
              {name: 'Romania', code: 'RO'},
              {name: 'Russian', code: 'RU'},
              {name: 'RWANDA', code: 'RW'}, 
              {name: 'Saint Lucia', code: 'LC'}, 
              {name: 'Samoa', code: 'WS'},
              {name: 'San Marino', code: 'SM'}, 
              {name: 'Saudi Arabia', code: 'SA'},
              {name: 'Senegal', code: 'SN'},
              {name: 'Serbia', code: 'CS'}, 
              {name: 'Sierra Leone', code: 'SL'},
              {name: 'Singapore', code: 'SG'},
              {name: 'Slovakia', code: 'SK'},
              {name: 'Slovenia', code: 'SI'},
              {name: 'Solomon Islands', code: 'SB'},
              {name: 'Somalia', code: 'SO'},
              {name: 'South Africa', code: 'ZA'}, 
              {name: 'Spain', code: 'ES'},
              {name: 'Sri Lanka', code: 'LK'},
              {name: 'Sudan', code: 'SD'},
              {name: 'Suriname', code: 'SR'}, 
              {name: 'Swaziland', code: 'SZ'},
              {name: 'Sweden', code: 'SE'},
              {name: 'Switzerland', code: 'CH'},  
              {name: 'Tajikistan', code: 'TJ'}, 
              {name: 'Thailand', code: 'TH'}, 
              {name: 'Togo', code: 'TG'},
              {name: 'Tokelau', code: 'TK'},
              {name: 'Tonga', code: 'TO'}, 
              {name: 'Tunisia', code: 'TN'},
              {name: 'Turkey', code: 'TR'},
              {name: 'Turkmenistan', code: 'TM'}, 
              {name: 'Tuvalu', code: 'TV'},
              {name: 'Uganda', code: 'UG'},
              {name: 'Ukraine', code: 'UA'},
              {name: 'UAE', code: 'AE'},
              {name: 'United Kingdom', code: 'GB'},
              {name: 'United States', code: 'US'}, 
              {name: 'Uruguay', code: 'UY'},
              {name: 'Uzbekistan', code: 'UZ'},
              {name: 'Vanuatu', code: 'VU'},
              {name: 'Venezuela', code: 'VE'},
              {name: 'Viet Nam', code: 'VN'}, 
              {name: 'Yemen', code: 'YE'},
              {name: 'Zambia', code: 'ZM'},
              {name: 'Zimbabwe', code: 'ZW'}
            ],

        }
    }
    timeComp = ()=>{
        this.setState({initialSec:0})
    };

    onPress = ()=>{
        var p=this.state.questionCount==9?1:0;
        this.setState({questionCount : this.state.questionCount+1});
        this.setState({viewC:p});
    }

    onPress2 = ()=>{
        var list = [];
        var counter = 0;
        while(counter<10){
            let item = counter+ Math.floor(Math.random()*184);
            if(list.indexOf(item)==-1){
            list.push(item)
            counter++;
            }
        }
        this.setState({flagList:list})
        this.setState({questionCount:0});
        this.setState({viewC:0})
    }


    render(){

        return(
        <Container>
        {
            this.state.viewC==0?
            <Container style={styles.mainView}>

                <View style= {styles.timerView}>
                	<TimerCountdown
                    style={styles.timerText}
                    initialSecondsRemaining={10000}
                    onTimeElapsed={() => this.timeComp()}
                    allowFontScaling={true}
                    
                />
                </View>

                <View style={styles.flagView}>
                <Card style={{backgroundColor: '#757575'}}>
                    <CardItem cardBody style={{backgroundColor: '#757575'}}>
                        <Image
                        style={styles.flagImg}
                        source={{uri: "http://www.countryflags.io/"+this.state.cc[this.state.flagList[this.state.questionCount]]['code']+"/flat/64.png"}}
                    />
                    </CardItem>
                </Card>
                </View>
                
            </Container>
            :
            <Container>
            <Text>Completed</Text>
            <Button title ="Retry" onPress={this.onPress2}><Text>BBB</Text>
            </Button>
            <Text> {this.state.questionCount}</Text>
            </Container>
            }
            </Container>
        );
    }
}



const styles = StyleSheet.create({
mainView:{
	flex: 1,
	justifyContent:  'space-around',
	alignItems:  'center',
    borderColor: '#455A64',
    borderWidth: 4,
    borderStyle: 'solid' ,
       
},

timerView:{
    flex:0.8,
    backgroundColor: '#455A64',
    width: 400,
    alignItems: 'center',
    justifyContent: 'center' ,

    
    
},
flagView:{
    flex:2,
    alignItems:  'center' ,
    justifyContent:  'center' , 
    
},
optionView:{
    flex: 2.5,
    flexDirection: 'column' ,
    margin: 5,
    width: 300
    

},
timerText:{
    fontSize: 50,
    color: '#FFFFFF'
},
O1:{
    flex: 1,
    padding: 4,
    alignItems:  'center', 
    margin: 2,
    backgroundColor: '#FDD835',
    borderRadius: 20,

},
O2:{
    flex: 1,
    padding: 4,
    alignItems:  'center',
    margin: 2,

    backgroundColor: '#80D8FF',
    borderRadius: 20,
    

},
O3:{
    flex: 1,
    padding: 4,
    alignItems:  'center',
    margin: 2,
    backgroundColor: '#B3E5FC',
    borderRadius: 20,

}
});

export default QuesAty;
