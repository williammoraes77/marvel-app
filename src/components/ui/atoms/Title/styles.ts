import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.title};
`;
