import { View, Text, Pressable, Dimensions, StyleSheet, ActivityIndicator } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import COLORS from '../constants/colors';
import Button from '../component/Button';
import * as Animatable from 'react-native-animatable'; // Importer la bibliothèque d'animation
import { useFonts } from 'expo-font'; // Importer le hook pour charger les polices

const Welcome = ({ navigation }: { navigation: any }) => {
  // Charger la police Montserrat
  const [fontsLoaded] = useFonts({
    'Montserrat': require('../assets/font/Montserrat-Bold.ttf'), // Assurez-vous que le chemin est correct
  });

  // Afficher un indicateur de chargement tant que les polices ne sont pas chargées
  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <LinearGradient colors={[COLORS.bleu, COLORS.claire]} style={styles.container}>
      {/* Image avec animation */}
      <Animatable.Image
        source={require("../assets/famille_amc-scaled.jpeg")}
        style={styles.backgroundImage} // Appliquer le style d'image en arrière-plan
        animation="fadeInUp" // Animation pour l'image
        duration={1500} // Durée de l'animation
      />

      <View style={styles.contentContainer}>
        {/* Texte principal avec animation */}
        <Animatable.Text
          style={styles.titleText}
          animation="bounceIn" // Animation pour le texte principal
          duration={1500}
        >
          AMC Assurance
        </Animatable.Text>

        {/* Sous-titre avec animation */}
        <Animatable.Text
          style={styles.subtitleText}
          animation="fadeIn" // Animation pour le sous-titre
          duration={1500}
          delay={500} // Délai avant l'animation
        >
          Encore plus proche de vous
        </Animatable.Text>

        {/* Bouton "Commencer" avec animation */}
        <Animatable.View
          animation="zoomIn" // Animation pour le bouton
          duration={1500}
          delay={1000} // Délai avant l'animation
        >
          <Button
            title="Commencer"
            onPress={() => navigation.navigate("Register")}
            style={{
              marginTop: 30,
              width: "70%", // Utiliser un pourcentage
            }}
          />
        </Animatable.View>

        {/* Lien vers la page de connexion avec animation */}
        <Animatable.View
          style={{
            flexDirection: "row",
            marginTop: 20,
            justifyContent: "center"
          }}
          animation="fadeInUp" // Animation pour le lien
          duration={1500}
          delay={1500} // Délai avant l'animation
        >
          <Text style={{ fontSize: 13, color: COLORS.blanc }}>
            Avez-vous déjà un compte ?
          </Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={{
              color: COLORS.red,
              fontWeight: "700",
              marginLeft: 4,
              fontFamily: 'Montserrat-Black'
            }}>
              Se connecter
            </Text>
          </Pressable>
        </Animatable.View>
      </View>
    </LinearGradient>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject, // Couvre toute la surface
    height: '60%', // Prendre toute la hauteur
    width: '100%', // Prendre toute la largeur
    borderRadius: 50, // Réinitialiser le rayon de la bordure
    resizeMode: 'cover', // Couvrir tout le conteneur
  },
  contentContainer: {
    top: 200,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20, // Ajout d'un padding horizontal
  },
  titleText: {
    fontSize: 35,
    fontWeight: "800",
    color: COLORS.blanc,
    marginTop: 20,
    textAlign: 'center',
    fontFamily: 'Montserrat-Black', // Appliquer la police Montserrat
  },
  subtitleText: {
    fontSize: 17,
    color: COLORS.blanc,
    marginTop: 10,
    textAlign: 'center',
    fontFamily: 'Montserrat-Black', // Appliquer la police Montserrat
  },
});

export default Welcome;
