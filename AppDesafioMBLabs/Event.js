import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';

function Event({ route }) {

    // params from the previous page
    const name = JSON.stringify(route.params.name);
    const description = JSON.stringify(route.params.description);
    const price = JSON.stringify(route.params.price);
    const date = JSON.stringify(route.params.date);
    const location = JSON.stringify(route.params.location);
    const category = JSON.stringify(route.params.category);
    const remainingTickets = JSON.stringify(route.params.remainingTickets);

    const [qtd, setQtd] = useState('');
    const [isMarked, setMarked] = useState(false);

    return (
        <View style={styles.container}>
        <ScrollView>


            <Text style={ { ...styles.title, padding: 5 } }>{name.substring(1, name.length-1)}</Text>

            <TouchableOpacity onPress={() => setMarked(!isMarked)} style={{position: 'absolute', left: '85%', top: 8}}>
                { isMarked ? <Icon name="bell-ring" size={32} color="#5402E0" /> : <Icon name="bell-outline" size={32} color="#5402E0" />}
            </TouchableOpacity>


            <View>

                <View style={{margin: 4}}>
                    <Text style={styles.label}>Descrição:</Text> 
                    <Text style={{fontSize: 15}}>{description.substring(1, description.length-1)}</Text>
                </View>

                <View style={styles.line}>
                    <Text style={styles.label}>Preço:</Text>
                    <Text style={styles.text}> R$ {price}</Text>
                </View>

                <View style={styles.line}>
                    <Text style={styles.label}>Data:</Text>
                    <Text style={styles.text}> {date.substr(9,2) + "/" + date.substr(6,2)}</Text>
                </View>

                <View style={styles.line}>
                    <Text style={styles.label}>Localização:</Text>
                    <Text style={styles.text}> {location.substring(1, location.length-1)}</Text>
                </View>

                <View style={styles.line}>
                    <Text style={styles.label}>Categoria:</Text>
                    <Text style={styles.text}> {category.substring(1, category.length-1)}</Text>
                </View>

                <View style={{...styles.line, justifyContent: 'center', top: 15}}>
                    <Text style={{fontSize: 22, width: 80, height: 80, padding: 10, borderRadius: 100, backgroundColor: '#00A2E8', color: "#FFF", textAlign: 'center', textAlignVertical: 'center'}}>{remainingTickets}</Text>
                    <Text style={{...styles.label, color: "#00A2E8"}}>  Ingressos restantes</Text>
                </View>

            </View>

        <View style={styles.bottomLine}>

            <TextInput
                style={{fontSize: 22, width: 80, padding: 15, borderWidth: 2, borderRadius: 15, borderColor: '#00A2E8', textAlign: 'center'}}
                placeholder="Qtd."
                onChangeText={qtd => setQtd(qtd)}
                defaultValue={qtd}
                keyboardType='number-pad'
            />

            <TouchableOpacity style={styles.buyBtn} onPress={() => (Number(qtd) > 0) && ((remainingTickets - Number(qtd)) >= 0) ? Alert.alert("Sucesso!", "Seus " + qtd + " ingressos foram comprados com sucesso!") : Alert.alert("Oops!", "Tivemos um problema ao efetuar a compra! Verifique as informações e tente novamente.")}>
                <Text style={{ fontSize: 22, color: '#FFF' }}>C O M P R A R</Text>
            </TouchableOpacity>

        </View>

        </ScrollView>

        </View>
    );
}

export default Event;

const styles = StyleSheet.create({
    container: {
        padding: 15,
        width: '94%',
        borderRadius: 10,
        backgroundColor: '#FFF',
        margin: 10,
    },

    info: {
        
    },

    title: {
        fontSize: 22,
        fontWeight: "bold",
        paddingBottom: 10,
    },

    label: {

        fontSize: 18,
        fontWeight: "bold",
    },

    text: {
        fontSize: 18,
    },

    line: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 4,
    },

    bottomLine: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
        
    },

    buyBtn: {
        padding: 15,
        backgroundColor: '#00A2E8',
        left: 10,
        borderRadius: 15,
    },
});