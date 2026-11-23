import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { router } from 'expo-router';
import { EVENTS } from '../../src/data/events';
import { EventRow } from '../../src/components/EventRow';

export default function EventsScreen() {
  const [savedIds, setSavedIds] = useState<number[]>([]);
  const [search, setSearch] = useState('');

  const filteredEvents = EVENTS.filter((event) =>
    event.title.toLowerCase().includes(search.toLowerCase())
  );

  const toggleSave = (id: number) => {
    setSavedIds((ids) =>
      ids.includes(id) ? ids.filter((item) => item !== id) : [...ids, id]
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Search events"
        style={styles.searchInput}
      />
      <Text style={styles.hint}>
        Long-press an event to save it. Saved: {savedIds.length}
      </Text>
      <FlatList
        data={filteredEvents}
        keyExtractor={(e) => String(e.id)}
        renderItem={({ item }) => (
          <EventRow
            event={item}
            saved={savedIds.includes(item.id)}
            onPress={() => router.push(`/events/${item.id}`)}
            onLongPress={() => toggleSave(item.id)}
          />
        )}
        ListEmptyComponent={<Text style={styles.empty}>No events match.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  searchInput: {
    minHeight: 44,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    marginBottom: 10,
  },
  hint: {
    fontSize: 14,
    color: '#555',
    marginBottom: 12,
  },
  empty: {
    textAlign: 'center',
    fontSize: 16,
    color: '#777',
    marginTop: 24,
  },
});