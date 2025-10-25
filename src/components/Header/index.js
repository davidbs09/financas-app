import React from 'react';

import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    Touchable,
    TouchableOpacity
} from 'react-native';

import { Feather } from '@expo/vector-icons';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;
const userName = 'David Bissaco';

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.userName}>{userName}</Text>
                <TouchableOpacity activeOpacity={0.9} style={styles.btnUser}>
                    <Feather name="user" size={27} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8000ff',
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    userName:{
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
    btnUser: {
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255,255,255,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44 / 2,
    }
})