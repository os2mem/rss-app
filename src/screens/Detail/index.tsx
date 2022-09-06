import React, { useMemo, useCallback } from 'react';
import { SafeAreaView, StyleSheet, Text, Image, View, Button, Linking } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { useAppSelector } from '../../state/hooks';

import { selectors as feedSelectors } from '../../state/feed'
import { useTranslation } from '../../i18n';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    content: {
        flex: 3,
        padding: 16
    },
    header: {
        flex: 2,
        backgroundColor: 'lightgrey'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    text: {
        color: 'dimgray'
    },
    title: {
        fontSize: 24,
        marginBottom: 16
    },
    description: {
        fontSize: 16
    }
})

const Detail = () => {
    const { t } = useTranslation()
    const { params: { id } } = useRoute()
    const feedData = useAppSelector(feedSelectors.getFeedData)

    const {
        title,
        image,
        description,
        link
    } = useMemo(() => feedData.find(({ id: currentItemId }) => currentItemId === id), [feedData])

    const handleOpenLink = useCallback(async () => { try { Linking.openURL(link) } catch (error) { } }, [link])

    return <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            {image && <Image source={{ uri: image }} style={styles.image} />}
        </View>
        <View style={styles.content}>
            <Text style={[styles.text, styles.title]}>{title}</Text>
            <Text style={[styles.text, styles.description]}>{description}</Text>
        </View>
        <Button title={t("View in browser")} onPress={handleOpenLink} />

    </SafeAreaView>;
};

export default Detail
