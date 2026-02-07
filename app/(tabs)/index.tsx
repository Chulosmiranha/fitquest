import { StyleSheet, View, Text, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Flame } from "lucide-react-native"

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.startContainer}>
          <View style={styles.startLeftContainer}>
              <Text>Olá, usuário!</Text>
              {/*usuário is a placeholder, SYNC LATER with the username*/}
              <View style={styles.startLevelContainer}>
                <View style={styles.startLevel}>
                  <Text>LVL 1</Text>
                </View>
                {/*1 is a placeholder, SYNC LATER with the level*/}
                <View style={styles.startLevelProgressContainer}>
                {/*This view is a placeholder for a progress bar, STYLE and SYNC LATER with the level amount*/}
                </View>
              </View>
          </View>
          <View style={styles.startRightContainer}>
            <Flame/>
            <Text>0</Text>
            {/*0 is a placeholder SYNC LATER with streak*/}
          </View>
        </View>
        <View style={styles.mainContainer}>
          <Pressable style={styles.todayTrainingContainer}>
            <View style={styles.todayTrainingLeftContainer}>
              <Text style={styles.todayTrainingDay}>B</Text>
              {/*B is a placeholder, SYNC LATER with the training of the day*/}
            </View>
            <View style={styles.todayTrainingMainContainer}>
              <Text style={styles.todayTrainingTitle}>Posterior & Costas</Text>
              <Text style={styles.todayTrainingDescription}>Pulling movements and posterior chain</Text>
            </View>
            <View style={styles.}>
              
            </View>
            <View style={styles.todayTrainingRightContainer}>
              <Text style={styles.todayTrainingStart}>{">"}</Text>
            </View>
          </Pressable> 
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
  startContainer: {
    display: 'flex',
  },
  startLeftContainer: {
    display: 'flex',
  },
  startLevelContainer: {
    display: 'flex',
  },
  startLevel: {
    display: 'flex',
  },
  startLevelProgressContainer: {
    display: 'flex',
  },
  startRightContainer: {
    display: 'flex',
  },
})