import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        display :"flex",
      width: '100%',
      height: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerText: {
      fontWeight: 'bold',
      fontSize: 20,
      color: '#333',
      letterSpacing: 1,
    },
    icon: {
      position: 'absolute',
      left: 16,
    }
  });

export {styles}