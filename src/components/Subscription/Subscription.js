import React from 'react';
import {
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import services from '../fakeData/subscriptionData';

const Subscription = () => {
  return (
    <>
      <StatusBar backgroundColor="#0051C1" />
      <View style={styles.titleBar}>
        <View>
          <TouchableOpacity>
            <Icon name="bars" size={25} color="#fff" />
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={{
              textAlign: 'center',
              color: '#fff',
              fontSize: 25,
              marginLeft: '40%',
            }}>
            Technik
          </Text>
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            backgroundColor: '#0051C1',
            padding: 10,
            paddingBottom: 90,
            paddingTop: 50,
          }}>
          <Text style={{fontSize: 20, color: '#fffd'}}>You have,</Text>
          <View style={styles.subsTitle}>
            <Text style={{color: '#fff', fontSize: 27}}>6 subscriptions</Text>
            <Text style={{color: '#fff', fontSize: 27}}>
              $179.62/<Text style={{color: '#fffd', fontSize: 20}}>MO</Text>
            </Text>
          </View>
        </View>
        <View style={styles.subsBoxList}>
          <View style={styles.subsBoxListTitle}>
            <TouchableOpacity>
              <Text
                style={{color: '#0051C1', fontWeight: 'bold', fontSize: 17}}>
                My Subscriptions
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{fontWeight: 'bold', fontSize: 17}}>Upcoming</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.subsCountTitle}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>
              All Subscriptions
            </Text>
            <TouchableOpacity style={styles.subsTypeSelect}>
              <Text
                style={{fontWeight: 'bold', fontSize: 16, color: '#0051C1'}}>
                Montly <Icon name="angle-down" size={20} color="#0051C1" />
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.serviceList}>
            {services?.map(service => (
              <View key={service.id} style={styles.service}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={service.image}
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 25,
                      marginRight: 10,
                    }}
                  />
                  <View>
                    <Text style={{fontWeight: 'bold'}}>{service.name}</Text>
                    <Text style={{color: 'gray'}}>{service.type}</Text>
                  </View>
                </View>
                <View>
                  <TouchableOpacity
                    style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        marginRight: 10,
                      }}>{`${service.currency}${service.price}`}</Text>
                    <Text>
                      <Icon name="angle-right" size={20} color="#0051C1" />
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <View>
        <TouchableOpacity style={styles.newStatement}>
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 17,
            }}>
            + New Statement
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Subscription;

const styles = StyleSheet.create({
  titleBar: {
    backgroundColor: '#0051C1',
    height: 45,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  subsTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subsBoxList: {
    position: 'relative',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    backgroundColor: '#fff',
    padding: 10,
  },
  subsBoxListTitle: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    position: 'relative',
    marginTop: -40,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  subsCountTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
  },
  subsTypeSelect: {
    backgroundColor: '#0077cc82',
    borderRadius: 5,
    padding: 10,
  },
  serviceList: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
  },
  service: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#0077cc82',
  },
  newStatement: {
    backgroundColor: '#0051C1',
    borderRadius: 20,
    padding: 15,
    position: 'absolute',
    bottom: 50,
    left: 50,
    right: 50,
    zIndex: 999,
  },
});
