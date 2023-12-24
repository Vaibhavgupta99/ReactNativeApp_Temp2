import { View, Text, StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome, Feather, FontAwesome5, Ionicons,  } from '@expo/vector-icons';
import Cart from './Cart';


const wh = Dimensions.get('window').height

const products = [
  {
    image: require('../img/berries.png'),
    name: "Golden Berries",
    price: "$9.43",
    rating: "⭐⭐⭐⭐",
    brand_name: "rostaa",
    id: 1,
  },
  {
    image: require('../img/Almonds-removebg-preview.png'),
    name: "Almonds",
    price: "$5",
    rating: "⭐⭐⭐⭐⭐",
    brand_name: "fabeato",
    id: 2,
  },
  {
    image: require('../img/Cashew-removebg-preview.png'),
    name: "Cashews",
    price: "$4.95",
    rating: "⭐⭐⭐⭐",
    brand_name: "rostaa",
    id: 3,
  },
  {
    image: require('../img/Pistachios-removebg-preview.png'),
    name: "Pistachios",
    price: "$11.4",
    rating: "⭐⭐⭐⭐⭐",
    brand_name: "rostaa",
    id: 4,
  },
  {
    image: require('../img/Raisins-removebg-preview.png'),
    name: "Raisins",
    price: "$3.45",
    rating: "⭐⭐⭐",
    brand_name: "rostaa",
    id: 5,
  },
  {
    image: require('../img/Black_Raisins-removebg-preview.png'),
    name: "Black Raisins",
    price: "$7.53",
    rating: "⭐⭐⭐⭐",
    brand_name: "rostaa",
    id: 6,
  }  
]

