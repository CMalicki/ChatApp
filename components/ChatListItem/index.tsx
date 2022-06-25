import React from "react";
import { View, Text, Image } from "react-native";
import { ChatRoom } from "../../types";
import styles from "./style";

export type ChatListItemProps = {
  chatRoom: ChatRoom;
};

const ChatListItem = (props: ChatListItemProps) => {
  const { chatRoom } = props;
  const moment = require("moment");

  const user = chatRoom.users[1];

  return (
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
  );
};

export default ChatListItem;
