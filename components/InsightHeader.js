import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
export default class InsightHeader extends React.Component {
    constructor (props) {
        super(props)
     }

  render() {
    return(
      <View>
         
       
        <SafeAreaView  style={styles.container}>
           <Icon color='#617FCF' size={30} type='material-community' />
           <Icon  color='#617FCF' size={30} type='material-community' name='home-outline' />
           <Icon color='#617FCF' size={30} type='material-community' />
        </SafeAreaView>
      
      </View>
    );  
  }
}   


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor:'#00DB8A'
  }
})

