import React from 'react';
import { TextInputProps } from 'react-native';
import { Container, TxtInput, Button, Icon } from './styles';

type InputProps = TextInputProps & {
  icon?: string;
  handlePress?: () => void;
};

export function Input({ icon, handlePress, ...rest }: InputProps) {
  return (
    <Container>
      <TxtInput {...rest} />
      {icon && (
        <Button onPress={handlePress}>
          <Icon name={icon} />
        </Button>
      )}
    </Container>
  );
}
