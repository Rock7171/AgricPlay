import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import DashboardScreen from './screens/DashboardScreen';
import StoryModeScreen from './screens/StoryModeScreen';
import MarketplaceScreen from './screens/MarketplaceScreen';
import LeaderboardScreen from './screens/LeaderboardScreen';
import CommunityBoardScreen from './screens/CommunityBoardScreen';
import LessonModuleScreen from './screens/LessonModuleScreen';
import ExploreModuleScreen from './screens/ExploreModuleScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }} />
        <Stack.Screen name="StoryMode" component={StoryModeScreen} />
        <Stack.Screen name="Marketplace" component={MarketplaceScreen} />
        <Stack.Screen name="Leaderboard" component={LeaderboardScreen} />
        <Stack.Screen name="CommunityBoard" component={CommunityBoardScreen} />
        <Stack.Screen name="LessonModule" component={LessonModuleScreen} />
        <Stack.Screen name="ExploreModule" component={ExploreModuleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
