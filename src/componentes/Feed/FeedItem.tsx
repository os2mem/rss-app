import React, { useCallback } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export type FeedItemProps = {
    item: {
        id: string,
        title: String,
        description: String,
        image: any,
        pubDate: string,
    }
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        display: 'flex',
        flexDirection: 'row',
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 0.25,
    },
    placeholderContainer: {
        minHeight: 80,
    },
    imageContainerPlaceholder: {
        backgroundColor: 'lightgrey'
    },
    content: {
        flex: 1,
        paddingLeft: 8,
    },
    text: {
        color: 'dimgray'
    },
    textPlaceholder: {
        backgroundColor: 'lightgrey',
        height: 12,
        marginBottom: 4
    },
    description: {
        fontSize: 12,
        marginBottom: 4
    },
    descriptionPlaceholder: {
        opacity: 0.5,
        width: '50%'
    },
    title: {
        fontWeight: '700',
        fontSize: 16,
        marginBottom: 4,
    },
    imageContainer: {
        width: '30%',
        backgroundColor: 'grey',
        position: 'relative',
    },
    image: {
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
    pubDate: {
        fontSize: 8,
    }
})


const FeedItem = ({ item: {
    id,
    title,
    description,
    image,
    pubDate,
} }: FeedItemProps) => {
    const { navigate } = useNavigation()
    const handlePress = useCallback(() => navigate('Detail', { id }), [id, navigate])

    return <TouchableOpacity onPress={handlePress} style={styles.container}>
        <View style={styles.imageContainer}>
            {image && <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />}
        </View>
        <View style={styles.content}>
            <Text numberOfLines={1} style={[styles.text, styles.title]}>{title}</Text>
            <Text numberOfLines={2} style={[styles.text, styles.description]}>{description}</Text>
            <Text style={[styles.text, styles.pubDate]}>{pubDate}</Text>
        </View>
    </TouchableOpacity>
}

export const FeedItemPlaceholder = () => <>{Array(10).fill(" ").map((_, index) => <View key={index} style={[styles.container, styles.placeholderContainer]}>
    <View style={[styles.imageContainer, styles.imageContainerPlaceholder]}></View>
    <View style={styles.content}>
        <View style={[styles.textPlaceholder]} />
        <View style={[styles.textPlaceholder, styles.descriptionPlaceholder]} />
        <View style={[styles.textPlaceholder, styles.descriptionPlaceholder]} />
    </View>
</View>)}</>

export default FeedItem