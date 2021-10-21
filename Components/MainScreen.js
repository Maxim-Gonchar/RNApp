import React, { useEffect, useState } from 'react'
import { StyleSheet, View, TextInput, SafeAreaView, Image, Alert, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getSecondName, getImage, getFistName } from '../Redux/Reducer';
import { useNavigation } from '@react-navigation/native';
import { Keyboard } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


export const MainScreen = () => {
    const dispatch = useDispatch();
    const image = useSelector(state => state.image);
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const navigation = useNavigation();
    useEffect(() => {
        dispatch(getImage("https://source.unsplash.com/random"));
    }, [])

    const pushData = () => {
        if (firstName.trim() && secondName.trim()) {
            dispatch(getFistName(firstName))
            dispatch(getSecondName(secondName))
            navigation.navigate("UpdateScreen")
        } else {
            Alert.alert(
                "Внимание",
                "Заполните все поля",
                [
                    { text: "OK" }
                ]
            )
        }
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.container}>
                {image === null ? (
                    <View style={styles.container}>
                        <Image source={require("../Image/Grandpa.jpg")} style={{ height: "100%", width: "100%" }} />
                    </View>
                ) :
                    (
                        <View >
                            <View>
                                <Image style={styles.image} source={{ uri: image }} />
                            </View>
                            <View style={styles.inputContainer}>
                                <TextInput style={styles.input} onChangeText={text => setFirstName(text)} placeholder="First name..." />
                                <TextInput style={styles.input} onChangeText={text => setSecondName(text)} placeholder="Second name..." />
                            </View>
                            <View style={styles.buttonContainer}>
                                <LinearGradient
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    colors={['blue', 'red', 'green']}
                                    style={styles.button}>
                                    <TouchableOpacity style={styles.button} onPress={() => pushData()}>
                                        <FontAwesome5 name="telegram-plane" size={26} color="white" />
                                        <Text style={{ color: "white" }}>Next screen</Text>
                                    </TouchableOpacity>
                                </LinearGradient>
                            </View>
                        </View>
                    )}
            </SafeAreaView>
        </TouchableWithoutFeedback>
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
    input: {
        width: "100%",
        height: 50,
        marginBottom: "10%",
        fontSize: 18,
        textAlign: "center",
        borderRadius: 15,
        borderWidth: 2
    },
    inputContainer: {
        // justifyContent: "center",
        alignItems: "center",
        marginBottom: "10%"
    },
    buttonContainer: {
        alignItems: "center"
    },
    button: {
        width: 150,
        height: 50,
        // backgroundColor: "grey",
        borderRadius: 15,
        justifyContent: "space-evenly",
        alignItems: "center",
        // borderWidth: 2,
        flexDirection: "row"
    },
    // linearGradient: {
    //     flex: 1,
    //     paddingLeft: 15,
    //     paddingRight: 15,
    //     borderRadius: 5
    // },
    // buttonText: {
    //     fontSize: 18,
    //     fontFamily: 'Gill Sans',
    //     textAlign: 'center',
    //     margin: 10,
    //     color: '#ffffff',
    //     backgroundColor: 'transparent',
    // },
});