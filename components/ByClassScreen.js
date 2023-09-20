import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function ByClassScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly', backgroundColor:'lavenderblush' }}>
        <Button color="lightcoral" 
          title="Gen Chem"
          onPress={() => navigation.navigate('GenChem')}
        />
        <Button color="lightcoral" 
          title="Orgo I"
          onPress={() => navigation.navigate('OrgoI')}
        />
        <Button color="lightcoral" 
          title="Orgo II"
          onPress={() => navigation.navigate('OrgoII')}
        />
        <Button color="lightcoral" 
          title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }

  export default ByClassScreen;