import React from 'react'
import { Text, View , StyleSheet } from 'react-native'

interface TagsProps {
    tags: string[]
}

const Tags = ( props: TagsProps) => {
    
    const styles= StyleSheet.create({
        container: {
            flexDirection: 'row',
            gap: 10,
            flex: 1,
        },
        box:{
            backgroundColor: 'rgba(255, 0, 0, 0.1)',
            borderRadius: 10,
            padding: 10,
        },
        text:{
            color: 'red',
            fontSize: 12,
        }

    })
  return (
    <View style={styles.container}>
        {props.tags.map((tag, index) => (
            <View style={styles.box} key={index}>
                <Text style={styles.text}>{tag}</Text>
            </View>
        ))}
        {/* <View style={styles.box}>
        <Text style={styles.text}>{props.tags}</Text> */}
        {/* </View> */}
    </View>
  )
}

export default Tags