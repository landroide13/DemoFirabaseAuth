import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {

  const navigation = useNavigation()

  const handleSignout = () =>{
    auth
      .signOut()
      .then(() =>{
        navigation.replace("Login")
      })
  }

  return (
    <View style={styles.container}>
      <Text>Email: { auth.currentUser?.email }</Text>
      <TouchableOpacity style={styles.button} onPress={handleSignout}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
  },
  button:{
    backgroundColor: '#0782f9',
    width: '50%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText:{
      color: 'white',
      fontWeight: 700,
      fontSize: 16
  }

})