import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { FlatList } from 'react-native';
import { ItemProps } from '.';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled(FlatList as new () => FlatList<ItemProps>).attrs({
  showsVerticalScrollIndicator: false,

})`
/* padding: 0 ${RFValue(25)}px ${getBottomSpace()}px ${RFValue(25)}px; */
`;

export const Separator = styled.View`
  margin: ${RFValue(10)}px 0;
`;

export const ModalContent = styled.View`
  background-color: #000;
  border-top-left-radius: ${RFValue(20)}px;
  border-top-right-radius: ${RFValue(20)}px;
`;
