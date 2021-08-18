import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

const Product = ({route, navigation}) => {
  const {product} = route?.params;
  return (
    <>
      <ScrollView style={styles.main}>
        <Image source={product?.image} style={styles.image} />
        <Text style={styles.productName}>{product?.name}</Text>
        <Text style={{fontSize: 18, fontWeight: '700', color: 'gray'}}>
          by {product?.brand}
        </Text>
        <Text style={{fontSize: 16}}>Price</Text>
        <Text style={{fontSize: 30, fontWeight: '600'}}>{product?.price}</Text>
        <TouchableOpacity style={styles.addBtn}>
          <Text style={styles.btnText}>Add to Cart</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

export default Product;

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    backgroundColor: 'white',
  },
  image: {width: 300, height: 300, marginLeft: 25},
  productName: {
    fontSize: 35,
    fontWeight: '700',
    marginTop: 15,
    borderRadius: 5,
  },
  addBtn: {
    backgroundColor: '#323232',
    width: 150,
    borderRadius: 5,
    marginVertical: 10,
  },
  btnText: {
    fontSize: 18,
    paddingVertical: 10,
    color: '#fff',
    textAlign: 'center',
  },
});
