import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

interface AdvancedTabsProps {
  tabNames: string[];
}

const AdvancedTabs: React.FC<AdvancedTabsProps> = ({ tabNames }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      data={tabNames}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === index && styles.activeTab
          ]}
          onPress={() => setActiveTab(index)}
        >
          <Text style={[styles.tabText, activeTab === index && styles.activeTabText]}>
            {item}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  tab: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
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

export default AdvancedTabs;