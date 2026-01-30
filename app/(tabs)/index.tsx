import { SafeAreaView } from 'react-native-safe-area-context';
import ImageViewer from '@/components/ImageViewer';
import { StyleSheet, View } from 'react-native';
import Button from '@/components/Button';

const imagetest = require('@/assets/images/estudos.png');

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={imagetest} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
  },
  footerContainer: {
    flex: 1 / 2,
    alignItems: 'center',
  },
});