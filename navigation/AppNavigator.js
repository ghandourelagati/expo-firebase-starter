import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginScreen from './../screens/auth/LoginScreen';
import SignupScreen from './../screens/auth/SignupScreen';
import ForgotPasswordScreen from './../screens/auth/ForgotPasswordScreen';

const AppNavigator = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Login: { screen: LoginScreen },
  Signup: { screen: SignupScreen },
  ForgotPassword: { screen: ForgotPasswordScreen },
  Main: { screen: MainTabNavigator },
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;