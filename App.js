import { View, StyleSheet } from 'react-native'
import Box from './components/Box'

export default function App() {
  const boxArray = [
    { name: "box 1", color: "green" },
    { name: "box 2", color: "red" },
    { name: "box 3", color: "blue" },
    { name: "box 4", color: "yellow" },
    { name: "box 5", color: "purple" },
    { name: "box 6", color: "orange" },
    { name: "box 7", color: "pink" }
  ];
  return (
    <View style={styles.container}>
      {boxArray.map((data, i) => (
        <Box key={i} children={data.name} style={{ backgroundColor: data.color, flex: 1}} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.95,
    marginTop: 64,
    borderWidth: 6,
    borderColor: "red"
  }
})