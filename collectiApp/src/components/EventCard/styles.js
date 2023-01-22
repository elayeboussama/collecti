import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    cardContainer: {
        marginTop: 12,
        marginBottom: 12,
        elevation: 3,
        borderRadius: 12,
        width: "95%",
        alignSelf: "center",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        padding: 8,
    },
    headerSection: {
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        height: 50,
    },
    leftSection: {

    },
    rightSection: {

    },
    chips: {
        marginTop: 12,
        marginBottom: 12,
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
    },

    chip: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#432c7a",
        marginHorizontal: 5,
        marginVertical: 5,
        paddingVertical: 5,
        paddingHorizontal: 12,
        borderRadius: 50,



    },
    eventName: {
        fontSize: 20,
        fontWeight: "bold",
    },
    actions: {
        marginTop: 12,
        flexDirection: "row",
        width: "100%",

        height: 30,
        alignItems: "stretch"

    },
    actionLeft: {
        width: "50%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",

    },
    actionRight: {
        borderWidth: 1,
        flexDirection: "row",
        width: "50%",
        justifyContent: "center",
        alignItems: "center",
    }
});

export { styles }