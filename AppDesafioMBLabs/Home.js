import * as React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { Card, Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';

import events from './events.js';

function Home({ navigation }) {
    return (
        
        <View style={styles.container}>

        <ScrollView>

            <Image source={require("./images/app_logo.png")} style={styles.logo}/>

            <View style={styles.containerList}>

                <Text style={styles.title}>Meu(s) próximo(s) evento(s)</Text>
                <FlatList
                    horizontal
                    data={events}
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
                        containerStyle={{ padding: 10, width: 200, borderRadius: 10 }} >
                        <Text style={{marginBottom: 10}}>
                            {rowData.description}
                        </Text>
                        </Card>
                        </TouchableOpacity>
                    );
                    }}
                    keyExtractor={(item) => item.id} />

            </View>


            <View style={styles.containerList}>

                <Text style={styles.title}>Eventos lançados recentemente</Text>
                <FlatList
                    horizontal
                    data={events}
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
                        containerStyle={{ padding: 10, width: 200, borderRadius: 10 }} >
                        <Text style={{marginBottom: 10}}>
                            {rowData.description}
                        </Text>
                        </Card>
                        </TouchableOpacity>
                    );
                    }}
                    keyExtractor={(item) => item.id} />

            </View>


            <View style={styles.containerList}>

                <Text style={styles.title}>Eventos que você pode gostar</Text>
                <FlatList
                    horizontal
                    data={events}
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
                        containerStyle={{ padding: 10, width: 200, borderRadius: 10 }} >
                        <Text style={{marginBottom: 10}}>
                            {rowData.description}
                        </Text>
                        </Card>
                        </TouchableOpacity>
                    );
                    }}
                    keyExtractor={(item) => item.id} />

            </View>


            <Text style={styles.warn}>* Os eventos listados nesse app são meramente ilustrativos. Nenhum preço, localização, palestrante ou data corresponde à realidade.</Text>

        </ScrollView>

        <TouchableOpacity style={styles.floatActionButton} onPress={() => navigation.navigate('Search')}>
            <Icon name="search" size={35} color="#FFFFFF" />
        </TouchableOpacity>

        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    title: {
        paddingTop: 8,
        paddingLeft: 10,
        fontSize: 22,
    },

    containerList: {
        padding: 10,
        width: '94%',
        borderRadius: 10,
        backgroundColor: '#FFF',
        margin: 10,
    },

    warn: {
        fontWeight: 'bold',
        fontSize: 10,
        padding: 15,
    },

    logo: {
        width: '100%',
    },

    floatActionButton: {
        alignItems:'center',
        justifyContent:'center',
        width: 65,
        position: 'absolute',                                          
        bottom: 10,                                                    
        right: 10,
        height: 65,
        backgroundColor: '#00A2E8',
        borderRadius: 100,
    }
});