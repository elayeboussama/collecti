import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        display: "flex",
        paddingTop: 20
    },
    welcomeSection: {
        height: 80,
        width: "90%",
        alignSelf: "center",
        position: "relative",
        elevation: 5,
        borderRadius: 10,
        marginHorizontal: 10
    },
    TitleWelcome: {
        alignSelf: "center",
        fontSize: 15,
        fontWeight: 'bold',
        marginVertical: 10

    },
    TextWelcome: {
        alignSelf: "center",
        fontSize: 10,
        marginHorizontal: 8

    },

    SecondSection: {
        width: "90%",
        alignSelf: "center",
        marginVertical: 10,
        display: "flex",
        flexDirection: "row",
        position: "relative",
        borderRadius: 15,
        alignItems: "center",
    },



    ImageSection: {
        height: 150,
        width: "40%",
        elevation: 5,
        borderRadius: 10,
        display: "flex",

    },
    moneyBloc: {
        padding: 20,
        borderRadius: 12,
        width: "100%",
        height: "100%",
    }
});

export { styles }