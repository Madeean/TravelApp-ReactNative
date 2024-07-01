import {FlatList} from "react-native";
import React from "react";
import Slides from "../../components/Onboard/Slides";

function OnBoarding(){
    const slides = [
        {
          id: 1,
          image: require('../../assets/images/1.png'),
          title: "Find the best place"
        },
        {
          id: 2,
          image: require('../../assets/images/2.png'),
          title: "Discover the world"
        },
        {
          id: 3,
          image: require('../../assets/images/3.png'),
          title: "Find the best hotels in the world"
        },
    ]

    return(
        <FlatList
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            data={slides}
            renderItem={({item}) => <Slides item={item} />}
            keyExtractor={(item) => item.id.toString()}
        />
    );
}

export default OnBoarding;
