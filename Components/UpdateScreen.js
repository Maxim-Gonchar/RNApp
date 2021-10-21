import React, { createContext, useState } from 'react'
import { StyleSheet, View, Button, SafeAreaView, Image, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Keyboard } from 'react-native'
import { ModalUpdate } from './ModalUpdate';
import { Context } from '../Context';
import { MaterialIcons } from '@expo/vector-icons';


export const UpdateScreen = () => {
    const { firstName, secondName, image } = useSelector(state => state)
    const [modal, setModal] = useState(false)
    const navigation = useNavigation();
    return (
        <Context.Provider value={{ modal, setModal }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView style={styles.container}>
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                        <MaterialIcons name="arrow-back-ios" size={30} color="white" />
                    </TouchableOpacity>
                    <ModalUpdate />
                    <View >
                        <View>
                            <Image style={styles.image} source={{ uri: image }} />
                        </View>
                        <View style={styles.textContainer}>
                            <View style={styles.text}>
                                <Text>{firstName}</Text>
                            </View>
                            <View style={styles.text}>
                                <Text>{secondName}</Text>
                            </View>
                        </View>
                        <View style={{ alignItems: "center" }}>
                            <TouchableOpacity style={styles.button} onPress={() => setModal(true)}>
                                <Text>Update</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </Context.Provider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: "15%",
        paddingVertical: "20%",
    },
    image: {
        width: "100%",
        height: 200,
        marginBottom: "20%"
        // resizeMode: "contain",
    },
    textContainer: {
        // justifyContent: "center",
        alignItems: "center",
        marginBottom: "10%",
    },
    text: {
        width: "100%",
        height: 50,
        marginBottom: "10%",
        fontSize: 18,
        textAlign: "center",
        borderRadius: 15,
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        width: 150,
        height: 50,
        borderWidth: 2,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    backButton: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: "black",
        opacity: 0.6,
        position: "absolute",
        left: 10,
        top: 20,
        zIndex: 100,
        justifyContent: "center",
        paddingLeft: 10
    },
});