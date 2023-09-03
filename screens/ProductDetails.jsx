import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useState } from "react";
import styles from "./productDetails.style";
import {
  Ionicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
  Fontisto,
} from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";
import { useNavigation } from "@react-navigation/native";

const ProductDetails = () => {
  const [count, setCount] = useState(1);
  const navigation = useNavigation();

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    count === 1 ? 1 : setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="heart" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>

      <Image
        source={{
          uri: "https://johnlewis.scene7.com/is/image/JohnLewis/furnitureandlight-livingroom-carousel-gb-010323",
        }}
        style={styles.images}
      />
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Product</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>$600.00 </Text>
          </View>
        </View>
        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((index) => (
              <Ionicons key={index} name="star" size={24} color="gold" />
            ))}
            <Text style={styles.ratingText}>(4.9)</Text>
          </View>

          <View style={styles.rating}>
            <TouchableOpacity onPress={() => decrement()}>
              <SimpleLineIcons name="minus" size={20} />
            </TouchableOpacity>

            <Text style={styles.ratingText}>{count}</Text>
            <TouchableOpacity onPress={() => increment()}>
              <SimpleLineIcons name="plus" size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>description</Text>
          <Text style={styles.descriptionText}>
            Lorem ipsum dolor sit amet. Sed quia repudiandae est minus
            voluptatem ut mollitia dolorum in voluptatibus officiis ea maiores
            praesentium eum iusto consequatur. Aut accusamus expedita qui saepe
            aliquid et iste consectetur ut quam explicabo in accusantium
            nesciunt et inventore nobis aut dignissimos nesciunt. Vel asperiores
            sequi sit assumenda aliquid et labore voluptates non Quis
            consequatur vel incidunt aspernatur et molestias magni aut totam
            tenetur.
          </Text>
        </View>
        <View style={{ marginBottom: SIZES.small }}>
          <View style={styles.location}>
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="location-outline" size={20} />
              <Text> Dallas </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons name="truck-delivery-outline" size={20} />
              <Text> Free Delivery </Text>
            </View>
          </View>
        </View>
        <View style={styles.cartRow}>
          <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
            <Text style={styles.cartTitle}>BUY NOW</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.addToCart}>
            <Fontisto name="shopping-bag" size={22} color={COLORS.lightWhite} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;
