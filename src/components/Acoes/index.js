import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Acoes() {
    return (
        <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.botaoAtivo}>
                <View style={styles.espaçoBotao}>
                    <Feather name="folder-plus" size={26} color="black" />
                </View>
                <Text style={styles.botaoLabel}>Entradas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoAtivo}>
                <View style={styles.espaçoBotao}>
                    <AntDesign name="tags" size={26} color="black" />
                </View>
                <Text style={styles.botaoLabel}>Compras</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoAtivo}>
                <View style={styles.espaçoBotao}>
                    <FontAwesome name="credit-card" size={26} color="black" />
                </View>
                <Text style={styles.botaoLabel}>Carteira</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoAtivo}>
                <View style={styles.espaçoBotao}>
                    <AntDesign name="barcode" size={26} color="black" />
                </View>
                <Text style={styles.botaoLabel}>Boletos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoAtivo}>
                <View style={styles.espaçoBotao}>
                    <MaterialIcons name="attach-money" size={26} color="black" />
                </View>
                <Text style={styles.botaoLabel}>Empréstimo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoAtivo}>
                <View style={styles.espaçoBotao}>
                    <Feather name="settings" size={26} color="black" />
                </View>
                <Text style={styles.botaoLabel}>Conta</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        maxHeight: 84,
        marginBottom: 14,
        marginTop: 18,
        paddingEnd: 14,
        paddingStart: 14,
    },
    botaoAtivo: {
        alignItems: 'center',
        marginRight: 32,
    },
    espaçoBotao: {
        backgroundColor: '#dedede',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    botaoLabel: {
        marginTop: 4,
        fontWeight: 'bold',
    }
});