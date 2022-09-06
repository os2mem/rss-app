import React, { useCallback, useState } from 'react'
import { StyleSheet, View, Text, TextInput, NativeSyntheticEvent, TextInputSubmitEditingEventData } from 'react-native'

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Muli',
    },
    textInput: {
        padding: 8,
        marginBottom: 16,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: 'lightgrey'
    },
    searchLabel: {
        fontFamily: 'Muli-Bold',
        fontSize: 24,
    },
})

interface IOnSubmitFunction {
    searchText: string
}

export type SearchBarProps = {
    onSubmit: ({ searchText }: IOnSubmitFunction) => void,
    title?: string,
    placeholder?: string
}

const SearchBar = ({ onSubmit, title, placeholder }: SearchBarProps) => {
    const [searchText, setSearchText] = useState('')

    const handleSubmit = useCallback(
        ({ nativeEvent: { text } }: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => onSubmit?.({ searchText: text }),
        [onSubmit],
    )

    return (
        <View>
            <Text style={[styles.text, styles.searchLabel]}>{title}</Text>
            <TextInput
                placeholder={placeholder}
                value={searchText}
                onChangeText={setSearchText}
                style={styles.textInput}
                onSubmitEditing={handleSubmit}
            />
        </View>
    )
}

export default SearchBar