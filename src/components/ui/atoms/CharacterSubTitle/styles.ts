import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const SubTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.card};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

