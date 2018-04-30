import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import {connect} from 'react-redux';

import HamburgerMenu from '../components/HamburgerMenu';

class MyAccountScreen extends Component {
    static navigationOptions = {
        title: 'My Account',
    };

    render() {
        return (
            <View>
                <Header
                    leftComponent={<HamburgerMenu {...this.props}/>}
                    centerComponent={{ text: MyAccountScreen.navigationOptions.title, style: { color: '#fff' } }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

mapStateToProps = (state) => state;

export default connect(mapStateToProps, {})(MyAccountScreen);