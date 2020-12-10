import React from "react";
import { StyleSheet, FlatList } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Living room space available",
    price: 100,
    image: require("../assets/images/living-room.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 1000,
    image: require("../assets/images/couch.jpg"),
  },
];

function ListingScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.lightGrey
  },
});

export default ListingScreen;
