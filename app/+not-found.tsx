import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'My dad' }} />
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}> Looks like you found my dad and also a place that can't be found </Text>
        <Link href="./" style={styles.button}>
          Go back to Home screen!
        </Link>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },

  text: {
    fontSize: 30,
    color: '#fff',
    fontWeight: '500',
  }
});
