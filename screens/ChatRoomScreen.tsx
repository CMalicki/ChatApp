import React from "react";
import { FlatList, Text, ImageBackground } from "react-native";

import { useRoute } from "@react-navigation/native";

import chatRoomData from "../data/Chats";
import ChatMessage from "../components/ChatMessage";

const ChatRoomScreen = () => {
  const route = useRoute();

  //   console.log(route.params);
  return (
    <ImageBackground source={require("../assets/images/BG.png")}>
      <FlatList
        data={chatRoomData.messages}
        renderItem={({ item }) => <ChatMessage message={item} />}
        inverted
      />
    </ImageBackground>
  );
};

export default ChatRoomScreen;
