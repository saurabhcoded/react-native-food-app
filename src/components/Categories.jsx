import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { urlFor } from "../../sanity";

const CategoryCard = ({category}) => {
  return (
    <TouchableOpacity
      className="rounded-lg m-2"
      style={{ overflow: "hidden" }}
    >
      <ImageBackground
        source={{
          // uri: urlFor(category.image).url(),
        }}
        className="rounded-md"
      >
        <View className="p-3 h-40 w-40 rounded">
          <Text
            style={{ position: "absolute", bottom: 0 }}
            className="text-white bg-yellow-400 p-2 px-4 text-md font-semibold"
          >
            {category.title}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const Categories = ({data}) => {
  return (
    <View className="m-1 p-1">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((category, index) => {
          return <CategoryCard key={index} category={category}/>;
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;
