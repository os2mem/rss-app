import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from 'src/screens/Home';
import Detail from 'src/screens/Detail';

const Stack = createNativeStackNavigator();

const AppNavigatior = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

export default AppNavigatior;
