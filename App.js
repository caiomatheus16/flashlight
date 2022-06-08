import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

const App = () => {
  const [toggle, settoggle] = useState(false);

  const handleChangetoggle = () => settoggle(oldtoggle => !oldtoggle);

  useEffect(() => {
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(() => {
    /**
     * Quando l celular for chacholalhado, mudaremos o toggle
     *
     *
     */
    const subscription = RNShake.addListener(() => {
      settoggle(oldtoggle => !oldtoggle);
    });

    return subscription.remove();
  }, []);

  // essa func vai ser chamada quando o componentes
  //for ser desmontado

  return (
    <View style={toggle ? style.containerLight : style.container}>
      <TouchableOpacity onPress={handleChangetoggle}>
        <Image
          style={toggle ? style.lightingOn : style.lightingOff}
          source={
            toggle
              ? require('./assets/icons/eco-light.png')
              : require('./assets/icons/eco-light-off.png')
          }
        />
        <Image
          style={toggle ? style.lightingOff : style.lightingOn}
          source={
            toggle
              ? require('./assets/icons/logo-dio-white.png')
              : require('./assets/icons/logo-dio.png')
          }
        />
      </TouchableOpacity>
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    allignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    allignItems: 'center',
    justifyContent: 'center',
  },
  lightingOn: {
    resizeMode: 'contain',
    allignSelf: 'center',
    width: 150,
    height: 150,
  },
  lightingOff: {
    resizeMode: 'contain',
    allignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  },
  dioLogo: {
    resizeMode: 'contain',
    allignSelf: 'center',
    width: 250,
    height: 250,
  },
});
