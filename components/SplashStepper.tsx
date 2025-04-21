import { Image, StyleSheet, Text, View } from 'react-native';
import useSplashStepper from '@/hooks/useSplashStepper';
import React from 'react';
import Button from './ui/Button';
import { SIZES } from '@/constants/Sizes';

const SplashStepper = () => {
    const { theme, currentStep, setCurrentStep } = useSplashStepper();

    const styles = StyleSheet.create({
        container: {
            justifyContent: 'space-between',
            alignItems: 'center',
            flexShrink: 1,
            gap: SIZES['6xl'],
        },
        title: {
            fontSize: SIZES['3xl'],
            textAlign: 'center',
            fontFamily: 'Poppins-Bold',
        },
        description: {
            textAlign: 'center',
            fontFamily: 'Poppins-Regular',
            fontSize: SIZES.base,
        },
        main: {
            alignItems: 'center',
            gap: SIZES.xl,
        },
        textSection: {
            gap: SIZES.xl,
            alignItems: 'center',
        },
        step: {
            flexDirection: 'row',
            gap: SIZES.m,
        },
        image: {
            width: 200,
            height: 200,
            objectFit: 'contain',
        },
    });

    const renderStep = () => {
        switch (currentStep) {
            case 0:
                return (
                    <>
                        <View style={styles.main}>
                            <Image
                                source={require('@/assets/images/splashstepper_one.png')}
                                style={styles.image}
                            />

                            <View style={styles.textSection}>
                                <View style={styles.step}>
                                    {[0, 1, 2].map((step) => (
                                        <View
                                            key={step}
                                            style={{
                                                backgroundColor:
                                                    step === currentStep
                                                        ? theme.colors.red
                                                              .primary
                                                        : theme.colors.gray.box,
                                                width:
                                                    step === currentStep
                                                        ? SIZES['2xl']
                                                        : SIZES.l,
                                                height: SIZES.l,
                                                borderRadius: SIZES.l,
                                            }}
                                        />
                                    ))}
                                </View>
                                <Text style={styles.title}>
                                    Grow Your Business with Ease
                                </Text>
                                <Text style={styles.description}>
                                    From managing orders to tracking sales
                                    insights and promoting specials, GoEats
                                    gives you everything you need to streamline
                                    your restaurant and boost visibility.
                                </Text>
                            </View>
                        </View>
                        <Button
                            title="Get Started "
                            onPress={() => setCurrentStep(1)}
                            varient="primary"
                        />
                    </>
                );
            case 1:
                return (
                    <>
                        <View style={styles.main}>
                            <Image
                                source={require('@/assets/images/splashstepper_two.png')}
                                style={styles.image}
                            />
                            <View style={styles.textSection}>
                                <View style={styles.step}>
                                    {[0, 1, 2].map((step) => (
                                        <View
                                            key={step}
                                            style={{
                                                backgroundColor:
                                                    step === currentStep
                                                        ? theme.colors.red
                                                              .primary
                                                        : theme.colors.gray.box,
                                                width:
                                                    step === currentStep
                                                        ? SIZES['2xl']
                                                        : SIZES.l,
                                                height: SIZES.l,
                                                borderRadius: SIZES.l,
                                            }}
                                        />
                                    ))}
                                </View>
                                <Text style={styles.title}>
                                    Satisfy Your Cravings, Your Way
                                </Text>
                                <Text style={styles.description}>
                                    Order from multiple restaurants, track your
                                    delivery in real time, and enjoy flexible
                                    payment options—all in one app!
                                </Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', gap: 16 }}>
                            <Button
                                title="Skip"
                                href="user-portal"
                                routerAction="replace"
                                varient="secondary"
                            />
                            <Button
                                title="Next"
                                onPress={() => setCurrentStep(2)}
                                varient="primary"
                            />
                        </View>
                    </>
                );
            case 2:
                return (
                    <>
                        <View style={styles.main}>
                            <Image
                                source={require('@/assets/images/splashstepper_three.png')}
                                style={styles.image}
                            />
                            <View style={styles.textSection}>
                                <View style={styles.step}>
                                    {[0, 1, 2].map((step) => (
                                        <View
                                            key={step}
                                            style={{
                                                backgroundColor:
                                                    step === currentStep
                                                        ? theme.colors.red
                                                              .primary
                                                        : theme.colors.gray.box,
                                                width:
                                                    step === currentStep
                                                        ? SIZES['2xl']
                                                        : SIZES.l,
                                                height: SIZES.l,
                                                borderRadius: SIZES.l,
                                            }}
                                        />
                                    ))}
                                </View>
                                <Text style={styles.title}>
                                    Deliver with Efficiency and Earn More
                                </Text>
                                <Text style={styles.description}>
                                    Take advantage of optimized routes,
                                    real-time tracking, and flexible scheduling.
                                    With GoEats, delivering food is faster,
                                    easier, and more rewarding.
                                </Text>
                            </View>
                        </View>
                        <Button
                            title="Sign In"
                            href="auth/signin"
                            routerAction="replace"
                            varient="primary"
                        />
                    </>
                );
            default:
                return null;
        }
    };

    return <View style={styles.container}>{renderStep()}</View>;
};

export default SplashStepper;
