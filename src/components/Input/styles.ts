import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  height: ${RFValue(50)}px;
  width: 100%;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.card};
  border-radius: ${RFValue(16)}px;
  flex-direction: row;
  padding: 0 ${RFValue(17)}px;
  align-items: center;
`;

export const TxtInput = styled.TextInput`
  width: 93%;
  height: ${RFValue(40)}px;
  color: ${({ theme }) => theme.colors.card};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Button = styled.TouchableOpacity`
  margin-left: ${RFValue(5)}px;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.card};
`;
