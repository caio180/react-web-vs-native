import { StatusBar } from 'expo-status-bar';
import { use, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [nome, setnome] = useState('')
  const [email, setemail] = useState('');
  const [senha, setsenha] = useState('');
  const [cidade, setcidade] = useState('');

  return (
    <>
    return (
    <View style={styles.container}>
        <StatusBar style="auto" />

        <Text style={styles.titulo}>Tela de Cadastro</Text>

        <View style={styles.formulario}>
            <Text>Nome</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu nome"
                value={nome}
                onChangeText={setnome}
            />

            <Text>E-mail</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu E-mail"
                value={email}
                onChangeText={setemail}
            />

            <Text>Senha</Text>
            <TextInput
                style={styles.input}
                placeholder="Crie uma senha"
                value={senha}
                onChangeText={setsenha}
                secureTextEntry
            />

            <Text>Cidade</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite o nome da sua cidade"
                value={cidade}
                onChangeText={setcidade}
            />

            <Button
                title="Cadastrar-se"
                onPress={() => Alert.alert("Cadastro concluído")}
            />
        </View>
    </View>
);
    
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        padding: 25,
    },

    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
    },

    formulario: {
        gap: 8,
    },

    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        marginBottom: 10,
    },
});
