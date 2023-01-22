import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        backgroundColor: "white",
    },
    backButton: {
        height: 50,
        width: 50,
        borderRadius: 30,
        borderWidth: 0
    },
    backGroundPic: {
        width: "100%",
        height: 300,

    },
    submitButton: {
        marginTop: 12,
        width: "80%",
        alignSelf: "center",
        borderRadius: 12,
    }
});

export { styles }