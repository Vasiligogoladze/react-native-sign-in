import { Stack } from 'expo-router';
import { AuthProvider, useAuth } from '../context/AuthContext';

function RootNavigator() {
  const { user } = useAuth();

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={user != null}>
        <Stack.Screen name="(app)" />
      </Stack.Protected>

      <Stack.Protected guard={user == null}>
        <Stack.Screen name="sign-in" />
      </Stack.Protected>
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
}
