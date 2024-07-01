import {SafeAreaView, TouchableOpacity, View} from "react-native";
import React from "react";
import reusable from "../../components/Reusable/Reusable.style";
import {COLORS, SIZES, TEXT} from "../../constants/theme";
import {ReusableText} from "../../components";
import {AntDesign} from '@expo/vector-icons'
import styles from "./home.style";

function Home({navigation}) {
    return(
        <SafeAreaView style={reusable.container}>

            <View>

                <View style={reusable.rowWithSpace('space-between')}>

                    <ReusableText text={'Hey user'} family={'regular'} size={TEXT.large} color={COLORS.black}/>

                    <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Search')}>
                        <AntDesign name='search1' size={26} />
                    </TouchableOpacity>

                </View>

            </View>

        </SafeAreaView>
    )
}

export default Home;
