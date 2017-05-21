import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from '../reducer'
import { LoginForm } from './'


export class AppComponent extends Component {
    render() {
        return (
            /*<View>
                <Text>
                    Hello World
                </Text>
            </View>*/

            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <LoginForm />
            </Provider>
        )
    }
}