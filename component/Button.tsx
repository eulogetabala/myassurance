import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import COLORS from '../constants/colors';

const Button = (props: any) => {
  const filledBgColor = props.color || COLORS.claire; // Change ici pour que la couleur par défaut soit correcte
  const outlinedColor = COLORS.blanc; // Ou couleur par défaut pour le style outlined
  const bgColor = props.filled ? filledBgColor : outlinedColor;
  const textColor = props.filled ? COLORS.blanc : COLORS.claire; // Ajuste pour les couleurs

  return (
    <TouchableOpacity
      style={[
        styles.button,
        props.style, // Applique le style externe
        { backgroundColor: bgColor }, // Applique la couleur de fond
      ]}
      onPress={props.onPress}
    >
      <Text style={{ fontSize: 18, color: textColor }}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 16, // Ajout de padding horizontal pour un meilleur rendu
    borderColor: COLORS.bleu, // Utilise la bonne couleur pour la bordure
    borderWidth: 1,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Button;
