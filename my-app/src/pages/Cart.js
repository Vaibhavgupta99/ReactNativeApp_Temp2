import { View, Text, StatusBar, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome, Feather, FontAwesome5, Ionicons,  } from '@expo/vector-icons';


export default function Cart({navigation}) {
  return (
    <>
        <StatusBar backgroundColor={'#2e2e2e'}/>
        <View style={Styles.box1}>
            <Feather style={{marginRight:10,}} name="shopping-bag" size={26} color="#dcdcdc" />
            <Text style={Styles.heading}>Cart</Text>
        </View>
        <View style={Styles.box2}>
            <ScrollView horizontal={false} style={Styles.scroll}>
                <View style={Styles.item}>
                    <View style={Styles.box_img}>
                        <Image style={Styles.item_img} source={require('../img/berries.png')} />
                    </View>
                    <View style={Styles.detail_box}>
                        <Text style={Styles.name}>Golden Berries</Text>
                        <Text style={Styles.price}>$9.43</Text>                     
                    </View>
                    <View style={Styles.qty_box}>
                        <Text style={Styles.quantity}>x1</Text>
                    </View>
                </View>
                <View style={Styles.item}>
                    <View style={Styles.box_img}>
                        <Image style={Styles.item_img} source={require('../img/Pistachios-removebg-preview.png')} />
                    </View>
                    <View style={Styles.detail_box}>
                        <Text style={Styles.name}>Pistachios</Text>
                        <Text style={Styles.price}>$5.43</Text>                     
                    </View>
                    <View style={Styles.qty_box}>
                        <Text style={Styles.quantity}>x1</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
        <View style={Styles.box3}>
            <Text style={Styles.total_qty}>2 Items</Text>
            <View style={Styles.buy_box}>
                <Text style={Styles.total_amount}>$14.86</Text>
                <TouchableOpacity style={Styles.buy_btn}>
                    <Text style={{fontWeight:'bold',}}>Buy Now</Text>
                </TouchableOpacity>
            </View>

        </View>
    </>
  )
}

const Styles = StyleSheet.create({
    box1:{
        flex:.1,
        flexDirection:'row',
        backgroundColor:'#2e2e2e',
        paddingHorizontal:20,
        alignItems:'center',
    },
    heading:{
        color:'#dcdcdc',
        fontWeight:'bold',
        fontSize:18,
    },
    box2:{
        flex:.8,
        backgroundColor:'#2e2e2e',
    },
    item:{
        flexDirection:'row',
        height:100,
        marginVertical:8,
        borderBottomWidth:1,
        borderColor:'gray',
    },
    box_img:{
        flex:.3,
        alignItems:'center',
        justifyContent:'center',
    },
    item_img:{
        height:80,
        width:80,
        resizeMode:'contain',
    },
    detail_box:{
        flex:.5,
        paddingHorizontal:10,
        justifyContent:'center',
    },
    name:{
        color:'#fff3ed',
        fontSize:17,
        fontWeight:'bold',
        marginBottom:10,
    },
    price:{
        color:'#c4c4c4',
    },
    qty_box:{
        flex:.2,
        alignItems:'center',
        justifyContent:'center',
    },
    quantity:{
        color:'#fff3ed',
        fontWeight:'bold',
        fontSize:20,

    },
    box3:{
        flex:.1,
        backgroundColor:'#2e2e2e',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:20,
    },
    total_qty:{
        color:'#c4c4c4',
    },
    buy_box:{
        borderWidth:1,
        borderColor: '#fbd082',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:14,
    },
    total_amount:{
        color:'#fff3ed',
        fontSize:16,
        fontWeight:'bold',
        marginHorizontal:15,
    },
    buy_btn:{
        backgroundColor:'#fbd082',
        paddingHorizontal:10,
        paddingVertical:12,
        borderRadius:12,
    },
})