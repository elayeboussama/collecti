import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchCard: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 10,
    marginTop: 12,

    backgroundColor: "#fff",

    width: "95%",
    alignSelf: "center",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    elevation: 3,
    borderRadius: 12,
  },
  bottomSheet: {
    backgroundColor: "white",
    width: "100%",
    height: 500,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 20,
    paddingTop: 10,
    display: "flex",
    flexDirection: "column",
  },
  closeButton: {
    alignSelf: "flex-end",
  },
  button: {
    alignSelf: "center",
    marginTop: 10,
  },
});

export { styles };
