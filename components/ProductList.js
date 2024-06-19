// ProductList.js
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

export default function ProductList() {
  const [product, setProduct] = useState("");
  const [products, setProducts] = useState([]);

  const addProduct = () => {
    if (product.trim()) {
      setProducts([...products, product]);
      setProduct("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Gal's App</Text>
      <View style={styles.inputContainer}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TextInput
            style={styles.input}
            placeholder="Enter product name"
            value={product}
            onChangeText={setProduct}
          />
          <Button title="Add Product" onPress={addProduct} />
        </View>
      </View>
      <ScrollView>
        {products.map((item, index) => (
          <Text key={index} style={styles.productItem}>
            {item}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    justifyContent: "center",
    paddingHorizontal: 12,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 75,
  },
  inputContainer: {
    marginBottom: 20,
    marginTop: 80,
  },
  input: {
    borderWidth: 2,
    borderColor: "grey",
    fontSize: 18,
    padding: 8,
    width: "75%",
  },
  productItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
});
