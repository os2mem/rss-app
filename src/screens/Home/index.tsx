import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import Feed from '../../componentes/Feed';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    }
})


const Home = () => {

    return <SafeAreaView style={styles.container}>
        <Feed />
    </SafeAreaView>;
};

export default Home
