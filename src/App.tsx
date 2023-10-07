/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { PropsWithChildren, useState } from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

import DiceOne from "../public/one.png"
import DiceTwo from "../public/two.png"
import DiceThree from "../public/three.png"
import DiceFour from "../public/four.png"
import DiceFive from "../public/five.png"
import DiceSix from "../public/six.png"

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>

// Optional configuration
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const chooseRandomImage = (): ImageSourcePropType => {
  const chosenNumber = Math.floor((Math.ceil(Math.random() * 6) + Math.ceil(Math.random() * 6)) / 2)

  switch (chosenNumber) {
    case 1:
      return DiceOne
    case 2:
      return DiceTwo
    case 3:
      return DiceThree
    case 4:
      return DiceFour
    case 5:
      return DiceFive
    case 6:
      return DiceSix
    default:
      return DiceOne
  }
}


const Dice = (props: DiceProps) => {
  const { imageUrl } = props;

  return (
    <View>
      <Image style={styles.dice} source={imageUrl} />
    </View>
  )
}

function App(): JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne)

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {
        ReactNativeHapticFeedback.trigger("impactHeavy", options);
        setDiceImage(chooseRandomImage())
      }
      }>
        <Dice imageUrl={diceImage} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  dice: {
    width: 150,
    height: 150,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  }
})

export default App;
