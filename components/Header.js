import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
export default class DefaultHeader extends React.Component {
  render() {
    
    return(
      <View>
        <SafeAreaView style={styles.container}>
           <Icon  color='#617FCF' size={30} type='material-community' name='home-outline' />
           <Icon color='#617FCF' size={30} type='material-community' name='menu' />
           
        </SafeAreaView>
      </View>
    ); 
  }
}  
 
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:30

  }
})