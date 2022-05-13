import styled, {css} from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace } from 'react-native-iphone-x-helper';

interface NavProps {
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;
  padding: ${RFValue(19)}px ${RFValue(23)}px;
  padding-bottom: ${getBottomSpace()}px;
  justify-content: space-between;
`;

export const ImageContent = styled.View`
  flex: 3;
  border-radius: ${RFValue(2)}px;
  align-items: center;
  justify-content: center;
`;
export const ImageData = styled.Image`
  width: 300px;
  height: 300px;
  border-radius: 50px;

`;
export const FooterContent = styled.View`
  flex: 2;
`;

export const CharacterTitleContent = styled.View`
  margin-bottom: ${RFValue(22)}px;
`;

export const LineDivisionContent = styled.View`
  margin-bottom: ${RFValue(22)}px;
`;

export const CharacterSubTitleContent = styled.View`
  flex-direction: row;
  margin-bottom: ${RFValue(22)}px;
`;


export const NavOptions = styled.View`
  width: 100%;
  flex-direction: row;
  padding: ${RFValue(5)}px ${RFValue(5)}px;
  margin-bottom: ${RFValue(0)}px;
`;

export const WrapperNavOptions = styled.TouchableOpacity<NavProps>`
  margin-right: ${RFValue(20)}px;
  ${({selected}) =>
    selected &&
    css`
      color: red;
      border-bottom-width: ${RFValue(2)}px;
      border-bottom-color: ${({theme}) => theme.colors.card};
      padding-bottom: ${RFValue(10)}px;
    `}
`;

export const OptionNav = styled.Text<NavProps>`
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.card};
  font-size: ${RFValue(15)}px;
  ${({selected}) =>
    selected &&
    css`
      color: ${({theme}) => theme.colors.card};
    `}
`;

