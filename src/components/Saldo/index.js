import React from "react";
import {
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function Saldo({ saldo, despesas }) {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.itemTitulo}>Saldo</Text>
                <View style={styles.content}>
                    <Text style={styles.simboloSaldod}>R$</Text>
                    <Text style={styles.Saldo}>
                        {saldo}
                    </Text>
                </View>
            </View>
            <View style={styles.item}>
                <Text style={styles.itemTitulo}>Gastos</Text>
                <View style={styles.content}>
                    <Text style={styles.simboloSaldod}>R$</Text>
                    <Text style={styles.despesas}>
                        {despesas}
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99,
    },
    item: {

    },
    itemTitulo: {
        fontSize: 20,
        color: '#8b8b8b',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    simboloSaldod: {
        color: '#8b8b8b',
        marginRight: 6,
    },
    Saldo: {
        fontSize: 22,
        color: '#2ecc71',
    },
    despesas: {
        fontSize: 22,
        color: '#e74c3c',
    }
});