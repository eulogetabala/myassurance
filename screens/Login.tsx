import { View, Text, TextInput, TouchableOpacity, Image, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import Button from "../component/Button";

const Login = ({ navigation }: { navigation: any }) => {
  const [isPasswordShown, setisPasswordShown] = useState(false);

  return (
    <LinearGradient
      colors={['#e0eafc', '#fff']}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Se connecter</Text>
          <Text style={styles.subtitle}>Devenez membre et suivez en temps réel vos déclarations de sinistre</Text>
        </View>

        {/* Champ Adresse e-mail */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Adresse email</Text>
          <TextInput
            placeholder="Entrer votre adresse email"
            placeholderTextColor={COLORS.black}
            keyboardType="email-address"
            style={styles.input}
          />
        </View>

        {/* Champ Mot de passe */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Mot de passe</Text>
          <View style={styles.passwordInputContainer}>
            <TextInput
              placeholder="Entrer votre mot de passe"
              placeholderTextColor={COLORS.black}
              secureTextEntry={!isPasswordShown}
              style={styles.input}
            />
            <TouchableOpacity
              onPress={() => setisPasswordShown(!isPasswordShown)}
              style={styles.eyeIconContainer}
            >
              <Ionicons
                name={isPasswordShown ? "eye-off" : "eye"}
                size={24}
                color={COLORS.black}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Bouton de connexion */}
        <Button
          title="Se connecter"
          filled={true}
          color={COLORS.claire}
          style={styles.loginButton}
          onPress={() => navigation.navigate("Home")}
        />

        {/* Boutons sociaux */}
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity
            onPress={() => console.log('Google Pressed')}
            style={styles.socialButton}
          >
            <Image source={require("../assets/google.webp")} style={styles.socialIcon} resizeMode="contain" />
            <Text style={styles.socialButtonText}>Google</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => console.log('Facebook Pressed')}
            style={styles.socialButton}
          >
            <Image source={require("../assets/face.webp")} style={styles.socialIcon} resizeMode="contain" />
            <Text style={styles.socialButtonText}>Facebook</Text>
          </TouchableOpacity>
        </View>

        {/* Lien vers la page de création de compte */}
        <View style={styles.registerLinkContainer}>
          <Text style={styles.registerText}>Vous n'avez pas de compte ?</Text>
          <Pressable onPress={() => navigation.navigate("Register")}>
            <Text style={styles.registerLink}>Créer un compte</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

// Styles
const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginHorizontal: 22,
  },
  header: {
    marginVertical: 22,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 12,
    color: COLORS.red,
  },
  subtitle: {
    fontSize: 13,
    color: COLORS.black,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: "400",
    marginVertical: 4,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 22,
  },
  passwordInputContainer: {
    position: 'relative',
  },
  eyeIconContainer: {
    position: "absolute",
    right: 12,
    top: 8,
  },
  loginButton: {
    marginTop: 18,
    marginBottom: 20,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',  // Centrer horizontalement le contenu
    borderWidth: 1,
    borderColor: COLORS.grey,
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: COLORS.bleu,
    flex: 1,
    marginHorizontal: 5,
  },
  
  socialButtonText: {
    marginLeft: 8,
    color: COLORS.blanc,
  },
  socialIcon: {
    height: 34,
    width: 34,
    
  },
  registerLinkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  registerText: {
    fontSize: 13,
    color: COLORS.black,
  },
  registerLink: {
    fontSize: 13,
    color: COLORS.red,
    fontWeight: 'bold',
    marginLeft: 6,
  },
});

export default Login;
