import {React} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EmployeeViewAll from './EmployeeViewAll';

const Stack = createNativeStackNavigator();

const MenuEmployees = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="EmployeeViewAll"
          component={EmployeeViewAll}
          options={{
            title: 'View All Emploees',
            headerStyle: {backgroundColor: '#24efd2'},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MenuEmployees;
