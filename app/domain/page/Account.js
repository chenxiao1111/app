import React, {Component} from 'react';
import NavBar from '../component/NavBar'
import {View, Text, StyleSheet, ScrollView, Link, TouchableOpacity, Image} from 'react-native';
import px2dp from '../util';
import Screen from '../component/Screen';

export class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gridItems: [
                {image: "icon_lingqianbao", label: "余额：999.99元"},
                {image: "icon_fukuanma", label: "付款码"},
            ],
        }
    }

    render() {

        return <ScrollView style={{flex: 1, paddingTop: 0}}>

            <NavBar
                title="我的账户"
                leftIcon="ios-arrow-back"
                leftPress={() => {
                    this.props.navigator.pop()
                }}
                rightPress={() => {
                    this.props.navigator.pop()
                }}
                rightLabel={"充值"}

            />
            <View style={styles.container}>
                <View style={styles.itemViewStyle}>
                    <Image source={require("./images/icon_lingqianbao.png")} style={styles.imageStyle}></Image>

                    <Text style={styles.txtStyle}>余额：999.99元</Text>
                </View>
                <View style={styles.lineStyle}></View>
                <View style={styles.itemViewStyle}>
                    <Image source={require("./images/icon_fukuanma.png")} style={styles.imageStyle}></Image>
                    <Text style={styles.txtStyle}>余额：999.99元</Text>
                </View>
            </View>

        </ScrollView>
    }
}

const styles = StyleSheet.create({
    para: {
        paddingHorizontal: px2dp(20),
        marginBottom: px2dp(20),
    },
    container: {
        width: Screen.width,
        height: 180,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#f3f3f3',
    },
    itemViewStyle: {
        width: Screen.width / 2 - 0.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    lineStyle:{
        width:1,
        backgroundColor: '#f3f3f3'
    },
    imageStyle: {
        height: 60,
        width: 60,
    },
    txtStyle:{
        marginTop: 20,
    }


})
