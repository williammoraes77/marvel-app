import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity.attrs({})`
  width: ${RFValue(112)}px;
  height: ${RFValue(156)}px;
  border-radius: ${RFValue(16)}px;
  background-color: ${({ theme }) => theme.colors.card};
  padding: ${RFValue(9)}px;
  justify-content: space-around;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.title};
`;

