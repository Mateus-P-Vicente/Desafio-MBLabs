import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, } from 'react-native';
import { Card, Icon } from 'react-native-elements'
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

function Search() {

    const [text, setText] = useState('');
    const [searchedEvents, setEvents] = useState('');

    return (
        <View style={{padding: 15}}>
        <ScrollView>

            <View style={styles.container}>

                <TextInput
                    style={{fontSize: 22, width: '85%', padding: 10, borderWidth: 2, borderRadius: 15, borderColor: '#929292'}}
                    placeholder="Buscar evento..."
                    onChangeText={text => setText(text)}
                    defaultValue={text}
                />

                <TouchableOpacity style={styles.btnIcon} onPress={searchedEvents => setEvents(events.filter(event => event.name.includes(text)))} >
                    <Icon name="search"  size={30} color="#00A2E8" />
                </TouchableOpacity>

            </View>

            <Text style={styles.title}>Evento(s) encontrado(s):</Text>
            <FlatList
                data={searchedEvents}
                renderItem={({item: rowData}) => {
                return(
                    <Card
                    title={rowData.name + " (" + rowData.date + ")"}
                    key={rowData.i}
                    containerStyle={{ padding: 10, width: 300, borderRadius: 10 }} >
                    <Text style={{marginBottom: 10}}>
                        {rowData.description}
                    </Text>
                    </Card>
                );
                }}
                keyExtractor={(item) => item.id} />

        </ScrollView>
        </View>
    );
}

export default Search;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
    },

    title: {
        paddingTop: 15,
        paddingLeft: 5,
        fontSize: 18,
    },

    btnIcon: {                                      
        right: -10,
    },
});