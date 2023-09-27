import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { Home } from "./Home";
import { Chat } from "./Chat";

const Stack = createNativeStackNavigator();

function App() {
  const ui = (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ title: "Create New Account" }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          option={{ title: "Sign In" }}
        />
        <Stack.Screen name="Home" component={Home} option={{ title: "Home" }} />
        <Stack.Screen
          name="Chat"
          component={Chat}
          option={{ title: "View Chats" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
  return ui;
}

export default App;
