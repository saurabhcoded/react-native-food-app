import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyledComponent } from "nativewind";
import {
  ChevronDownIcon,
  UserCircleIcon,
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { SafeAreaView } from "react-native-safe-area-context";
import Categories from "../components/Categories";
import FeatureRow from "../components/FeatureRow";
import sanityClient from "../../sanity";

const Home = () => {
  const navigation = useNavigation();
  const [featuredCategories,setFeaturedCategories]=useState([]);
  const [foodCategory,setFoodCategory]=useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient.fetch(
      `*[_type == 'featured']{
        ...,
        restaurent[]->{
          ...,
          foodCategory->,
        }
      }`)
      .then((data)=>{
        setFeaturedCategories(data);
      })
    sanityClient.fetch(
      `*[_type == 'category']{
        image,
        slug,
        title
      }`
    )
    .then((data)=>{
      setFoodCategory(data)
    })
  }, [])
  

  return (
    <SafeAreaView className="bg-gray-50 flex-1">
      {/* HEader  */}
      <StyledComponent
        component={View}
        className="p-3 bg-white flex-row items-center justify-between space-x-2"
      >
        <View className="flex-row items-center">
          <View className="border border-4 rounded-full border-white">
            <StyledComponent
              component={Image}
              source={{ uri: "https://w7.pngwing.com/pngs/328/94/png-transparent-colonel-sanders-kfc-fried-chicken-fast-food-restaurant-fried-chicken-food-fast-food-restaurant-logo.png" }}
              style={{
                height: 50,
                width: 50,
                resizeMode: "contain",
                borderRadius: 50,
              }}
            />
          </View>
          <View className="pl-3">
            <Text className="text-red-500 font-semibold">Deliver Now !</Text>
            <View className="flex-row items-center">
              <Text className="text-gray-600 font-semibold text-lg mr-2">
                Current Location
              </Text>
              <ChevronDownIcon color={'lightgray'}/>
            </View>
          </View>
        </View>
        <View>
        <UserCircleIcon color={"tomato"} width={35} height={35}/>
        </View>
      </StyledComponent>
      {/* Search  */}
      <View className="flex-row border-t border-gray-50 bg-white space-x-2 items-center p-2">
        <View className="flex-row flex-1 items-center bg-gray-200 px-2 rounded-md ">
          <MagnifyingGlassIcon color={"gray"} />
          <TextInput
            placeholder="Restaurents and Cuisines"
            className="p-3 px-4 flex-1"
          />
        </View>
        <AdjustmentsHorizontalIcon color={"tomato"} width={30} height={30} />
      </View>
      <ScrollView>
        {/* Categories  */}
        <Categories data={foodCategory}/>
        {/* Feature Row 1 */}
        {featuredCategories.map((category,index)=>{
          return (<FeatureRow
            key={index}
            title={category.title}
            subtitle={category.subtitle}
            data={category.restaurent}
          />)
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
