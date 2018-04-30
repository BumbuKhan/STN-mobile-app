import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import {connect} from 'react-redux';

import HamburgerMenu from '../components/HamburgerMenu';

class ActiveProjectScreen extends Component {
    static navigationOptions = {
        title: 'Active Project',
    };

    render() {
        return (
            <View>
                <Header
                    leftComponent={<HamburgerMenu {...this.props}/>}
                    centerComponent={{ text: ActiveProjectScreen.navigationOptions.title, style: { color: '#fff' } }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
});

mapStateToProps = (state) => state;

export default connect(mapStateToProps, {})(ActiveProjectScreen);