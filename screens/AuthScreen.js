import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Button, Input, CheckBox} from 'react-native-elements';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import {login} from '../actions';

class AuthScreen extends Component {
    goToPasswordRestoreScreen = () => {
        this.props.navigation.navigate('passwordRestore');
    };

    goToSignUpScreen = () => {
        alert('Do we have a sign up screen?');
    };

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Log In</Text>
                </View>

                <View style={styles.inputsContainer}>
                    <Input
                        placeholder="Username"
                        leftIcon={
                            <Icon
                                name='user'
                                size={20}
                                color='#ccc'
                            />
                        }
                        containerStyle={{
                            width: '100%'
                        }}
                        keyboardType="email-address"
                    />

                    <Input
                        placeholder="Password"
                        leftIcon={
                            <Icon
                                name='lock'
                                size={20}
                                color='#ccc'
                            />
                        }
                        containerStyle={{
                            marginTop: 20,
                            width: '100%'
                        }}
                        secureTextEntry={true}
                    />

                    <TouchableOpacity onPress={this.goToPasswordRestoreScreen}>
                        <Text style={styles.forgotPassword}>
                            Forgot password?
                        </Text>
                    </TouchableOpacity>

                    <View
                        style={styles.submitBtnContainer}>
                        <Button
                            title="Submit"
                        />
                    </View>
                </View>

                <View style={styles.footerContainer}>
                    <TouchableOpacity onPress={this.goToSignUpScreen}>
                        <Text>
                            Don't have an account?
                            <Text style={{
                                color: '#2e9ce0'
                            }}> Sign Up
                            </Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = {
    wrapper: {
        flex: 1,
        padding: 20,
        paddingBottom: 0
    },
    titleContainer: {
        marginTop: 60,
    },
    title: {
        fontSize: 36,
        fontWeight: '800',
    },
    inputsContainer: {
        marginTop: 20
    },
    submitBtnContainer: {
        marginTop: 20
    },
    forgotPassword: {
        textAlign: 'right',
        marginTop: 20,
        color: '#2e9ce0',
        fontWeight: '700'
    },
    footerContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 15
    }
};

function mapStateToProps({auth}) {
    return {auth: auth.token}
}

export default connect(mapStateToProps, {login})(AuthScreen);