import React from 'react';
import { TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

import { Text } from './styles';

type TextStyle = {
  styles?: TextStyleProp;
};

interface TextProps extends TextStyle {
  title: string;
}

export function Title({ title, styles }: TextProps) {
  return <Text style={styles} numberOfLines={1}>{title}</Text>;
}
