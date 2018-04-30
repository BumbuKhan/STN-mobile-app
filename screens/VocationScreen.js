import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

class VocationScreen extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <Text>Vocation screen</Text>
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

export default connect(mapStateToProps, {})(VocationScreen);