import { View, StyleSheet } from 'react-native'
import Box from './components/Box'

export default function App() {
  const boxArray = [
    { name: "box 1", color: "green", alignSelf: "flex-start", fb: 0.3 },
    { name: "box 2", color: "purple", alignSelf: "flex-end" },
    { name: "box 3", color: "blue", alignSelf: "center", fb: 2 },
    //{ name: "box 4", color: "yellow", alignSelf: "stretch" },
    //{ name: "box 5", color: "purple", alignSelf: "auto" },
    //{ name: "box 6", color: "orange", alignSelf: "" },
    //{ name: "box 7", color: "pink", alignSelf: "" }
  ];
  return (
    <View style={styles.container}>
      {boxArray.map((data, i) => (
        <Box key={i} children={data.name} style={{ backgroundColor: data.color, flexGrow: data.fb ? data.fb : '' }} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 300,
    //gap: 10,
    marginTop: 64,
    borderWidth: 6,
    borderColor: "red",
    
  }
})