import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import { useTheme } from 'styled-components';

interface AdvancedTabSizeProps {
    size: string[];
}
const Sizes: React.FC<AdvancedTabSizeProps> = ({ size }) => {
    const [activeTab, setActiveTab] = useState<number>(0);

    const theme = useTheme();

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            
        },
        tab: {
            borderRadius: 999,
            backgroundColor: 'rgba(110, 105, 105, 0.3)',
            height: 50,
            width: 50,
            alignItems: 'center',
            justifyContent: 'center',
        },
        tabText: {
            fontWeight: 'bold',
        },
        activeTab: {
            backgroundColor: 'red',
            borderColor: 'red',
        },
        activeTabText: {
            color: 'white',
        },
    });
    return (
        <View style={styles.container}>
            <Text>Size: </Text>
            {size.map((item, index) => (
                    <TouchableOpacity
                    key={index}
                        style={[
                            styles.tab,
                            activeTab === index && styles.activeTab,
                        ]}
                        onPress={() => setActiveTab(index)}
                    >
                        <Text
                            style={[
                                styles.tabText,
                                activeTab === index && styles.activeTabText,
                            ]}
                        >
                            {item}
                        </Text>
                    </TouchableOpacity>
            ))}
        </View>
    );
};

export default Sizes;
