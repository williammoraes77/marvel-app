import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { FlatList } from 'react-native';

export const Title = styled.Text`
  font-size: ${RFValue(11)}px;
  color: #000;
  font-family: ${({theme}) => theme.fonts.regular};
`;

export const Container = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,

})`
`;
