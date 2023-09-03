import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./search.style";
import { View, Text, TouchableOpacity } from "react-native";
import { COLORS, SIZES } from "../constants/index";
import { Feather, Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Search = () => {
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
            value=""
            onPressIn={() => {}}
            placeholder="what are you looking for?"
          />
        </View>
        <View>
          <TouchableOpacity style={styles.searchBtn}>
            <Feather name="search" size={24} style={styles.searchIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Search;
