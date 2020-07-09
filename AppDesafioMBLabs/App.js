import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Font } from 'expo'
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';



const events = [
  {
     name: 'Palestra Sobre Empreendedorismo',
     description: 'Essa palestra vai falar sobre empreendimentos e como se dar bem em meio a pandemia. Saiba a hora certa de empreender!',
     price: 25.0,
     date: '20/07',
     location: 'Cambuí',
     category: 'Palestra',
     
  },
  {
    name: 'Palestra Sobre Desenvolvimento Mobile',
    description: 'Essa palestra vai falar sobre desenvolvimento mobile e tudo para você aprender a programar. Esperamos você!',
    price: 20.0,
    date: '30/07',
    location: 'Cambuí',
    category: 'Palestra',
    
 },
 {
  name: 'Show da Ivete Sangalo',
  description: 'Esse será o show mais lembrado da Veveta, com muita animação, empolgação e música. Aproveite já!',
  price: 70.0,
  date: '02/08',
  location: 'Allianz Parque',
  category: 'Show',
  
},
];

const recentEvents = [
  {
     name: 'Palestra do Chef Suzuki',
     description: 'Essa palestra do renomado chef japonês Suzuki te ensinará a cozinhar exatamente igual os japoneses. O evento é gratuito, mas os ingressos são limitados!',
     price: 0.0,
     date: '15/07',
     location: 'Taquaral',
     category: 'Palestra',
     
  },
  {
    name: 'Evento de integração da Comunidade Árabe',
    description: 'Esse evento foi organizado para exercitar a cultura árabe e reforçar a existência da nossa comunidade. Venha conhecer e experimentar sabores e tradições do Oriente Médio!',
    price: 10.0,
    date: '22/07',
    location: 'Centro de Convivência',
    category: 'Evento a céu aberto',
    
 },
 {
  name: 'Feira Tec é Top',
  description: 'Venha conhecer diversos projetos interessantes que buscam renovar nossas tecnologias usuais e apresentar soluções inovadoras para problemas complicados. Venha participar!',
  price: 30.0,
  date: '02/08',
  location: 'Allianz Parque',
  category: 'Feira Tecnológica',
  
},
];



export default function App() {
  return (
    
    <View style={styles.container}>

      <Image source={require("./images/app_logo.png")} style={styles.logo}/>
      <ScrollView>

      <Text style={styles.title}>Meu(s) próximo(s) evento(s)</Text>
      <FlatList
        horizontal
        data={events}
        renderItem={({item: rowData}) => {
          return(
            <Card
              title={rowData.name + " (" + rowData.date + ")"}
              key={rowData.i}
              containerStyle={{ padding: 10, width: 200 }} >
              <Text style={{marginBottom: 10}}>
                {rowData.description}
              </Text>
            </Card>
          );
        }}
        keyExtractor={(item) => item.id} />

      <Text style={styles.title}>Eventos lançados recentemente</Text>
      <FlatList
        horizontal
        data={recentEvents}
        renderItem={({item: rowData}) => {
          return(
            <Card
              title={rowData.name + " (" + rowData.date + ")"}
              key={rowData.i}
              containerStyle={{ padding: 10, width: 200 }} >
              <Text style={{marginBottom: 10}}>
                {rowData.description}
              </Text>
            </Card>
          );
        }}
        keyExtractor={(item) => item.id} />

      <Text style={styles.title}>Eventos que você pode gostar</Text>
      <FlatList
        horizontal
        data={events}
        renderItem={({item: rowData}) => {
          return(
            <Card
              title={rowData.name + " (" + rowData.date + ")"}
              key={rowData.i}
              containerStyle={{ padding: 10, width: 200 }} >
              <Text style={{marginBottom: 10}}>
                {rowData.description}
              </Text>
            </Card>
          );
        }}
        keyExtractor={(item) => item.id} />

      {/* {
      events.map((e, i) => {
        return (  
          <Card
            title={e.name + " (" + e.date + ")"}
            key={i}>
            <Text style={{marginBottom: 10}}>
              {e.description}
            </Text>
          </Card>
        )})
      } */}


      <Text style={styles.warn}>* Os eventos listados nesse app são meramente ilustrativos. Nenhum preço, localização, palestrante ou data corresponde à realidade.</Text>

      </ScrollView>

      <TouchableOpacity style={styles.floatActionButton}>
      <Icon name="search"  size={30} color="#FFFFFF" />
      </TouchableOpacity>

      {/* <StatusBar style="auto" /> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
  },

  title: {
    paddingTop: 8,
    paddingLeft: 10,
    fontSize: 22,
  },

  warn: {
    fontWeight: 'bold',
    fontSize: 10,
    padding: 10,
  },

  logo: {
    alignSelf: 'stretch',
    width: '100%',
  },

  floatActionButton: {
    borderWidth: 1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width: 60,
    position: 'absolute',                                          
    bottom: 10,                                                    
    right: 10,
    height: 60,
    backgroundColor: '#00A2E8',
    borderRadius: 100,
  }
});
