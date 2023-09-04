import { ActivityIndicator, FlatList, Text, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants/index";
import useFetch from "../../hook/useFetch";
import styles from "./productList.style";

const ProductList = () => {
  const { data, isLoading, error } = useFetch();
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={SIZES.xLarge} color={COLORS.primary} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({ item }) => <ProductCardView item={item} />}
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
      />
    </View>
  );
};

export default ProductList;
