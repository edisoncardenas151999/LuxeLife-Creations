import { SliderBase, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { COLORS } from "../../constants";

const Carousel = () => {
  const sliders = [
    "https://rnb.scene7.com/is/image/roomandboard/MHH_Liv_ES1021_0523?size=900,900&scl=1",
    "https://johnlewis.scene7.com/is/image/JohnLewis/furnitureandlight-livingroom-carousel-gb-010323",
    "https://www.youramazingplaces.com/wp-content/uploads/2019/07/1.jpg",
  ];
  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={sliders}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{ borderRadius: 15, width: "95%", marginTop: 15 }}
        autoplay
        circleLoop
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: "center",
  },
});
