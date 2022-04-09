
import * as react from 'react';
import { NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from "./natvigation/DrawerNavigator";

export default function App() {
    return (
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    );
}


