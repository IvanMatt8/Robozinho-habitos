import React from "react";
import { View, ScrollView, Text, Image, StyleSheet } from "react-native";

import LifeStatus from "../../components/Common/LifeStatus";



export default function Start(){
    return(
        <View style={Style.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
               <View style={{ alignItems: "center"}}>
                <Image source={require("../../assets/icons/logo3.png")}
                style={styles.logo}
                />
                <LifeStatus/>
                <Text style={styles.description}>
                    Vamos Transformar sua Vida {"/n"} em jogo, buscando sempre {"/n"} o melhor nível.
                </Text>
               </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundcolor: "rgba(21,21,21, 0.98)",
    },

    logo:{
       width: 300,
       height: 60,
       marginTop: 60,
       marginBottom: 20,
    },
    description: {
        color: "#FFFFFF",
        fontSize: 20,
        textAlign: "center",
        marginVertical: 60,
    }
})