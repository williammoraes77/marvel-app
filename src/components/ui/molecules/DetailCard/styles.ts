import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
  width: ${RFValue(70)}px;
`;


export const ImageContainer = styled.View`
  border-radius: ${RFValue(15)}px;
  border: ${RFValue(3)}px solid white;
  width: ${RFValue(70)}px;
  height: ${RFValue(70)}px;
  justify-content: center;
  align-items: center;
`;

export const ThumbContainer = styled.View`
  width: 100%;
  border-radius: ${RFValue(15)}px;
  border: ${RFValue(3)}px solid white;
  width: ${RFValue(170)}px;
  height: ${RFValue(170)}px;
  justify-content: center;
  align-items: center;
  background-color: red;
  align-self: center;
`;

export const ThumbImage = styled.Image`
  border-radius: ${RFValue(15)}px;
  border: ${RFValue(3)}px solid white;
  width: ${RFValue(170)}px;
  height: ${RFValue(170)}px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  margin-top: ${RFValue(5)}px;
 font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.card};
  font-family: ${({theme}) => theme.fonts.bold};
  margin-right: ${RFValue(10)}px;
`;

export const SubTitle = styled.Text`
  margin-top: ${RFValue(5)}px;
 font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.card};
  font-family: ${({theme}) => theme.fonts.bold};
`;

export const ModalContent = styled.View`
  background-color: #000;
  border-top-left-radius: ${RFValue(20)}px;
  border-top-right-radius: ${RFValue(20)}px;
  padding: ${RFValue(20)}px;
`;

export const RowContent = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

