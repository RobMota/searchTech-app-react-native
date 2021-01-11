import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Techs from "./pages/Tech";
import TechDetails from "./pages/TechDetails";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={Techs}
          name="Techs"
          options={{
            headerTitleAlign: "center",
            title: "Techs",
          }}
        />

        <Stack.Screen
          component={TechDetails}
          name="TechDetails"
          options={{
            headerTitleAlign: "TechDetails",
            title: "Techs",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
