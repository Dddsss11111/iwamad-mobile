import { Pressable, StyleSheet, Text, View } from 'react-native';
import { EventItem } from '../data/events';

interface EventRowProps {
  event: EventItem;
  saved: boolean;
  onPress: () => void;
  onLongPress: () => void;
}

export function EventRow({ event, saved, onPress, onLongPress }: EventRowProps) {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      <View style={styles.header}>
        <Text style={styles.title}>{event.title}</Text>
        {saved && <Text style={styles.savedBadge}>★ Saved</Text>}
      </View>
      <Text style={styles.meta}>
        {event.date} · {event.place}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 44,
    padding: 14,
    marginBottom: 10,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    justifyContent: 'center',
  },
  cardPressed: {
    backgroundColor: '#e6f0ff',
    borderColor: '#007AFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    flex: 1,
  },
  savedBadge: {
    fontSize: 14,
    fontWeight: '600',
    color: '#d97706',
    marginLeft: 8,
  },
  meta: {
    fontSize: 14,
    color: '#555',
  },
});