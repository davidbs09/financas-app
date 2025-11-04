import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header';
import Saldo from '../../components/Saldo';
import Movimentos from '../../components/Movimentos';
import { FlatList } from 'react-native';

const list = [
    {
        id: 1,
        label: 'Boleto conta luz',
        value: '300,90',
        date: '29/10/2025',
        type: 0 //despesas
    },
    {
        id: 2,
        label: 'Pix cliente X',
        value: '2.500,00',
        date: '17/10/2025',
        type: 1 //receitas / entradas
    },
    {
        id: 3,
        label: 'Salário',
        value: '7.200,00',
        date: '01/11/2025',
        type: 1 //receitas / entradas
    }

]

export default function Home() {
    return (
        <View style={styles.container}>
            <Header nome="DevBank de David" />
            <Saldo saldo="1.238.987,22" despesas="-1.950,99" />
            <Text style={styles.tittle}>Ultimas Movimentações</Text>
            <FlatList
                style={styles.list}
                data={list}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <Movimentos data={item} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e9e9e9',
    },
    tittle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 14,
        marginRight: 14,
        marginTop: 14,
    },
    list: {
        marginStart: 14,
        marginEnd: 14,
    }
});
