import { View, Text} from "react-native";
import SignOutButton from "@/components/SignOutButton";
import { SafeAreaView } from 'react-native-safe-area-context';
import React from "react";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 ">
      <Text>Hello this is home screen.Just checking safe area view working or not</Text>
      <SignOutButton />
    </SafeAreaView>
  );
};

export default HomeScreen;
