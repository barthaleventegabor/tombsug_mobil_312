import { StyleSheet, Text, View } from "react-native";
import CustomButton from "./CustomButton";
import Input from "./Input";
import { useState } from "react";
import { calcRadius } from "../calculations/rhombus";


function Body() {

  const [side, setSide] = useState();
  const [angle, setAngle] = useState();

  const [radius, setRadius] = useState();

  function startCalculation() {
    console.log("Számítás elindítva");
    console.log("Oldal: " + side);
    console.log("Alfa: " + angle);
    const radius = calcRadius(side, angle);
    setRadius(radius);
    console.log("Sugár: " + radius);

  }  
  return (
    <View style={styles.container}>

      <Input label="Oldal" onChangeText={side=>setSide(side)}/>
      <Input label="Alfa" onChangeText={angle=>setAngle(angle)}/>
      <CustomButton title="Számít" onPress={() => startCalculation()} />
      <Input label="Sugár" value={radius} editable={false} />
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