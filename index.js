/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import store from './src/Redux/store';
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';

function Main() {
    if (__DEV__) {
        require("./ReactotronConfig");
    }
    return (
        <Provider store={store}>
            <PaperProvider>
                <App />
            </PaperProvider>
        </Provider>
    );
};
AppRegistry.registerComponent(appName, () => Main);
