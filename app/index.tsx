import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  const [likes, setLikes] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, World!</Text>
      <Text style={styles.name}>Bakytuly Doszhan</Text>
      <Text style={styles.counter}>Likes: {likes}</Text>
      <Pressable onPress={() => setLikes(likes + 1)} style={styles.button}>
        <Text style={styles.buttonText}>Like</Text>
      </Pressable>

      <Link href="/events" asChild>
        <Pressable style={styles.eventsButton}>
          <Text style={styles.buttonText}>Events</Text>
        </Pressable>
      </Link>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  name: {
    fontSize: 22,
    color: '#444',
    marginBottom: 24,
  },
  counter: {
    fontSize: 20,
    marginBottom: 12,
  },
  button: {
    minHeight: 44,
    paddingHorizontal: 24,
    paddingVertical: 10,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventsButton: {
    minHeight: 44,
    paddingHorizontal: 24,
    paddingVertical: 10,
    backgroundColor: '#34C759',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});