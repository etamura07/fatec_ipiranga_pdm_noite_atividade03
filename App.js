import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [contatos, setContatos] = useState([]);
  const [contador, setContador] = useState(0);
  
  const handleNome = (nome) => {
    setNome(nome);
  }
  const handleTelefone = (telefone) => {
    setTelefone(telefone);
  }

  const adicionarContato = () => {
    setContatos(contatos => {
      setContador (contador + 1);
      return [{key: contador.toString(), value: 'Nome: ' + nome + ' / ' + 'Telefone: ' + telefone}, ...contatos];
    })
  }
  return (
    <View style={styles.container}>
     <View style={styles.contatoInputView}>
        <TextInput 
          placeholder="Digite o nome..."
          style={styles.contatoTextInput}
          onChangeText={handleNome}
        />
        <TextInput 
          placeholder="Digite o telefone..."
          style={styles.contatoTextInput}
          onChangeText={handleTelefone}
        />
        <View
          style={styles.contatoInputButton}
        >
        <Button          
          title="+"
          onPress={adicionarContato}
        />
        </View>
     </View>
     <View>
    <View
      style={{width: '80%', alignSelf: 'center'}}
    >
      <FlatList 
        data={contatos}
        renderItem = {contato => (
          <View style={styles.itemNaLista}>
            <Text>{contato.item.value}</Text>
          </View>
        )}
      />
    </View>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    padding: 40 
  },
  contatoInputView: { 
    alignItems: 'center',
    marginBottom: 12 
  },
  contatoTextInput: {
    width: '80%',
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
    marginBottom: 4,
    padding: 4,
    textAlign: 'center'
  },
  contatoInputButton: { 
    width: '80%' 
  },
  itemNaLista: {
    padding: 12,
    backgroundColor: '#DDD',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 16,
    alignItems: 'center'
  }
})


