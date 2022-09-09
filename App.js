import { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';

export default function App() {

  // Kun napista painetaan (onPress), showAlert-funktio aktivoituu
  // showAlert luo in-built Alert-funktiolla viestin jossa otsikkona my title ja tekstinä ...
  // Text-kohdassa olevat tekstikentät ovat vaihtoehdot mitä 'vastata viestiin' esim accept/cancel tms.

  const [ok, setOk] = useState(false);

  const showAlert = () => {
    Alert.alert(
      'Hello...',
      'Are you lost bby gurl?',
    [ 
      {
        text: 'Ok',
        onPress: () => setOk(true)
        // kun käyttäjä painaa ok, setOk-funktio asettaa ok-muuttujan arvoksi true
        // näytöllä lukee ok
      },
      {
        text: 'Cancel',
        onPress: () => setOk(false)
        // kun käyttäjä painaa cancel, setOk-funktio asettaa ok-muuttujan arvoksi false
        // näytöllä lukee false
      }
    ]
    );
  }

  return (
    <View style={styles.container}>
      <Button title='Press' onPress={showAlert}></Button>
      <Text>{ok===true ? 'ok' : 'cancel'}</Text>
      {/* ok-muuttuja arvo on true ? näytöllä lukee silloin ok : jos false, näytöllä lukee cancel */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
