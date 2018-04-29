import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import {login} from '../actions';

class AuthScreen extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Log in</Text>
                </View>

                <View style={styles.inputsContainer}>
                    <Input
                        placeholder="Email"
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
                        secureTextEntry
                    />

                    <Button
                        title="Submit"
                        style={styles.submitBtn}
                    />
                </View>
            </View>
        );
    }
}

const styles = {
    wrapper: {
        flex: 1,
    },
    titleContainer: {
        marginTop: 80,
    },
    title: {
        fontSize: 40,
        fontWeight: '800',
        textAlign: 'center'
    },
    inputsContainer: {
        padding: 20
    },
    submitBtn: {
        marginTop: 30
    }
};

function mapStateToProps({auth}) {
    return {auth: auth.token}
}

export default connect(mapStateToProps, {login})(AuthScreen);