import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Button, Text } from "./style";

interface Props extends RectButtonProps {
  title: string;
}

export function SignInSocialButton({ title, ...rest }: Props) {
  return (
    <Button {...rest}>
      <Text>{title}</Text>
    </Button>
  );
}
