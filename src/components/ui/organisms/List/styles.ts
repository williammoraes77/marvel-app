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

export const ContainerSmall = styled(FlatList as new () => FlatList<ItemProps>).attrs({
  showsVerticalScrollIndicator: false,
  columnWrapperStyle: { justifyContent: 'space-between' },
})`
  flex: 1;
`;

export const Separator = styled.View`
  margin: ${RFValue(10)}px 0;
`;

export const ModalContent = styled.View`
  background-color: #000;
  border-top-left-radius: ${RFValue(20)}px;
  border-top-right-radius: ${RFValue(20)}px;
`;

export const Paginate = styled.View`
  /* position: absolute;
  bottom: ${RFValue(0)}px; */
  margin-top: ${RFValue(20)}px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.card};
`;

export const FirstButton = styled.TouchableOpacity`
  width: ${RFValue(20)}px;
  height: ${RFValue(20)}px;
  border-radius: ${RFValue(10)}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const FirstButtonText = styled.Text``;
