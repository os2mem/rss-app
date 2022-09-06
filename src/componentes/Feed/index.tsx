import React, { useCallback, useState } from 'react'
import { FlatList, StyleSheet, ActivityIndicator } from 'react-native'

import FeedItem, { FeedItemPlaceholder, FeedItemProps } from './FeedItem';
import SearchBar from '../SearchBar';

import { hooks as feedHoooks } from '../../state/feed'

import feedUtils from '../../utils/feed'
import { useTranslation } from '../../i18n';


const keyExtractor = (item: any, index: Number) => `feed-item-${item.id}-${index}`

const styles = StyleSheet.create({
    contentContainerStyle: {
        padding: 16
    }
})

const Feed = () => {
    const { data, loading, error } = feedHoooks.useRSS();
    const { t } = useTranslation()
    const [searchText, setSearchText] = useState<string | null>(null)
    const adaptedData = React.useMemo(() => data ? feedUtils.searchByTitle({ data: feedUtils.sortByDate(data), searchText }) : [], [data, searchText])

    const renderItem = useCallback(({ item }: FeedItemProps) => <FeedItem item={item} />, [])

    const handleSearch = ({ searchText }: { searchText: string }) => setSearchText(searchText)

    return <FlatList
        ListEmptyComponent={loading ? <ActivityIndicator /> : FeedItemPlaceholder}
        ListHeaderComponent={<SearchBar placeholder={t("Search...")} onSubmit={handleSearch} />}
        data={adaptedData}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainerStyle}
    />
}

export default Feed