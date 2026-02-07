import { House } from 'lucide-react-native';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: 'gray',
            tabBarStyle: {
              backgroundColor: 'black',
            },
        }}>
      <Tabs.Screen name="index" options={{ title: 'Home', 
        tabBarIcon: () => <House color="white" size={20} /> 
        }}/>
    </Tabs>
  );
}
