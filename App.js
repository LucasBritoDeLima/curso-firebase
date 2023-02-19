import { useState, useEffect } from 'react';
import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';
import firebase from './src/firebaseConnection';


export default function App() {

  const [nome, setNome] = useState('Carregando...');
  const [idade, setIdade] = useState('');

  useEffect(()=> {
    async function dados(){

      //Olehiro do banco de dados, observador das mudanças
      await firebase.database().ref('usuarios/2').on('value', (snapshot) => {
        setNome(snapshot.val().name);
        setIdade(snapshot.val().idade);
      })
      
      // await firebase.database().ref('nome').once('value', (snapshot) => {
      //   setNome(snapshot.val());
      // });
    }

    dados();
  }, []);

  return (
    <View style={{marginTop: 35}}>
      
      <StatusBar backgroundColor='#000'/>
      <Text style={{ fontSize: 25}}>Olá {nome}</Text>
      <Text style={{ fontSize: 25}}>Idade {idade}</Text>
    </View>
  );
}