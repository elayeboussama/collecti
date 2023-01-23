import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        margin: 10,
        backgroundColor: "#EDEDED",
        borderRadius: 5,
        elevation: 3,
    },
    CoverView: {},

    UpImageBtn: {
        position: "absolute",
        alignItems: 'center',
        justifyContent: 'center',
        width: 130,
        height: 130,
        borderRadius: 100,
        marginTop: 100,
        marginLeft: 15,
        elevation: 10,
        backgroundColor: '#CBCBCB',

    },
    UpCoverBtn: {
        position: "absolute",
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: 100,
        right: 10,
        bottom: 10,
        elevation: 10,
        backgroundColor: '#CBCBCB',
    },
    UpImageUpdate: {
        position: "absolute",
        alignItems: 'center',
        justifyContent: 'center',
        width: 20,
        height: 20,
        borderRadius: 100,
        top: 10,
        right: 10,
        elevation: 10,
        backgroundColor: '#CBCBCB',
    },

    UpImage: {
        width: 130,
        height: 130,
        borderRadius: 100,
    },

    UpCover: {
        width: "100%",
        height: undefined,
        aspectRatio: 2,
        borderRadius: 5,
        margin: 0
    },

    form: {
        marginTop: 60
    },

    dropdown: {
        height: 50,
        borderColor: 'gray',
        backgroundColor: "#fff",

        borderBottomWidth: 0.5,
        paddingHorizontal: 8,
        marginVertical: 10,
        borderRadius: COLORS.light,
        marginHorizontal: 20,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
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
    },
    submitButton: {
        float: "right",
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#581845',
        width: 100,
        margin: 10,



    }



});

export { styles }