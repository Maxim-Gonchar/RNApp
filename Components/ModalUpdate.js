import React, { useContext, useState } from 'react'
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Modal } from 'react-native';
import { useDispatch } from 'react-redux';
import { getSecondName, getFistName } from '../Redux/Reducer';
import { Context } from '../Context';

export const ModalUpdate = () => {
    const { modal, setModal } = useContext(Context)
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const pushData = () => {
        if (firstName.trim() && secondName.trim()) {
            dispatch(getFistName(firstName))
            dispatch(getSecondName(secondName))
            setModal(false)
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
        <Modal
            visible={modal}
            animationType="fade"
            transparent
        >
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <View style={{ marginVertical: 20 }}>
                        <TextInput style={styles.input} placeholder="First name..." onChangeText={text => setFirstName(text)} />
                        <TextInput style={styles.input} placeholder="Second name..." onChangeText={text => setSecondName(text)} />
                    </View>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity style={[styles.button, { borderBottomLeftRadius: 30 }]} onPress={() => pushData()}>
                            <Text style={{ textAlign: "center" }}>Update</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { borderBottomRightRadius: 30 }]} onPress={() => setModal(false)}>
                            <Text style={{ textAlign: "center" }}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.8)"
    },
    modalContainer: {
        width: "70%",
        height: 300,
        backgroundColor: "white",
        borderRadius: 30,
        justifyContent: "space-between"
    },
    buttonsContainer: {
        flexDirection: "row",
    },
    button: {
        width: "50%",
        height: 70,
        justifyContent: "center",
        backgroundColor: "grey",
    },
    input: {
        width: "100%",
        height: 70,
        fontSize: 18,
        textAlign: "center",
        borderBottomWidth: 1,
    }
})