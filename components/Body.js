import { StyleSheet, Text, View } from "react-native";
import CustomButton from "./CustomButton";
import Input from "./Input";


function Body() {

  function startCalculation() {
    console.log("Számítás elindítva");
  }  
  return (
    <View style={styles.container}>

      <Input label="Oldal" />
      <Input label="Alfa" />
      <CustomButton title="Számít" onPress={() => startCalculation()} />
        <Input label="Sugár" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: 'khaki',
    },
    text:{

    }

});
export default Body;