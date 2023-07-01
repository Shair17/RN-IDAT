import React from 'react';
import {View, Text, Button} from 'react-native';
import {type NativeStackScreenProps} from '@react-navigation/native-stack';
import {type StackRootParams} from '../navigation/Root';

interface Props extends NativeStackScreenProps<StackRootParams, 'HomeScreen'> {}

export const HomeScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View>
      <Text style={{fontWeight: 'bold', color: '#000', fontSize: 24}}>
        Hola, soy la pantalla HomeScreen
      </Text>
      <Button
        title="Ir a ProfileScreen"
        onPress={() => {
          navigation.navigate('ProfileScreen');
        }}
      />
    </View>
  );
};
