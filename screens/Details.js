import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Details extends React.Component{
    render(){
    return (
        <View style={styles.container}>
        <Text>Details</Text>
        </View>
    );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });