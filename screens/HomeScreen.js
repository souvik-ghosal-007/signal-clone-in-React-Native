import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useLayoutEffect } from "react";
import CustomListItem from "../components/CustomListItem";
import { Avatar } from "@rneui/base";
import { auth, db } from "../firebase";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Signal",
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: { color: "black" },
      headerTintColor: "black",
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
            <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View
          style={{
            marginRight: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            width: 80,
          }}
        >
          <TouchableOpacity activeOpacity={0.5}>
            <AntDesign name="camerao" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} onPress={navigation.navigate("")}>
            <SimpleLineIcons name="pencil" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  const signOutUser = () => {
    auth.signOut().then(() => {
      navigation.replace("Login");
    });
  };

  return (
    <View>
      <ScrollView>
        <CustomListItem />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
