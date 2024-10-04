import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable"; // Import Animatable
import Info from "../component/Home/Info";

const Home = ({ navigation }: { navigation: any }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView | null>(null);

  const images = [
    "https://images.pexels.com/photos/1842357/pexels-photo-1842357.jpeg", // Incendie d'une maison
    "https://images.pexels.com/photos/279979/pexels-photo-279979.jpeg", // Feu de forêt
    "https://images.pexels.com/photos/237367/pexels-photo-237367.jpeg", // Incendie dans un bâtiment
  ];

  const icons = [
    {
      uri: "https://img.icons8.com/ios-filled/50/254b8c/home.png",
      title: "Assurance Habitation",
      destination: 'AutoInsurance'
    },
    {
      uri: "https://img.icons8.com/ios-filled/50/254b8c/car.png",
      title: "Assurance Automobile",
      destination: 'Automobile'
    },
    {
      uri: "https://img.icons8.com/ios-filled/50/254b8c/medical-doctor.png",
      title: "Assurance Santé",
      destination: 'Autosanté'
    },
    {
      uri: "https://img.icons8.com/ios-filled/50/254b8c/heart-health.png",
      title: "Assurance Vie",
      destination: 'AutoVie'
    },
    {
      uri: "https://img.icons8.com/ios-filled/50/254b8c/flight.png",
      title: "Assurance Voyage",
      destination: 'AutoVoyage'
    },
    {
      uri: "https://img.icons8.com/ios-filled/50/254b8c/businessman.png",
      title: "Assurance Personnelle",
      destination: 'AutoSanté'
    },
    {
      uri: "https://img.icons8.com/ios-filled/50/254b8c/property.png",
      title: "Assurance Immobilier",
      destination: 'AutoImmo'
    },
  ];
  

  const windowWidth = Dimensions.get("window").width;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex === images.length - 1 ? 0 : prevIndex + 1;
        if (scrollViewRef.current) {
          scrollViewRef.current.scrollTo({
            x: nextIndex * windowWidth,
            animated: true,
          });
        }
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: "data:image/png;base64,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",
          }}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.headerActions}>
          <Pressable onPress={() => navigation.navigate("Profil")}>
            <Image
              source={{ uri: "https://randomuser.me/api/portraits/men/75.jpg" }} // Replace with the specific avatar URL
              style={styles.profileIcon}
              resizeMode="cover"
            />
          </Pressable>
          {/* <TouchableOpacity>
            <Ionicons name="menu" size={32} color="#1c4c8e" />
          </TouchableOpacity> */}
        </View>
      </View>

      {/* Icons Section */}
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.iconsRow}
      contentContainerStyle={{ paddingHorizontal: 16 }}
    >
      {icons.map((icon, index) => (
        // Utilisation de TouchableOpacity pour rendre chaque icône cliquable
        <TouchableOpacity
          key={index}
          style={styles.iconContainer}
          onPress={() => navigation.navigate(icon.destination)} // Redirection selon le type d'assurance
        >
          <Image
            source={{ uri: icon.uri }}
            style={styles.icon}
            resizeMode="contain"
          />
          <Text style={styles.iconText}>{icon.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>

      {/* Slider Image */}
      <View style={styles.sliderContainer}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
        >
          {images.map((image, index) => (
            <Image
              key={index}
              source={{ uri: image }}
              style={styles.sliderImage}
            />
          ))}
        </ScrollView>
        <View style={styles.sliderIndicators}>
          {images.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                currentIndex === index ? styles.activeDot : null,
              ]}
            />
          ))}
        </View>
      </View>

      {/* Sinistres Block */}
      {/* Sinistres Block */}
      <Animatable.View animation="fadeInUp" delay={700}>
        <View style={styles.sinistresContainer}>
          {/* Info Sinistres */}
          <View style={styles.sinistresInfo}>
          <Image
  source={{ uri: "https://img.icons8.com/ios-filled/50/fc0000/lock.png" }} // URL to a padlock icon
  style={styles.sinistresIcon}
  resizeMode="contain"
/>

            <Text style={styles.sinistresText}>MES SINISTRES</Text>
          </View>

          {/* Conteneur des Boutons Superposés */}
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.sinistreButton}>
              <Text style={styles.buttonText}>TRAITÉS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sinistreButton}>
              <Text style={styles.buttonText}>EN COURS...</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animatable.View>

      {/* Mon Dépanneur Button */}
      <Animatable.View animation="zoomIn" delay={900}>
        <TouchableOpacity style={styles.buttonDepanne}>
          <Text style={styles.buttonText}>MON DEPANNEUR</Text>
        </TouchableOpacity>
      </Animatable.View>

      {/* Bottom Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.buttonspace}>
          <Text style={styles.buttonText2}>Agences proches de vous</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonspace}>
          <Text style={styles.buttonText2}>Partenaires services</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonspace}>
          <Text style={styles.buttonText2}>Urgence assistance</Text>
        </TouchableOpacity>
      </View>

      {/* Title and Info Section */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>AMC INFOS</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.content}>Tout sur l'actualité avec AMC</Text>
      </View>

      {/* Info Component */}
      <Info />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingVertical: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "white",
  },
  logo: {
    width: 100,
    height: 40,
  },
  headerActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  },
  iconsRow: {
    marginTop: 24,
  },
  iconContainer: {
    alignItems: "center",
    marginRight: 16,
  },
  icon: {
    width: 48,
    height: 48,
    borderRadius: 50,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#1c4c8e",
    padding: 10
  },
  iconText: {
    marginTop: 8,
    fontSize: 12,
    color: "#1c4c8e",
    textAlign: "center",
  },
  sliderContainer: {
    height: 200,
    marginTop: 30,
  },
  sliderImage: {
    width: Dimensions.get("window").width,
    height: "100%",
  },
  sliderIndicators: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#fc0000",
  },
  sinistresContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 3,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    top: 25,
    marginBottom: 20, // Espacement en bas
  },
  sinistresInfo: {
    alignItems: "center",
  },
  sinistresIcon: {
    width: 60,
    height: 60,
    marginBottom: 8,
  },
  sinistresText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  buttonsContainer: {
    justifyContent: "space-between",
    height: 100, // Hauteur du conteneur pour aligner verticalement
  },
  sinistreButton: {
    backgroundColor: "#254B8C", // Couleur de fond identique
    paddingHorizontal: 20, // Espace horizontal
    paddingVertical: 12, // Espace vertical
    borderRadius: 5, // Coins arrondis
    marginVertical: 8, // Espacement vertical entre chaque bouton
    alignItems: "center", // Centrer le texte
    // Largeur des boutons, ajustable
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: "#1c4c8e",
    borderRadius: 24,
    marginLeft: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  buttonDepanne: {
    backgroundColor: "#fc0000",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 36,
    alignSelf: "center",
    marginVertical: 24,
  },
  buttonText2: {
    color: "#254b8c",
    fontSize: 14,
    fontWeight: "500",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  buttonspace: {
    padding: 10,
    backgroundColor: "#e4e9f5",
    borderRadius: 12,
    width: "30%",
    alignItems: "center",
  },
  titleContainer: {
    marginHorizontal: 16,
    marginTop: 24,
  },
  titleText: {
    fontSize: 37,
    fontWeight: "bold",
    color: "#1c4c8e",
   left: 80,
   top: 20
  },
  content: {
    fontSize: 16,
    color: "#707070",
    left: 80,
  },
});

export default Home;
