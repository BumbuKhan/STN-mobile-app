import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableHighlight} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import {login} from '../actions';

class AuthScreen extends Component {
    goToPasswordRestoreScreen = () => {
        this.props.navigation.navigate('passwordRestore');
    };

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Log in</Text>
                </View>

                <View style={styles.inputsContainer}>
                    <Input
                        placeholder="Username"
                        leftIcon={
                            <Icon
                                name='user'
                                size={20}
                                color='#777'
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
                                color='#777'
                            />
                        }
                        containerStyle={{
                            marginTop: 20,
                            width: '100%'
                        }}
                        secureTextEntry={true}
                    />

                    <TouchableHighlight onPress={this.goToPasswordRestoreScreen}>
                        <Text style={styles.forgotPassword}>
                            Forgot password?
                        </Text>
                    </TouchableHighlight>

                    <View
                        style={styles.submitBtnContainer}>
                        <Button
                            title="Submit"
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = {
    wrapper: {
        flex: 1,
        padding: 20
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
        marginTop: 25
    },
    forgotPassword: {
        textAlign: 'right',
        marginTop: 10,
        color: '#2e9ce0',
        fontWeight: '700'
    }
};

function mapStateToProps({auth}) {
    return {auth: auth.token}
}

export default connect(mapStateToProps, {login})(AuthScreen);