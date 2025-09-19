declare module 'react-native-vector-icons/MaterialIcons' {
  import { ComponentType } from 'react';
  import { TextProps } from 'react-native';
  const MaterialIcons: ComponentType<
    TextProps & { name: string; size?: number; color?: string }
  >;
  export default MaterialIcons;
}
