import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class LandingScreen extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <SafeAreaView>
          <Text>Login or Signup!</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('LoginScreen')}>
            <Text>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('NameAndPassScreen')}>
            <Text>Sign up</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    );
  }
 
}

const styles = StyleSheet.create({
  container: {

  }
})