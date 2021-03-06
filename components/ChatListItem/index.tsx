import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { ChatRoom } from "../../types";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

export type ChatListItemProps = {
  chatRoom: ChatRoom;
};

const ChatListItem = (props: ChatListItemProps) => {
  const { chatRoom } = props;
  const moment = require("moment");
  const user = chatRoom.users[1];
  const navigation = useNavigation();
  const onClick = () => {
    navigation.navigate("ChatRoom", {
      id: chatRoom.id,
      name: user.name,
      imageUri: user.imageUri,
    });
  };

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image source={{ uri: user.imageUri }} style={styles.avatar} />

          <View style={styles.middleContainer}>
            <View style={styles.middleUpperContainer}>
              <Text style={styles.userName}>{user.name}</Text>
              <Text style={styles.messageTime}>
                {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
              </Text>
            </View>
            <View style={styles.middleBottomContainer}>
              <Text numberOfLines={1} style={styles.lastMessage}>
                {chatRoom.lastMessage.content}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChatListItem;
