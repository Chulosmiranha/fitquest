import { Clock, Dumbbell, Flame, Play, Target } from "lucide-react-native";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
              <View style={styles.startLevelProgressBar}>
                {/*This view is a placeholder for a progress bar, STYLE and SYNC LATER with the level amount*/}
              </View>
            </View>
          </View>
          <View style={styles.startRightContainer}>
            <Flame />
            <Text>0</Text>
            {/*0 is a placeholder SYNC LATER with streak*/}
          </View>
        </View>
        <View style={styles.mainContainer}>
          <Pressable style={styles.todayTrainingContainer}>
            <View style={styles.todayTrainingLeftContainer}>
              <Text style={styles.todayTrainingDay}>B</Text>
              {/*B is a placeholder, SYNC LATER with the training of the day*/}
              <View style={styles.todayTrainingLeftMainContainer}>
                <Text style={styles.todayTrainingTitle}>
                  Posterior & Costas
                </Text>
                <Text style={styles.todayTrainingDescription}>
                  Movimentos de puxo e cadeia do posterior
                </Text>
              </View>
              <View style={styles.todayTrainingLeftBottomContainer}>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
                >
                  <Dumbbell />
                  <Text>7 exercises</Text>
                  {/*7 is a placeholder, SYNC LATER with the amount of exercises on the training*/}
                </View>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
                >
                  <Clock />
                  <Text>~57 min</Text>
                  {/*57 min is a placeholder, SYNC LATER with the estimated time of the training*/}
                </View>
              </View>
            </View>

            <View style={styles.todayTrainingRightContainer}>
              <Play fill="white" />
            </View>
          </Pressable>
          <View style={styles.thisWeekCalendarContainer}></View>
          <View style={styles.weekProgressTopContainer}>
            <View>
              <Text>Progresso da semana</Text>
              <Text>0/3 treinos</Text>
              {/*0/3 is a placeholder, SYNC LATER with the weekly goal progress*/}
            </View>
            <View style={styles.weekProgressBar}>
              {/*This view is a placeholder for a progress bar, STYLE and SYNC LATER with the training weekly goal progress*/}
            </View>
          </View>
        </View>
        <View style={styles.weeklyChallengesContainer}>
          <View style={styles.weeklyChallengesHeaderContainer}>
            <Target />
            <Text>0/3</Text>
            {/*0/3 is a placeholder, SYNC LATER with the weekly challenges progress*/}
          </View>
          <View style={styles.weeklyChallenges}>
            <View style={styles.weeklyChallenge}>
              <View style={styles.weeklyChallengeLeftContainer}>
                <Text>Name</Text>
                {/*Name is a placeholder, SYNC LATER with the weekly challenge name*/}
                <Text>Description</Text>
                {/*Description is a placeholder, SYNC LATER with the weekly challenge description*/}
              </View>
              <View style={styles.weeklyChallengeRightContainer}>
                <Text>+50 XP</Text>
                {/*50 is a placeholder, SYNC LATER with the weekly challenge reward*/}
                <Text>0/15</Text>
                {/*0/15 is a placeholder, SYNC LATER with the weekly challenge progress*/}
              </View>
            </View>
            <View style={styles.weeklyChallenge}>
              <View style={styles.weeklyChallengeLeftContainer}>
                <Text>Name</Text>
                {/*Name is a placeholder, SYNC LATER with the weekly challenge name*/}
                <Text>Description</Text>
                {/*Description is a placeholder, SYNC LATER with the weekly challenge description*/}
              </View>
              <View style={styles.weeklyChallengeRightContainer}>
                <Text>+50 XP</Text>
                {/*50 is a placeholder, SYNC LATER with the weekly challenge reward*/}
                <Text>0/15</Text>
                {/*0/15 is a placeholder, SYNC LATER with the weekly challenge progress*/}
              </View>
            </View>
            <View style={styles.weeklyChallenge}>
              <View style={styles.weeklyChallengeLeftContainer}>
                <Text>Name</Text>
                {/*Name is a placeholder, SYNC LATER with the weekly challenge name*/}
                <Text>Description</Text>
                {/*Description is a placeholder, SYNC LATER with the weekly challenge description*/}
              </View>
              <View style={styles.weeklyChallengeRightContainer}>
                <Text>+50 XP</Text>
                {/*50 is a placeholder, SYNC LATER with the weekly challenge reward*/}
                <Text>0/15</Text>
                {/*0/15 is a placeholder, SYNC LATER with the weekly challenge progress*/}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  startContainer: {},
  startLeftContainer: {},
  startLevelContainer: {},
  startLevel: {},
  startLevelProgressBar: {},
  startRightContainer: {},
  mainContainer: {},
  todayTrainingContainer: {},
  todayTrainingLeftContainer: {},
  todayTrainingLeftMainContainer: {},
  todayTrainingDay: {},
  todayTrainingTitle: {},
  todayTrainingDescription: {},
  todayTrainingLeftBottomContainer: {},
  todayTrainingRightContainer: {},
  thisWeekCalendarContainer: {},
  weekProgressTopContainer: {},
  weekProgressBar: {},
  weeklyChallengesContainer: {},
  weeklyChallengesHeaderContainer: {},
  weeklyChallenges: {},
  weeklyChallenge: {},
  weeklyChallengeLeftContainer: {},
  weeklyChallengeRightContainer: {},
});
