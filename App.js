import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image } from 'react-native';


export default class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {texto1:'texto 1',texto2:'texto 2'};

    this.escrever = this.escrever.bind(this);
  }


  mudar_vogais(t){
    let novoTexto = t.toLowerCase();
    novoTexto = novoTexto.replace(/(a|e|i|o|u)/g,'i');
    novoTexto = novoTexto.replace(/(à|á|â|ã)/g,'i');
    novoTexto = novoTexto.replace(/(é|è|ê)/g,'i');
    novoTexto = novoTexto.replace(/(í|ì|î)/g,'i');
    novoTexto = novoTexto.replace(/(ó|ò|ô)/g,'i');
    novoTexto = novoTexto.replace(/(ù|ú|û)/g,'i');
    return novoTexto;
  }

  escrever(t){
    let texto = this.state;
    texto.texto1 = t;
    texto.texto2 = this.mudar_vogais(t);

    this.setState(texto);
  }

  render() {
    return (
      <View style={style.body}>
        <View>
            <Text style={style.titulo}> Criador de Mimimi </Text>
        </View>

        <View style={style.inputArea}>
            <TextInput style={style.input} placeholder="Digite seu mimimi" onChangeText={this.escrever}/>
        </View>

        <View style={style.area}>
            <Text style={[style.texto, style.texto1]}>{this.state.texto1.toUpperCase()}</Text>
              <Image style={style.guri} source={require('./images/mimimi.jpg')}/>
            <Text style={[style.texto, style.texto2]}>{this.state.texto2.toUpperCase()}</Text>
        </View>

      </View>
    );
  }
}


const style = StyleSheet.create({
  body:{
    backgroundColor:'#999999',
    paddingTop:20,
    flex:1,
    flexDirection:'column',
    alignItems:'center'
  },
  titulo:{
    fontSize:20,
    color:'#FFFFFF'
  },
  inputArea:{
    alignSelf:'stretch'
  },
  input:{
    borderWidth:1,
    borderColor:'#999999',
    backgroundColor:'#EEEEEE',
    color:'#000000',
    height:40,
    margin:20,
    padding:10
  },
  area:{
    width:300,
    height:300
  },
  guri:{
    width:300,
    height:300,
    marginTop:-70,
    zIndex:0
  },
  texto:{
    fontSize:18,
    color:'#FFFFFF',
    padding:10,
    backgroundColor:'transparent',
    fontWeight:'bold',
    textAlign:'center',
    height:70
  },
  texto1:{
    zIndex:1
  },
  texto2:{
    zIndex:1,
    marginTop:-70
  }
})
