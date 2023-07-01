import React from 'react';
import {View, Text, Button} from 'react-native';
import {StackRootParams} from '../navigation/Root';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

interface Props
  extends NativeStackScreenProps<StackRootParams, 'SettingsScreen'> {}

export const SettingsScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View>
      <Text style={{fontWeight: 'bold', color: '#000', fontSize: 24}}>
        Hola, soy la pantalla SettingsScreen
      </Text>
      <Button
        title="Ir a HomeScreen"
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}
      />
    </View>
  );
};