export default function Home({navigation}) {
  
  const [data, setData] = useState(0)

  return (
    
    <> 
    <StatusBar backgroundColor={'whitesmoke'}/>
      <View style={styles.box1}>
        <FontAwesome name="bars" size={30} color="black" />
        <Feather name="shopping-bag" size={30} color="black" />
      </View>
      <View style={styles.box2}>
        <Text style={styles.txt1}>Hi, Helen</Text>
        <Text style={styles.txt2}>What's today's taste? 😋</Text>
      </View>
      <View style={styles.box3}>
        <View style={styles.categroy1}>
          <View style={styles.cc}></View>
          <Text style={styles.txt_cc}>Dry Fruits</Text>
        </View>
        <View style={styles.categroy2}>
        <View style={styles.cc}></View>
          <Text style={styles.txt_cc}>Nuts</Text>
        </View>
        <View style={styles.search}>
          <FontAwesome name="search" size={30} color="black" />
        </View>
      </View>
      <View style={styles.box4}>
        <View style={styles.circle}>
          <TouchableOpacity onPress={()=> {navigation.navigate('Product' , products[data])}} style={styles.img_current}>
            <Image style={styles.selected_product_img} source={products[data]["image"]} />
          </TouchableOpacity>
          <View style={styles.details_current}>
            <Text style={styles.name}>{products[data].name}</Text>
            <Text style={styles.price}>{products[data].price} <Text style={styles.weight}>/ 300g</Text></Text>
            <Text style={styles.rating}>{products[data]["rating"]}</Text>
            <TouchableOpacity onPress={()=> {navigation.navigate(Cart)}} style={styles.cart}>
              <FontAwesome5 style={styles.cart_icon} name="cart-arrow-down" size={24} color="black" />
              <Text>Add to cart</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.heart}>
            <View style={styles.heart_bg}><Ionicons name="heart" size={24} color="red" /></View>
          </View>
        </View>
      </View>
      <View style={styles.box5}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity onPress={()=>setData(0)} style={[styles.img_box, data == 0 ? styles.active : '']}>
          <Image style={[styles.img, data == 0 ? styles.active_img : '']} source={require('../img/berries.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setData(1)} style={[styles.img_box, data == 1 ? styles.active : '']}>
          <Image style={[styles.img, data == 1 ? styles.active_img : '']} source={require('../img/Almonds-removebg-preview.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setData(2)} style={[styles.img_box, data == 2 ? styles.active : '']}>
          <Image style={[styles.img, data == 2 ? styles.active_img : '']} source={require('../img/Cashew-removebg-preview.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setData(3)} style={[styles.img_box, data == 3 ? styles.active : '']}>
          <Image style={[styles.img, data == 3 ? styles.active_img : '']} source={require('../img/Pistachios-removebg-preview.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setData(4)} style={[styles.img_box, data == 4 ? styles.active : '']}>
          <Image style={[styles.img, data == 4 ? styles.active_img : '']} source={require('../img/Raisins-removebg-preview.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setData(5)} style={[styles.img_box, data == 5 ? styles.active : '']}>
          <Image style={[styles.img, data == 5 ? styles.active_img : '']} source={require('../img/Black_Raisins-removebg-preview.png')} />
        </TouchableOpacity>
        </ScrollView>
      </View>
      
    </>
  )
}

const styles = StyleSheet.create({
  box1:{
    height:wh/8,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:20,
  },
  box2:{
    height:wh/8,
    padding:20,
  },
  txt1:{
    color:'#89837f',
  },
  txt2:{
    color:'#3a2d25',
    fontWeight:'bold',
  },
  box3:{
    height:wh/8,
    flexDirection:'row',
  },
  categroy1:{
    flex:.3,
    alignItems:'center',
  },
  categroy2:{
    flex:.3,
    alignItems:'center',
  },
  cc:{
    height:wh/16,
    width:wh/16,
    borderRadius:wh/16,
    backgroundColor:'#ffcb80'
  },
  txt_cc:{
    fontWeight:'bold',
    marginTop:5,
  },
  search:{
    flex:.4,
    flexDirection:'row',
    alignItems:'flex-start',
    justifyContent:'flex-end',
    paddingRight:20,
  },
  box4:{
    height:wh/2,
    alignItems:'center',
    justifyContent:'center',
  },
  circle:{
    height:wh/3,
    width:wh/3,
    borderRadius:wh/3,
    backgroundColor:'#ff9859',
    flexDirection:'row',
    alignItems:'center',
  },
  img_current:{
    flex:.3,
    justifyContent:'center',
    alignItems:'flex-end',
    height:150,
  },
  selected_product_img:{
    height:150,
    width:150,
    resizeMode:'contain',
  },
  details_current:{
    flex:.6,
    justifyContent:'center',
  },
  name:{
    fontWeight:'bold',
    color:'#fffbe6',
    fontSize:20,
  },
  price:{
    color:'#fffbe6',
    marginTop:5,
    fontSize:18,
  },
  weight:{
    fontSize:12,
  },
  rating:{
    marginVertical:5,
  },
  cart:{
    flexDirection:'row',
    backgroundColor:'#fffcff',
    borderRadius:50,
    paddingHorizontal:5,
    paddingVertical:10,
    justifyContent:'center',
    marginTop:10,
  },
  cart_icon:{
    marginRight:10,
  },
  heart:{
    flex:.1,
    justifyContent:'center',
  },
  heart_bg:{
    backgroundColor:'#fbfbfe',
    height:40,
    width:40,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:2,
    elevation:2,
  },
  box5:{
    height:wh/8,
    flexDirection:'row',
    alignItems:'center',
  },
  img_box:{
    height:wh/11,
    width:wh/11,
    borderRadius:wh/11,
    backgroundColor:'#e9e1d5',
    justifyContent:'center',
    alignItems:'center',
    margin:10,
    elevation:2,

  },
  img:{
    height:wh/16,
    width:wh/16,
    resizeMode:'contain',
  },
  active:{
    backgroundColor:'#ff9859',
  },
  active_img:{
    transform:[{scale:1.5}],
  }

})