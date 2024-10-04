import { View, Text, TextInput, TouchableOpacity, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import Button from "../component/Button";

const Register = ({ navigation }: { navigation: any }) => {
  const [isPasswordShown, setisPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <LinearGradient
      colors={['#e0eafc', '#fff']}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, marginHorizontal: 22 }}>
          <View style={{ marginVertical: 22 }}>
            <Text style={{ fontSize: 22, fontWeight: "bold", marginVertical: 12, color: COLORS.red }}>
              Créer un compte
            </Text>
            <Text style={{ fontSize: 13, color: COLORS.black }}>
              Devenez membre et suivez en temps réel vos déclarations de sinistre
            </Text>
          </View>

          {/* Champ Nom */}
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 14, fontWeight: "400", marginVertical: 4 }}>
              Nom(s)
            </Text>
            <View style={{ width: "100%", height: 40, borderColor: COLORS.black, borderWidth: 1, borderRadius: 8, paddingLeft: 22, justifyContent: "center" }}>
              <TextInput placeholder="Entrer votre Nom" placeholderTextColor={COLORS.black} style={{ width: "100%" }} />
            </View>
          </View>

          {/* Champ Prénom */}
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 14, fontWeight: "400", marginVertical: 4 }}>Prénom(s)</Text>
            <View style={{ width: "100%", height: 40, borderColor: COLORS.black, borderWidth: 1, borderRadius: 8, paddingLeft: 22, justifyContent: "center" }}>
              <TextInput placeholder="Entrer votre Prénom" placeholderTextColor={COLORS.black} style={{ width: "100%" }} />
            </View>
          </View>

          {/* Champ Adresse e-mail */}
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 14, fontWeight: "400", marginVertical: 4 }}>Adresse email</Text>
            <View style={{ width: "100%", height: 40, borderColor: COLORS.black, borderWidth: 1, borderRadius: 8, paddingLeft: 22, justifyContent: "center" }}>
              <TextInput
                placeholder="Entrer votre adresse email"
                placeholderTextColor={COLORS.black}
                keyboardType="email-address"
                style={{ width: "100%" }}
              />
            </View>
          </View>

          {/* Champ Numéro de téléphone */}
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 14, fontWeight: "400", marginVertical: 4 }}>Numéro de téléphone</Text>
            <View
              style={{
                width: "100%",
                height: 40,
                borderColor: COLORS.black,
                borderWidth: 1,
                borderRadius: 8,
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 22,
              }}
            >
              <TextInput
                placeholder="+242"
                placeholderTextColor={COLORS.black}
                keyboardType="numeric"
                style={{
                  width: "20%",
                  borderRightColor: COLORS.black,
                  borderRightWidth: 1,
                  paddingRight: 10,
                  height: "100%",
                }}
              />

              <TextInput
                placeholder="Entrez votre numéro de téléphone"
                placeholderTextColor={COLORS.black}
                keyboardType="numeric"
                style={{
                  width: "80%",
                  paddingLeft: 10,
                }}
              />
            </View>
          </View>

          {/* Champ Mot de passe */}
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 14, fontWeight: "400", marginVertical: 4 }}>
              Mot de passe
            </Text>
            <View
              style={{
                width: "100%",
                height: 40,
                borderColor: COLORS.black,
                borderWidth: 1,
                borderRadius: 8,
                justifyContent: "center",
                paddingLeft: 22,
              }}
            >
              <TextInput
                placeholder="Entrer votre mot de passe"
                placeholderTextColor={COLORS.black}
                secureTextEntry={!isPasswordShown}
                style={{ width: "100%" }}
              />
              <TouchableOpacity
                onPress={() => setisPasswordShown(!isPasswordShown)}
                style={{
                  position: "absolute",
                  right: 12,
                }}
              >
                <Ionicons
                  name={isPasswordShown ? "eye-off" : "eye"}
                  size={24}
                  color={COLORS.black}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Checkbox */}
          <View style={{ flexDirection: "row", marginVertical: 6 }}>
            <Checkbox
              style={{ marginRight: 8 }}
              value={isChecked}
              onValueChange={setIsChecked}
              color={isChecked ? COLORS.claire : undefined}
            />
            <Text>J'accepte les termes et conditions.</Text>
          </View>

          {/* Bouton d'enregistrement */}
          <Button
            title="S'enregistrer"
            filled={true}
            color={COLORS.claire}
            style={{ marginTop: 18, marginBottom: 4 }}
            onPress={() => console.log("Button Pressed")}
          />
        </View>

        {/* Boutons sociaux */}
        {/* <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 30 }}>
          <TouchableOpacity
            onPress={() => console.log('Google Pressed')}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              height: 52,
              borderWidth: 1,
              borderColor: COLORS.grey,
              marginRight: 8,
              borderRadius: 30,
              paddingHorizontal: 15,
              backgroundColor: COLORS.bleu
            }}
          >
            <Image source={require("../assets/google.webp")} style={{ height: 36, width: 36, marginRight: 8 }} resizeMode="contain" />
            <Text>Google</Text>
          </TouchableOpacity>

       
        </View> */}

        {/* Lien vers la page de connexion */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: 22
          }}
        >
          <Text style={{ fontSize: 13, color: COLORS.black }}>J'ai déjà un compte</Text>
          <Pressable
            onPress={() => navigation.navigate("Login")}
          >
            <Text
              style={{
                fontSize: 13,
                color: COLORS.red,
                fontWeight: 'bold',
                marginLeft: 6
              }}
            >
              Se connecter
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Register;
