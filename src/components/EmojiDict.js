import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class EmojiDict extends Component {
    state = {
        '😂': '😂 Laugh',
        '😎': '😎 Cool guy',
        '🔥': '🔥 Fire',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.state['😂']}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {    
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

 export default EmojiDict;