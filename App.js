import { useState, useEffect } from 'react';
import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';
import firebase from './src/firebaseConnection';


export default function App() {

  const [nome, setNome] = useState('Carregando...');
  const [idade, setIdade] = useState('');

  useEffect(()=> {
    async function dados(){
      //Criar um nó
      //await firebase.database().ref('tipo').set('Cliente');

      //Remover um nó
      //await firebase.database().ref('tipo').remove();

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