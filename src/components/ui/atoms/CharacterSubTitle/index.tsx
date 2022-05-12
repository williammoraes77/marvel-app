import React from 'react';

import { SubTitle } from './styles';

interface Props {
  subTitle: string;
}

export function CharacterSubTitle({ subTitle }: Props) {
  return <SubTitle>{subTitle}</SubTitle>;
}
