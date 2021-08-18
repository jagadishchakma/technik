import React from 'react';
import {
  Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { product } from '../fakeData/demoData';

const Home = ({navigation}) => {
  return (
    <>
      <StatusBar backgroundColor="red" />
      <View style={styles.titleBar}>
        <Text style={styles.title}>Technik</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Icon name="shoppingcart" size={30} color="#ffffff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="bars"
              size={30}
              color="#ffffff"
              style={{paddingLeft: 15}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={styles.card}>
          {product?.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.cardItem}
              onPress={() => navigation.navigate('Product', {product: item})}>
              <View style={{alignItems: 'center'}}>
                <Image source={item?.image} style={styles.cardImage} />
              </View>
              <View style={{paddingVertical: 10}}>
                <View style={styles.cardPrice}>
                  <Text style={{fontSize: 16, fontWeight: '700'}}>
                    {item?.name}
                  </Text>
                  <Text>{item?.price}</Text>
                </View>
                <View style={styles.cardBrand}>
                  <Text style={{fontSize: 13, fontWeight: '600'}}>
                    {item?.brand}
                  </Text>
                  <Icon name="shoppingcart" size={20} color="black" />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  titleBar: {
    backgroundColor: 'gray',
    height: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  title: {fontSize: 25, fontWeight: '700', color: '#ffffff'},
  card: {
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  cardItem: {
    marginVertical: 10,
    paddingHorizontal: 10,
    width: '45%',
    margin: 5,
  },
  cardImage: {width: 150, height: 200, borderRadius: 5},
  cardPrice: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardBrand: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
