import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, TextInput, StyleSheet } from 'react-native';

const CartScreen = () => {
    const [step, setStep] = useState(1);

    const handleNext = () => {
        if (step < 3) {
            setStep(step + 1);
        }
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <View style={styles.stepContainer}>
                        <Text style={styles.title}>Order Details</Text>
                        <View style={styles.itemDetails}>
                            <Text>Ramen</Text>
                            <Text>Umi no Hana</Text>
                            <Text>¥100.00</Text>
                        </View>
                        <View style={styles.summary}>
                            <Text>Sub-Total: ¥100</Text>
                            <Text>Delivery Charge: ¥10</Text>
                            <Text>Discount: ¥10</Text>
                            <Text>Total: ¥110</Text>
                        </View>
                        <Button title="Place my order" onPress={handleNext} />
                    </View>
                );
            case 2:
                return (
                    <View style={styles.stepContainer}>
                        <Text style={styles.title}>Address</Text>
                        <TextInput placeholder="Name" style={styles.input} />
                        <TextInput placeholder="Email address" style={styles.input} />
                        <TextInput placeholder="Phone number" style={styles.input} />
                        <TextInput placeholder="Address" style={styles.input} />
                        <TextInput placeholder="Zip code" style={styles.input} />
                        <TextInput placeholder="City" style={styles.input} />
                        <TextInput placeholder="Country" style={styles.input} />
                        <Button title="Next" onPress={handleNext} />
                    </View>
                );
            case 3:
                return (
                    <View style={styles.stepContainer}>
                        <Text style={styles.title}>Payment</Text>
                        <View style={styles.paymentOption}>
                            <Text>Master Card</Text>
                            <Button title="Add" onPress={() => { /* Handle add card */ }} />
                        </View>
                        <View style={styles.paymentOption}>
                            <Text>Paypal</Text>
                            <Button title="Add" onPress={() => { /* Handle add PayPal */ }} />
                        </View>
                        <Button title="Next" onPress={() => { /* Handle order placement */ }} />
                    </View>
                );
            default:
                return null;
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.stepIndicator}>
                <View style={{flex:1, alignItems: 'center'}}>
                    <View style={[styles.step, step >= 1 && styles.completedStep]}>
                        {step > 1 && <Text style={styles.checkmark}>✔</Text>}
                        <Text style={styles.stepText}>1</Text>
                    </View>
                    <Text style={styles.stepLabel}>Order Details</Text>
                </View>
                <View style={[styles.line, step >= 2 && styles.activeLine]} />
                <View style={{flex:1, alignItems: 'center'}}>
                    <View style={[styles.step, step >= 2 && styles.completedStep]}>
                        {step > 2 && <Text style={styles.checkmark}>✔</Text>}
                        <Text style={styles.stepText}>2</Text>
                    </View>
                    <Text style={styles.stepLabel}>Address</Text>
                </View>
                <View style={[styles.line, step >= 3 && styles.activeLine]} />
                <View style={{flex:1, alignItems: 'center'}}>
                    <View style={[styles.step, step === 3 && styles.completedStep]}>
                        {step === 3 && <Text style={styles.checkmark}>✔</Text>}
                        <Text style={styles.stepText}>3</Text>
                    </View>
                    <Text style={styles.stepLabel}>Payment</Text>
                </View>
            </View>
            {renderStep()}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 50,
        paddingHorizontal: 15,
    },
    stepIndicator: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    step: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#ccc',
        backgroundColor: 'white', // Background for the step
    },
    completedStep: {
        borderColor: '#f00', // Color for completed steps
        backgroundColor: '#f00', // Background for completed steps
        color: 'white', // Text color for completed steps
    },
    stepText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    stepLabel: {
        fontSize: 12,
        marginTop: 5,
    },
    line: {
        height: 2,
        backgroundColor: '#ccc',
        flex: 1,
        marginTop: 25, // Adjust for spacing
    },
    activeLine: {
        backgroundColor: '#f00', // Color for active line
    },
    checkmark: {
        color: '#f00', // Color for checkmark
        fontSize: 18,
        position: 'absolute',
        top: -10,
    },
    stepContainer: {
        padding: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    itemDetails: {
        marginBottom: 15,
    },
    summary: {
        marginBottom: 15,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    paymentOption: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
});

export default CartScreen;
