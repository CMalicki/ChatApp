import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  avatar: {
    width: 63,
    height: 63,
    marginRight: 15,
    borderRadius: 50,
  },
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
  },
  middleContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
  },
  middleUpperContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  middleBottomContainer: {
    minWidth: "77%",
  },
  leftContainer: {
    flexDirection: "row",
  },
  userName: {
    fontWeight: "bold",
    fontSize: 15,
  },
  lastMessage: {
    fontSize: 15,
    color: "grey",
  },
  messageTime: {
    fontSize: 14,
    color: "grey",
  },
});

export default styles;
