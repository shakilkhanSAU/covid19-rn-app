import { Image, Platform, Pressable, StatusBar, StyleSheet, View, ScrollView } from 'react-native'
import React from 'react'
import Text from '../component/text/text'
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { spacing } from '../theme/spacing';

export default function Home() {
    return (
        <ScrollView>
            <StatusBar backgroundColor="#473F97"
                barStyle="light" />
            <View style={styles.AndroidSafeArea}>
                <View style={styles.upperCard}>
                    <View style={styles.mainManu}>
                        <AntDesign name="bars" size={24} color="white" />
                        <Feather name="bell" size={24} color="white" />
                    </View>
                    <View style={styles.mainTitle}>
                        <Text preset='h2'>Covid-19</Text>
                        <View style={styles.countryOption}>
                            <Image style={styles.imageStyle} source={require('../image/usa.png')} />
                            <Text style={{ paddingHorizontal: 12 }} preset='h3'>
                                USA
                            </Text>
                            <AntDesign name="caretdown" size={16} color='grey' />
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: spacing[4] }} >
                        <Text preset='h4'>Are you feeling sick?
                        </Text>
                        <Text style={{ color: 'white', paddingTop: 15, lineHeight: 24 }}>If you feel sick with any of covid-19 symptoms please call or SMS us immediately for help.
                        </Text>
                    </View>
                    <View style={styles.btnContainer}>
                        <Pressable style={styles.orangeBtn}>
                            <FontAwesome5 name="phone-alt" size={18} color="white" />
                            <Text preset='h4' style={{ fontSize: 20, color: 'white', paddingLeft: 15 }}>Call Now</Text>
                        </Pressable>
                        <Pressable style={styles.blueBtn}>
                            <Feather name="message-circle" size={18} color="white" />
                            <Text preset='h4' style={{ fontSize: 20, color: 'white', paddingLeft: 15 }}>Send SMS</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.lowerCard}>
                    <Text preset='h4' style={{ color: 'black', marginTop: 18 }}>Prevention
                    </Text>
                    <Image style={styles.preventionImage} source={require('../image/prevention.jpg')} />
                    <Image style={styles.testImage} source={require('../image/test.jpg')} />
                </View>
            </View>
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: colors.backgroundBlue,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    upperCard: {
        flex: 1,
        backgroundColor: colors.backgroundBlue,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40

    },
    lowerCard: {
        flex: 1,
        backgroundColor: colors.white,
        marginTop: -50,
        zIndex: -1,
        paddingTop: 50,
        paddingHorizontal: spacing[4]
    },
    mainManu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: spacing[5],
        paddingHorizontal: spacing[4]
    },
    mainTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: spacing[5]
    },
    countryOption: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.white,
        padding: 14,
        borderRadius: 23
    },
    imageStyle: {
        borderRadius: 50
    },
    orangeBtn: {
        backgroundColor: colors.orange,
        paddingVertical: 14,
        paddingHorizontal: 20,
        width: '45%',
        borderRadius: 40,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    blueBtn: {
        backgroundColor: colors.blue,
        paddingVertical: 14,
        paddingHorizontal: 20,
        width: '45%',
        borderRadius: 40,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        padding: spacing[4],
        marginTop: spacing[3]
    },
    preventionImage: {
        width: '100%',
        resizeMode: 'contain',
        marginTop: -180
    },
    testImage: {
        width: '100%',
        resizeMode: 'contain',
        marginTop: -320
    }
})