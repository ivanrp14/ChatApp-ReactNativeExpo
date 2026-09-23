# ChatApp

A mobile chat app built with **Expo** and **React Native**. It has sign-up, login, and a conversation screen.

## Screens

| File | What it is |
| --- | --- |
| `screens/Signup.js` | Sign-up |
| `screens/Login.js` | Sign-in |
| `screens/Home.js` | Home, with a button into the conversation |
| `screens/Chat.js` | Chat (`react-native-gifted-chat`) |

Navigation is a stack (`@react-navigation/stack`) mounted from `App.js`. Shared colors are in `colors.js`. Firebase is initialized in `config/firebase.js`.

## Stack

- Expo SDK 51
- React Native 0.74
- React Navigation 6
- Firebase 10
- AsyncStorage
- react-native-gifted-chat

## How to run

```bash
npm install
npx expo start
```

Then press `a` for Android or `i` for iOS (on macOS). These also work:

```bash
npm run android
npm run ios
npm run web
```

You need a Firebase project (Authentication and whichever data service `config/firebase.js` uses) and the keys in the environment read by `react-native-dotenv`. Do not commit those keys.
