import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { Ionicons, AntDesign,  } from '@expo/vector-icons';
import Cart from './Cart';

export default function Product({navigation, route}) {

  // console.log(route.params.image)

  return (
    <>
    <StatusBar backgroundColor={'#ff9859'}/>
      <View style={styles.box1}>
        <TouchableOpacity onPress={()=>{navigation.navigate('Home')}}>
          <Ionicons name="arrow-back" size={30} color="#fff3ed" />
        </TouchableOpacity>
      </View>
      <View style={styles.box2}>
        <Image style={styles.img_product} source={route.params.image} />
      </View>
      <View style={styles.box3}>
        <Text style={styles.name}>{route.params.name}</Text>
        <View style={styles.c1}>
          <Text style={styles.brand_name}>{route.params.brand_name}</Text>
          <Text>{route.params.rating}</Text>
        </View>
        <Text style={styles.capacity}>Capacity</Text>
        <View style={styles.c2}>
          <View style={styles.b1}>
            <Text style={styles.txt1}>Calories</Text>
            <Text style={styles.txt2}>90</Text>
          </View>
          <View style={styles.b1}>
            <Text style={styles.txt1}>Additive</Text>
            <Text style={styles.txt2}>3%</Text>
          </View>
          <View style={styles.b1}>
            <Text style={styles.txt1}>Vitamin</Text>
            <Text style={styles.txt2}>8%</Text>
          </View>
        </View>
      </View>
      <View style={styles.box4}>
        <Text style={styles.weight}>Quantity (300g)</Text>
        <View style={styles.c3}>
          <View style={styles.c4}>
            <TouchableOpacity>
              <AntDesign name="minus" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.quantity}>1</Text>
            <TouchableOpacity>
              <Ionicons name="ios-add" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <Text style={styles.price}>{route.params.price}</Text>
        </View>
        <View style={styles.c5}>
            <TouchableOpacity onPress={()=> {navigation.navigate(Cart)}} style={styles.cart_btn}>
              <Text style={{ fontWeight:'bold'}}>Go to Cart</Text>
            </TouchableOpacity>
            <Ionicons name="heart" size={30} color="red" />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  box1:{
    backgroundColor:'#ff9859',
    flex:.1,
    justifyContent:'center',
    paddingHorizontal:20,
  },
  box2:{
    flex:.3,
    backgroundColor:'#ff9859',
    justifyContent:'center',
    alignItems:'center',
  },
  img_product:{
    height:250,
    resizeMode:'contain',
  },
  box3:{
    backgroundColor:'#ff9859',
    flex:.3,
    paddingHorizontal:20,
  },
  name:{
    color:'#fff3ed',
    fontSize:18,
    fontWeight:'bold',
  },
  c1:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  brand_name:{
    color:'#fff3ed',

  },
  capacity:{
    color:'#fff3ed',
    marginTop:20,
    fontWeight:'bold',
  },
  c2:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
  },
  b1:{
    height:80,
    width:80,
    borderWidth:2,
    borderColor:'#fff3ed',
    borderRadius:5,
    marginRight:20,
    alignItems:'center',
    justifyContent:'center',
  },
  txt1:{
    color:'#fff3ed',
    fontSize:12,
  },
  txt2:{
    color:'#fff3ed',
    fontSize:13,
    fontWeight:'bold',
  },
  box4:{
    flex:.3,
    paddingHorizontal:20,
    paddingVertical:20,
  },
  weight:{
    color:'#000',
    fontWeight:'bold',
    fontSize:17,
  },
  c3:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:20,
  },
  c4:{
    flexDirection:'row',
    paddingHorizontal:10,
    paddingVertical:5,
    borderWidth:1,
    borderRadius:50,
    justifyContent:'space-between',
  },
  quantity:{
    marginHorizontal:15,
  },
  price:{
    fontSize:20,
    fontWeight:'bold',
  },
  c5:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingVertical:50,
  },
  cart_btn:{
    backgroundColor:'#ffcd86',
    paddingHorizontal:100,
    paddingVertical:10,
    borderRadius:50,
  },

})