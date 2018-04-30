import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import HamburgerMenu from '../components/HamburgerMenu';

class ActiveProjectScreen extends Component {
    static navigationOptions = {
        title: 'Active Project',
    };

    addActiveProjectBtn = () => {
        return (
            <TouchableOpacity
                onPress={() => {
                    alert('Showing the appropriate form...');
                }}
            >
                <Icon
                    name="plus"
                    color="white"
                    size={22}
                />
            </TouchableOpacity>
        );
    };

    render() {
        return (
            <View>
                <Header
                    leftComponent={<HamburgerMenu {...this.props}/>}
                    centerComponent={{text: ActiveProjectScreen.navigationOptions.title, style: {color: '#fff'}}}
                    rightComponent={this.addActiveProjectBtn()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({});

mapStateToProps = (state) => state;

export default connect(mapStateToProps, {})(ActiveProjectScreen);