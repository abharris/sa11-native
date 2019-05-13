import React from 'react';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
// import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import SearchTab from './search_tab';
import About from '../components/about';


// const AboutTab = (props) => {
//   return <View style={{ flex: 1, justifyContent: 'center' }}><Text>about</Text></View>;
// };

// const SearchTab = (props) => {
//   return <View style={{ flex: 1, justifyContent: 'center' }}><Text>Search</Text></View>;
// };

const MainTabBar = createBottomTabNavigator(
  {
    SearchTab,
    AboutTab: {
      screen: About,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: 'About',
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name="info-circle"
            size={26}
            color={focused ? '#58AADA' : 'grey'}
          />
        ),
      }),
    },
  },
  {
    initialRouteName: 'SearchTab',
  },
);

// const MainTabBar = createBottomTabNavigator({
//   SearchTab,
//   AboutTab,
// }, {
//   initialRouteName: 'SearchTab',
// });


export default createAppContainer(MainTabBar);
