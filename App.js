import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image style={styles.img} source={require("./assets/nubank-logo-branco.png")} />
      </View>
      <View>
        <Text style={styles.textobemVindo}>
          Olá, Felipe Melo
        </Text>
        <TextInput placeholder='Procurar...' placeholderTextColor={"white"} style={styles.search}>
        </TextInput>
        <View style={styles.CartaoProduto}>
            <Text style={styles.textoTitulo}>Cartão de crédito</Text>
            <Text>Fatura</Text>
            <Text style={styles.txtValor}>RS 1.500,00</Text>
            <TouchableOpacity style={styles.botaoPagar}>
              <Text style={
                styles.textoPagamento
              }>Pagar Fatura</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.CartaoProduto}>
            <Text style={styles.textoTitulo}>Conta</Text>
            <Text>Saldo disponível</Text>
            <Text style={styles.textoConta}>RS 300,00</Text>
            <TouchableOpacity style={styles.botaoPagar}>
              <Text style={
                styles.textoPagamento
              }>Transferir</Text>
            </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bemVindo}>
     
        <View style={styles.Cartoes}>
        <TouchableOpacity style={styles.botaoCartoes}>
              <Text style={styles.textoCartoes}>Meus cartões</Text>
            </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8B03BB",
    padding: 30
    
  },
  logo: {
    height: '13%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bemVindo: {
    color: '#8B03BB',
    flex: 2,
    marginTop: 30
  },
  textobemVindo:{
    color:'#fff',
    marginBottom:20,
    fontSize: 15
  },
  search: {
    borderRadius: 10,
    padding: 10,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#FFF',
    color: "#FFF",
    fontSize: 17,
  },
  Cartoes: {
    marginBottom: 50,
    backgroundColor:'#0099CC',
    borderRadius: 15,
  },
  botaoPagar: {
    padding: 6,
    width: 150,
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#8B03BB'
    
  },  
  CartaoProduto: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 30
  },
  botaoCartoes: {
    backgroundColor: '#0',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center'
  },
  textoConta: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
    
  },
  textoPagamento: {
    color: '#8B03BB',
    fontWeight: 'bold'
  },
  textoTitulo: {
    fontWeight: 'bold',
    fontSize: 16
  },
  textoValor: {
    color: '#0099CC',
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  textoCartoes: {
    color: 'white',
    fontSize: 20,
  },
  img: {
    width: 150,
    height: 50,
  },

});