import { DoorClosed, DoorOpen } from 'lucide-react-native';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: 'gray',
            headerStyle: {
                backgroundColor: 'black',
            },
            headerShadowVisible: false,
            headerTintColor: 'white',
            tabBarStyle: {
              backgroundColor: 'black',
            },
        }}>
      <Tabs.Screen name="index" options={{ title: 'Home', 
        tabBarIcon: ({focused}) => (focused ? <DoorOpen color="#E8E8E8" size="20" /> : <DoorClosed color="#E8E8E8" size="20" />) 
        }}/>
    </Tabs>
  );
}
