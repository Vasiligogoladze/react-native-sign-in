import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../../context/AuthContext';

export default function HomeScreen() {
  const { user, signOut } = useAuth();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>გამარჯობა, {user?.name}!</Text>

      <Button title="პროფილზე გადასვლა" onPress={() => router.push('/profile')} />

      <View style={{ height: 12 }} />

      <Button title="გამოსვლა" color="red" onPress={signOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  text: { fontSize: 20, textAlign: 'center', marginBottom: 20 },
});
