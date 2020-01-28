import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import homeIcon from '../../assets/image/house.png'
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Tabs from 'react-native-tabs';
export default class NotificationApprovalScreen extends React.Component {
  render() {

    return(
      <View style={styles.container}>  
        <View style={styles.ViewBox}>
             <Text style={styles.NotificationTitle}> <Image style={styles.iconBg} source={homeIcon} />    Homi  <Text style={styles.NotificationTime}>now</Text></Text> 
            
             <Text style={styles.NotificationText}>New offer for a Mortgage Pre-Approval. We’ll save them for when you’re ready. </Text>
        </View>   
      </View>
    )   
  }
}  

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#404040',
},
ViewBox:{
    borderBottomWidth:1,
    borderTopWidth:1,
    borderColor:'#FFFFFF',
    paddingBottom:35,
    paddingTop:35
},
NotificationTitle:{
    color: '#FFFFFF',	
    fontSize: 19,	
    fontWeight: '500',	
    letterSpacing: -0.1,	
    lineHeight:24,
},
NotificationTime:{
    color: '#FFFFFF',		
    fontSize: 13,	
    letterSpacing: -0.07,
    lineHeight: 24,
},
iconBg:{
    backgroundColor:'#fff',
    height:20,
    width:20
},
NotificationText:{
    color:'#fff',
    paddingLeft:40,
    paddingTop:5 
}
}); 