import React from "react";
import {Image, View} from "react-native";
import styles from "./Slides.style";
import {HeightSpacer, ReusableBtn, ReusableText} from "../index";
import {COLORS, SIZES} from "../../constants/theme";
import {useNavigation} from "@react-navigation/native";

function Slides({item}) {
    const navigation = useNavigation()

    return (
        <View>
            <Image source={item.image} style={styles.image}/>

            <View style={styles.stack}>
                <ReusableText text={item.title} family={'medium'} size={SIZES.xxLarge} color={COLORS.white}/>
                <HeightSpacer height={40} />
                <ReusableBtn
                    backgroundColor={COLORS.red}
                    onPress={() => navigation.navigate('Bottom')}
                    width={(SIZES.width - 50) / 2.2}
                    borderColor={COLORS.red}
                    borderWidth={0}
                    btnText={"Let's go"}
                    textColor={COLORS.white}/>

                {/*<HeightSpacer height={40} />*/}
                {/*<ReusableBtn*/}
                {/*    backgroundColor={COLORS.white}*/}
                {/*    onPress={() => {*/}
                {/*        */}
                {/*    }}*/}
                {/*    width={(SIZES.width - 50) / 2.2}*/}
                {/*    borderColor={COLORS.red}*/}
                {/*    borderWidth={1}*/}
                {/*    btnText={"Let's go"}*/}
                {/*    textColor={COLORS.black}/>*/}
            </View>
        </View>
    )
}

export default Slides;
