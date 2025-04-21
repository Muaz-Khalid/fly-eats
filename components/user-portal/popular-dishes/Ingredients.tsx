import { SIZES } from '@/constants/Sizes';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useTheme } from 'styled-components';
import { useState } from 'react';

interface Ingredients {
    id: string;
    name: string;
    price: number;
}

const Ingredients = ({ ingredients }: { ingredients: Ingredients[] }) => {
    const theme = useTheme();
    const [selectedIngredient, setSelectedIngredient] = useState<number | null>(
        null
    );
    const styles = StyleSheet.create({
        container: {},
        title: {
            fontFamily: 'Poppins-Bold',
            fontSize: 16,
        },
        ingredient: {
            fontFamily: 'Poppins-Regular',
            fontSize: SIZES.base,
            color: theme.colors.red.primary,
        },
        ingredientContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 3,
            alignItems: 'center',
        },
        dottedLine: {
            flex: 1,
            height: 1,
            borderWidth: 1,
            borderColor: theme.colors.red.primary,
            marginHorizontal: 5,
            borderStyle: 'dashed',
            opacity: 0.5,
        },
        radioButton: {
            height: 18,
            width: 18,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: theme.colors.red.primary,
            alignItems: 'center',
            justifyContent: 'center',
        },
        radioButtonSelected: {
            borderColor: theme.colors.red.primary,
        },
        radioButtonInner: {
            height: 9,
            width: 9,
            borderRadius: 5,
            backgroundColor: theme.colors.red.primary,
        },
    });
    return (
        <View>
            <Text style={styles.title}>Add on ingredients</Text>
            {ingredients.map((ingredient, index) => (
                <View key={index} style={styles.ingredientContainer}>
                    <Text>{ingredient.name}</Text>
                    <View style={styles.dottedLine} />
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 5,
                        }}
                    >
                        <Text>¥ {ingredient.price.toFixed(2)}</Text>
                        <Pressable
                            onPress={() => setSelectedIngredient(index)}
                            style={[
                                styles.radioButton,
                                selectedIngredient === index &&
                                    styles.radioButtonSelected,
                            ]}
                        >
                            {selectedIngredient === index && (
                                <View style={styles.radioButtonInner} />
                            )}
                        </Pressable>
                    </View>
                </View>
            ))}
        </View>
    );
};

export default Ingredients;
