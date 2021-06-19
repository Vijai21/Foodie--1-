import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class RecipeScreen extends React.Component{
    render(){
    return (
        <View style={styles.container}>
        <Text>Recipe Screen</Text>
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
