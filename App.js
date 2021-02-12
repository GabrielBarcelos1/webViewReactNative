
import React from 'react';
import { WebView } from 'react-native-webview';
import {Title,InputText} from './src/style.js'

export default function App() {
  return (
    <>
    <Title></Title>
    <InputText></InputText>
    <Title onPress={()=>console.log("teste")}> teste</Title>
    <WebView source={{ uri: 'https://www.cassol.com.br/' }}
    
     />
    </>
  );
}

