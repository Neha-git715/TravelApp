import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const App = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleShare = () => {
    const memoryDetails = {
      location: 'Paris, France',
      date: 'April 06, 2025',
      note: 'I feel (Eiffel) towery around you :)) ',
      author: 'Neha Gade'
    };
    console.log('Sharing Travel Memory:', memoryDetails);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.authorName}>Neha Gade</Text>
        
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a' }}
            style={styles.image}
            resizeMode="cover"
          />
          
          <View style={styles.contentContainer}>
            <View style={styles.headerContainer}>
              <Text style={styles.location}>Paris, France</Text>
              <Text style={styles.date}>April 06, 2025</Text>
            </View>
            
            <Text style={styles.note}>
              I feel (Eiffel) towery around you :)) .Explored the magnificent Eiffel Tower at sunset. The golden light painted the city in magical hues, creating an unforgettable moment in the heart of Paris.
            </Text>
            
            <View style={styles.actions}>
              <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
                <Icon 
                  name={isLiked ? 'favorite' : 'favorite-border'} 
                  size={24} 
                  color={isLiked ? '#ff0000' : '#666'}
                />
              </TouchableOpacity>
              
              <TouchableOpacity onPress={handleShare}>
                <Icon name="share" size={24} color="#666" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    padding: 16,
  },
  authorName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a73e8',
    textAlign: 'center',
    marginBottom: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 24,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 300,
  },
  contentContainer: {
    padding: 24,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  location: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
  note: {
    fontSize: 16,
    color: '#444',
    lineHeight: 24,
    marginBottom: 16,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
});

export default App;