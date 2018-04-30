import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

class MyAccountScreen extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <Text>My account screen</Text>
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