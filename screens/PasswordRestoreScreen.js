import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import {login} from '../actions';

class PasswordRestoreScreen extends Component {
    goToLoginScreen = () => {
        this.props.navigation.navigate('auth');
    };

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.backButtonWrapper}>
                    <TouchableOpacity onPress={this.goToLoginScreen}>
                        <Text style={{
                            fontSize: 16
                        }}>
                            <Icon
                                name='arrow-left'
                                size={20}
                                color='black'
                            /> Back to login
                        </Text>

                    </TouchableOpacity>
                </View>

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Restore password</Text>
                </View>

                <View style={styles.inputsContainer}>
                    <Input
                        placeholder="Email"
                        leftIcon={
                            <Icon
                                name='envelope-o'
                                size={20}
                                color='#ccc'
                            />
                        }
                        containerStyle={{
                            width: '100%'
                        }}
                        keyboardType="email-address"
                    />

                    <Text style={{
                        marginTop: 5
                    }}>
                        Enter email address you've signed up with to get the further instructions
                    </Text>

                    <View style={styles.submitBtnContainer}>
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
        marginTop: 40,
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
    backButtonWrapper: {
        marginTop: 40
    }
};

function mapStateToProps({auth}) {
    return {auth: auth.token}
}

export default connect(mapStateToProps, {login})(PasswordRestoreScreen);