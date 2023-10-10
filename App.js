import { StyleSheet, Text, View } from 'react-native';
import Position from './components/Position';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Current weather</Text>
      <Position />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b3b3b3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
      fontSize: 24,
      fontWeight: 'bold',
      paddingBottom: 20,
  },
});
