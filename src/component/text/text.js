import { View, Text as RNText, StyleSheet } from 'react-native'
import React from 'react'
import { presets } from './text.presets'

export default function Text({ children, preset = 'default', style }) {
    const textStyle = StyleSheet.compose(presets[preset], style)
    return (
        <View>
            <RNText style={textStyle}>{children}</RNText>
        </View>
    )
}