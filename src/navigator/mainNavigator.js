import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen713932Navigator from '../features/BlankScreen713932/navigator';
import BlankScreen613931Navigator from '../features/BlankScreen613931/navigator';
import BlankScreen513930Navigator from '../features/BlankScreen513930/navigator';
import BlankScreen413929Navigator from '../features/BlankScreen413929/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen713932: { screen: BlankScreen713932Navigator },
BlankScreen613931: { screen: BlankScreen613931Navigator },
BlankScreen513930: { screen: BlankScreen513930Navigator },
BlankScreen413929: { screen: BlankScreen413929Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
