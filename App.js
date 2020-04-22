import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";

export default function App() {
    const [people, setPeople] = useState([
        { name: "Maxime", id: "1" },
        { name: "Louise", id: "2" },
        { name: "Noëlla", id: "3" },
        { name: "Anthony", id: "4" },
        { name: "Olivier", id: "5" },
        { name: "Catherine", id: "6" },
    ]);

    const pressHandler = (id) => {
        console.log(id);
        setPeople((prevPeople) => {
            return prevPeople.filter((person) => person.id != id);
        });
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={people}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => pressHandler(item.id)}>
                        <Text style={styles.item}>{item.name}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
                numColumns={2}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 40,
        paddingHorizontal: 20,
    },
    item: {
        marginTop: 24,
        padding: 30,
        backgroundColor: "green",
        fontSize: 24,
        marginHorizontal: 10,
        marginTop: 24,
    },
});
