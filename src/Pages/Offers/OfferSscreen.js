import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, Button, StatusBar, SafeAreaView } from 'react-native';

const offers = [
    {
        title: '50% Off on Electronics',
        description: 'Grab this amazing offer for all electronic items.',
        price: '$500',
        image: 'https://reqres.in/img/faces/8-image.jpg',
    },
    {
        title: 'Shivam',
        description: 'Exclusive offer on clothing items. Limited time only!',
        price: '$100',
        image: 'https://reqres.in/img/faces/8-image.jpg',
    },
    {
        title: 'Buy 1',
        description: 'Exclusive offer on clothing items. Limited time only!',
        price: '$100',
        image: 'https://reqres.in/img/faces/8-image.jpg',
    },
    {
        title: 'Raju singh',
        description: 'Exclusive offer on clothing items. Limited time only!',
        price: '$100',
        image: 'https://reqres.in/img/faces/8-image.jpg',
    }
    // Add more offers as needed
];

function OfferSscreen() {

    return (
        <ScrollView style={styles.container}>
            {offers.map((offer, index) => ( 
                <View key={index} style={styles.offerCard}>
                    <Image
                        style={styles.offerImage}
                        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
                        
                    />
                    
                    <View style={styles.offerContent}>
                        <Text style={styles.offerTitle}>{offer.title}</Text>
                        <Text style={styles.offerDescription}>{offer.description}</Text>
                        <Text style={styles.offerPrice}>{offer.price}</Text>
                        <Button title="Claim Offer" onPress={() => alert(`Claimed: ${offer.title}`)} />
                    </View>
                </View>
            ))}
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f5f5f5',
    },
    offerCard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
    },
    offerImage: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        backgroundColor:"pink",
    },
    offerContent: {
        marginTop: 10,
    },
    offerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    offerDescription: {
        fontSize: 14,
        color: '#555',
        marginBottom: 10,
    },
    offerPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#28a745',
    },
});

export default OfferSscreen;