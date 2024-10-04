import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

interface NewsBlockProps {
  title: string;
  subtitle: string;
  summary: string;
  imageUrl: string;
  onReadMore: () => void;
}

const NewsBlock: React.FC<NewsBlockProps> = ({ title, subtitle, summary, imageUrl, onReadMore }) => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withSpring(scale.value) }],
    };
  });

  return (
    <Animated.View
      style={[styles.newsContainer, animatedStyle]}
      onTouchStart={() => { scale.value = 0.95; }}
      onTouchEnd={() => { scale.value = 1; }}
    >
      <Image
        source={{ uri: imageUrl }}
        style={styles.newsImage}
        resizeMode="cover"
      />
      <View style={styles.newsContent}>
        <Text style={styles.newsTitle}>{title}</Text>
        <Text style={styles.newsSubtitle}>{subtitle}</Text>
        <Text style={styles.newsSummary}>{summary}</Text>
        <TouchableOpacity onPress={onReadMore} style={styles.readMoreButton}>
          <Text style={styles.readMoreText}>Lire la suite</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  newsContainer: {
    backgroundColor: '#f9f9f9',
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 20,
  },
  newsImage: {
    width: '100%',
    height: 180,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  newsContent: {
    padding: 20,
  },
  newsTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    marginBottom: 5,
    fontFamily: 'Montserrat', // Application de la police Montserrat
  },
  newsSubtitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#555',
    marginBottom: 10,
    fontFamily: 'Montserrat', // Application de la police Montserrat
  },
  newsSummary: {
    fontSize: 14,
    lineHeight: 22,
    color: '#666',
    marginBottom: 15,
    fontFamily: 'Montserrat', // Application de la police Montserrat
  },
  readMoreButton: {
    backgroundColor: '#254b8c',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    alignSelf: 'flex-start', // Bouton aligné à gauche
    shadowColor: '#254b8c',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 3,
  },
  readMoreText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Montserrat', // Application de la police Montserrat
  },
});

export default NewsBlock;
