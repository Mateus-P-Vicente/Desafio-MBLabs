import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, } from 'react-native';
import { Card, Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';

import events from './events.js';

function Search({ navigation }) {

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

                <TouchableOpacity style={styles.btnIcon} onPress={searchedEvents => setEvents(events.filter(event => event.name.toUpperCase().includes(text.toUpperCase())))} >
                    <Icon name="search"  size={35} color="#00A2E8" />
                </TouchableOpacity>

            </View>

            <Text style={styles.title}>Evento(s) encontrado(s):</Text>
            <FlatList
                data={searchedEvents}
                renderItem={({item: rowData}) => {
                return(
                    <TouchableOpacity onPress={() => navigation.navigate('Event', {
                        name: rowData.name,
                        description: rowData.description,
                        price: rowData.price,
                        date: rowData.date,
                        location: rowData.location,
                        category: rowData.category,
                        remainingTickets: rowData.remainingTickets,
                      }
                      )} >

                    <Card
                    title={rowData.name + " (" + rowData.date.substr(8,2) + "/" + rowData.date.substr(5,2) + ")"}
                    key={rowData.i}
                    containerStyle={{ padding: 10, width: 300, borderRadius: 10 }} >
                    <Text style={{marginBottom: 10}}>
                        {rowData.description}
                    </Text>
                    </Card>

                    </TouchableOpacity>
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