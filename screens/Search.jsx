import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./search.style";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { COLORS, SIZES } from "../constants/index";
import { Feather, Ionicons } from "@expo/vector-icons";
import { FlatList, TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import SearchTile from "../components/product/SearchTile";

const endPoint = "http://localhost:3000/api/products/search/";
const Search = () => {
  const [searchKey, setSearchKey] = useState("");
  const [searchResult, setsearchResult] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${endPoint}${searchKey}`);
      setsearchResult(response.data);
    } catch (error) {}
  };
  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons
            name="camera-outline"
            size={SIZES.xLarge}
            // color={COLORS.black}
          />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchKey}
            onChangeText={setSearchKey}
            placeholder="what are you looking for?"
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.searchBtn}
            onPress={() => handleSearch()}
          >
            <Feather name="search" size={24} style={styles.searchIcon} />
          </TouchableOpacity>
        </View>
      </View>
      {searchResult.length === 0 ? (
        <View style={{ flex: 1 }}>
          <Image
            source={require("../assets/images/Pose23.png")}
            style={styles.searchImage}
          />
        </View>
      ) : (
        <FlatList
          data={searchResult}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <SearchTile item={item} />}
          style={{ marginHorizontal: 12 }}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;
