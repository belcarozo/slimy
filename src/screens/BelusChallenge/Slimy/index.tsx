import React from 'react'
import { useWindowDimensions, View } from 'react-native'
import Animated, { SharedValue } from 'react-native-reanimated'
import { StyleProps } from 'react-native-reanimated/lib/types/lib/reanimated2/commonTypes'
import useColors from '../../../theme/colors'
import { styles } from '../styles'
import { Eye } from './Eye'
import { Mouth } from './Mouth'
// import Mouth from '../../../assets/mouth.svg'
import { XL } from './XL'

interface SlimyProps {
  eyes: SharedValue<number>
  animatedStyle: StyleProps
  xlimy: SharedValue<number>
  mouth: SharedValue<number>
}

export const Slimy: React.FC<SlimyProps> = ({
  animatedStyle,
  eyes,
  xlimy,
  mouth,
}) => {
  const { width } = useWindowDimensions()
  const { colors } = useColors()

  return (
    <Animated.View
      style={[
        styles.slimy,
        {
          left: (width - 150) / 2,
          backgroundColor: colors.slimy,
        },
        animatedStyle,
      ]}>
      <Eye eyes={eyes} left={20} />
      <Eye eyes={eyes} right={20} />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: 50,
        }}>
        <Mouth mouth={mouth} />
      </View>
      {/* <XL xlimy={xlimy} /> */}
    </Animated.View>
  )
}
