import React from 'react';
import { ScrollView } from 'react-native';
import NewsBlock from './NewsBlock'; // Assurez-vous que le fichier NewsBlock est bien importé et accessible

// Données pour les actualités
const newsData = [
  {
    title: "L'impact des technologies vertes en 2024",
    subtitle: "Énergies renouvelables",
    summary: "Les énergies renouvelables prennent de plus en plus d'importance dans la lutte contre le réchauffement climatique. Découvrez les nouvelles technologies...",
    imageUrl: "https://images.unsplash.com/photo-1518314916381-77a37c2a49ae", // Green tech example
  },
  {
    title: "L'évolution de l'Intelligence Artificielle",
    subtitle: "Technologie",
    summary: "L'IA continue de bouleverser de nombreux secteurs en 2024, avec des progrès majeurs dans l'automatisation et la santé...",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d", // AI example
  },
  {
    title: "La blockchain au service de la finance",
    subtitle: "Finance et Technologie",
    summary: "La blockchain continue de transformer les systèmes financiers mondiaux en offrant plus de transparence et de sécurité...",
    imageUrl: "https://images.unsplash.com/photo-1518314916381-77a37c2a49ae", // Blockchain example
  },
];


const Info = () => {
  return (
    <ScrollView style={{ padding: 20 }}>
      {newsData.map((newsItem, index) => (
        <NewsBlock
          key={index}
          title={newsItem.title}
          subtitle={newsItem.subtitle}
          summary={newsItem.summary}
          imageUrl={newsItem.imageUrl}
          onReadMore={() => console.log(`Lire la suite: ${newsItem.title}`)}
        />
      ))}
    </ScrollView>
  );
};

export default Info;
