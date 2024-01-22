import { View, Text, StyleSheet, Button } from 'react-native'

export const Contacts = ({ navigation }) => {
    return <View style={styles.container}>
        <Text>Estoy en contact, hola ya me infiltre soy el desarrollador 1</Text>
        <Button
            title='HOME'
            onPress={() => {
                navigation.navigate('HomeNav');
            }}
        />
    </View>

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
