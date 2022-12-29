/*
 *    FRAMEWORK
 */
import React from 'react'
/*
 *    STYLES
 */
import { StyleSheet } from 'react-native'
/*
 *    COMPONENTS
 */
import { ActivityIndicator } from 'react-native'
import { View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  indicator: {
    color: '#FFA34E',
  },
})

export interface LoadingIndicatorProps {
  height: number
  width: number
  backgroundColor: string | undefined
  color?: string | undefined
  /**
   * Size of the indicator.
   * Small has a height of 20, large has a height of 36.
   *
   * enum('small', 'large')
   */
  size?: 'small' | 'large' | undefined
}

export const LoadingIndicator = (props: LoadingIndicatorProps) => (
  <View style={[styles.container, props]}>
    <ActivityIndicator size={props.size || 'small'} color={props.color || styles.indicator.color} />
  </View>
)
