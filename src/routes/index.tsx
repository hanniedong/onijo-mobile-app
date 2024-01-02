import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import OutAppNavigator from "./OutAppNavigator";
import InAppNavigator from "./InAppNavigator";
import useAuth from "../hooks/useAuth";

const RootNavigator: React.FC = function () {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      {!isAuthenticated ? <OutAppNavigator /> : <InAppNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;
