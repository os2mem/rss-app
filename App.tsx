import React from 'react';
import AppNavigatior from "./src/navigation"

import { NavigationContainer } from '@react-navigation/native';
import AppProvider from './src/state/AppProvider';

const App = () => {

  return (
    <AppProvider>
      <NavigationContainer>
        <AppNavigatior />
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
