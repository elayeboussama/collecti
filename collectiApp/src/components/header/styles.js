import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        display :"flex",
      width: '100%',
      height: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "#222",
    },
    headerText: {
      fontWeight: 'bold',
      fontSize: 20,
      color: '#333',
      letterSpacing: 1,
    },
    icon: {
      
      left: 16,
    }
  });

export {styles}