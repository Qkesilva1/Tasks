import React, { Component } from 'react'
import { Modal, View, StyleSheet, TouchableWithoutFeedback, Text, TextInput, TouchableOpacity } from 'react-native'
import commomStyles from '../commomStyles'

const initialState = { desc: '' }


export default class AddTask extends Component {

    state = {
        ...initialState
    }

    render(){
        return(
            <Modal transparent={true} visible={this.props.isVisible} onRequestClose={this.props.onCancel} animated='slide' >
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.overlay} ></View>
                </TouchableWithoutFeedback>
                <View style={styles.container}>
                    <Text style={styles.header} >Nova Tarefa</Text>
                    <TextInput style={styles.input} placeholder='Informe a Descrição...' onChangeText={desc => this.setState({ desc })} value={this.state.desc} />
                    <View style={styles.buttons}>
                        <TouchableOpacity >
                            <Text style={styles.button}>Salvar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.props.onCancel}>
                            <Text style={styles.button}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.overlay} ></View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}

const styles =  StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    container:{
        backgroundColor: '#FFF'
    },
    header:{
        fontFamily: commomStyles.fontFamily,
        backgroundColor: commomStyles.colors.today,
        color: commomStyles.colors.secondary,
        textAlign: 'center',
        padding: 15,
        fontSize: 18,
    },
    buttons:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    input:{
        fontFamily: commomStyles.fontFamily,
        height: 40,
        margin: 15,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#E3E3E3',
        borderRadius: 6,
        paddingLeft: 20,
    },
    button:{
        margin: 20,
        marginRight: 30,
        color: commomStyles.colors.today
    }
})