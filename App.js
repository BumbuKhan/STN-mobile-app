import React, {Component} from 'react';
import {TabNavigator, DrawerNavigator} from 'react-navigation';
import {Provider} from 'react-redux';

import store from './store';

import AuthScreen from './screens/AuthScreen';
import PasswordRestoreScreen from './screens/PasswordRestoreScreen';
import ActiveProjectScreen from './screens/ActiveProjectScreen';
import ClientScreen from './screens/ClientsScreen';
import MyHoursScreen from './screens/MyHoursScreen';
import VocationScreen from './screens/VocationScreen';
import MyAccountScreen from './screens/MyAccountScreen';

export default class App extends Component {
    render() {
        const MainNavigator = TabNavigator({
            auth: {screen: AuthScreen},
            passwordRestore: {screen: PasswordRestoreScreen},
            main: {
                screen: DrawerNavigator({
                    activeProject: {screen: ActiveProjectScreen},
                    clients: {screen: ClientScreen},
                    myHours: {screen: MyHoursScreen},
                    vocation: {screen: VocationScreen},
                    myAccount: {screen: MyAccountScreen},
                })
            }
        }, {
            navigationOptions: {
                tabBarVisible: false
            },
            animationEnabled: true
        });

        return (
            <Provider store={store}>
                <MainNavigator/>
            </Provider>
        );
    }
}