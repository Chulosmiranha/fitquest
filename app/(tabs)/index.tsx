import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Flame } from "lucide-react-native"

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <View>
          <View>
            <Text>Olá, usuário!</Text>
            {/*usuário is a placeholder SYNC LATER with the username*/}
            <View>
              <Text>LVL 1</Text>
              {/*1 is a placeholder SYNC LATER with the level*/}
              <View/>
              {/*This view is a placeholder for a progress bar, STYLE and SYNC LATER with the level amount*/}
            </View>
          </View>
        </View>
        <View>
          <Flame/>
          <Text>0</Text>
          {/*0 is a placeholder SYNC LATER with streak*/}
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  footerContainer: {
    flex: 1 / 2,
    alignItems: 'center',
  },
});