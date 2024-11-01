import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import axios from 'axios';

export default function HomeScreen() {
  const [planData, setPlanData] = React.useState();
  const [loading, setLoading] = React.useState(true);

  const fetchPlan = async () => {
    try {
      const getData = await axios.get('https://gym-qjfy.onrender.com/subscription/plan');
      const { plans } = getData.data.data
      setPlanData(plans)
    }
    catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPlan();
    console.log("USEEEFECT?????")
  }, []);

  return (
    <View style={styles.container}>
        <FlatList
          data={planData}
          keyExtractor={(item) => item._id}

          renderItem={({ item }) => (
            <View style={styles.box}>
              <Text style={styles.title}> {item.name} </Text>
              <Text style={styles.description}> {item.description} </Text>
              <Text style={styles.price}>${item.price} for {item.durationDays} days</Text>
              <Text style={styles.featuresTitle}>Features:</Text>
              {item.features.map((feature, index) => (
                <Text key={index} style={styles.feature}>- {feature}</Text>
              ))}
            </View>
          )}
          ListEmptyComponent={<Text>No plans available</Text>}
          ListFooterComponent={<Text style={{fontSize:30,marginBottom:10}}>End of plans</Text>}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  box: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#FeFe',
    borderRadius: 5,
    elevation: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#333',
  },
  description: {
    color: '#666',
    marginVertical: 5,
    fontSize: 16
  },
  price: {
    fontSize: 18,
    color: '#00bfa5',
  },
  featuresTitle: {
    marginTop: 10,
    fontWeight: 'bold',
    color: '#333',
  },
  feature: {
    color: '#444',
    marginLeft: 10,
    fontSize: 16
  },
});
