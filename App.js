import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function App() {
    const [people, setPeople] = useState([
        { name: "Maxime", key: "1" },
        { name: "Louise", key: "2" },
        { name: "Noëlla", key: "3" },
        { name: "Anthony", key: "4" },
        { name: "Olivier", key: "5" },
        { name: "Catherine", key: "6" },
    ]);

    return (
        <View style={styles.container}>
            <FlatList
                data={people}
                renderItem={(item) => {
                    return <Text style={styles.item}>name:{item.name}</Text>;
                }}
            />
            {/* <ScrollView>
                {people.map((item) => (
                    <View key={item.key}>
                        <Text style={styles.item}>{item.name}</Text>
                    </View>
                ))}
            </ScrollView> */}
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
        padding: 60,
        backgroundColor: "green",
        fontSize: 24,
    },
});
