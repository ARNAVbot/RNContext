import { createAppContainer} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import React from "react";
import { Provider as BlogProvider } from "./src/context/BlogContext";

const navigator = createStackNavigator({
  Index: IndexScreen,
  Show: ShowScreen,
  Create: CreateScreen,
},{
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blogs'
  }
    });

const App = createAppContainer(navigator);

// the below statement could also be replaced with this
// export default createAppContainer(navigator) .
// the reason we have enwrapped it into a component is bcoz we want to use context.
export default () => {
  return <BlogProvider>
    <App/>
  </BlogProvider>
};