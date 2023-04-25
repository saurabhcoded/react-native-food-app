import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, Image, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { urlFor } from "../../sanity";

const RestaurentScreen = () => {
  const navigation = useNavigation();
  const restaurant = useRoute().params;
  console.log(restaurant);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <ScrollView>
      <View>
        <Image
          className="h-52 w-100"
          source={{ uri: urlFor(restaurant.image).url() }}
        />
      </View>
      <View>
        <Text className="text-red-500 bg-gray-200 p-3 font-bold text-4xl text-center">{restaurant.name}</Text>
      </View>
    </ScrollView>
  );
};

export default RestaurentScreen;
