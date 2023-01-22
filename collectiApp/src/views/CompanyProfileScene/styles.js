import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerSection: {
        marginTop: 12,
        elevation: 3,
        width: "95%",
        alignSelf: "center",
        paddingBottom: 12,
        borderRadius: 12,
        backgroundColor: "#fff",
    },
    descSection: {
        padding: 12,

        marginTop: 12,
        elevation: 3,
        width: "95%",
        alignSelf: "center",
        paddingBottom: 12,
        borderRadius: 12,
        backgroundColor: "#fff",
    },
    desc: {
        fontSize: 20,
        fontWeight: "bold",
        borderLeftWidth: 3,
        borderLeftColor: "#432C7A",
        paddingLeft: 8,
    },
    chips: {
        marginTop: 12,
        marginBottom: 12,
        flexDirection: "row",
        justifyContent: "center",
    }
});

export { styles }