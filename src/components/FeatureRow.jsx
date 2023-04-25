import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { ArrowRightIcon,MapPinIcon } from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";
import React from "react";
import { urlFor } from "../../sanity";
import { useNavigation } from "@react-navigation/native";

const RestaurentCard = ({data}) => {
  const navigation=useNavigation();
  return (
    <TouchableOpacity onPress={()=>navigation.navigate("Restaurent",data)} className="border bg-white relative w-52 m-2 border-gray-200 rounded-lg">
      <Image className="h-10 w-10 absolute z-30 top-[-6px] right-[-4px]" source={{uri:"https://cdn-icons-png.flaticon.com/512/3748/3748627.png"}} />
      <Image
        source={{
          uri: urlFor(data.image).url(),
        }}
        style={{ width: "100%", height: 150 }}
      />
      <View className="p-3">
        <Text className="text-lg ml-2 leading-5 font-bold text-gray-700">{data.name}</Text>
        <View className="flex-row items-center mt-1">
          <StarIcon height={15} color={"orange"}/><Text className="text-gray-500 text-sm flex-1 break-normal">{data.rating} Ratings</Text>
        </View>
        <View className="flex-row items-center">
          <MapPinIcon height={15} color={"gray"}/><Text className="text-gray-500 text-sm flex-1 break-normal">Nearby {data.address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const FeatureRow = ({data,title,subtitle}) => {
  return (
    <View className="m-1">
      {/* Heading  */}
      <View className="flex-row items-center justify-between p-2">
        <View className="flex-1 ">
          <Text className="text-xl font-bold">{title}</Text>
          <Text className="text-xs text-gray-500">
            {subtitle}
          </Text>
        </View>
        <View>
          <ArrowRightIcon
            style={{ width: 25, fontSize: "50px" }}
            color={"skyblue"}
          />
        </View>
      </View>
      {/* Restaurent Cards  */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item,index)=>{
          return <RestaurentCard data={item} key={index}/>
        })}
      </ScrollView>
    </View>
  );
};

export default FeatureRow;
