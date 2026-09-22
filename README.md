# ChatApp

Aplicación de chat para móvil hecha con **Expo** y **React Native**. Tiene registro, login y una pantalla de conversación.

## Pantallas

| Archivo | Qué es |
| --- | --- |
| `screens/Signup.js` | Alta |
| `screens/Login.js` | Entrada |
| `screens/Home.js` | Home, con botón a la conversación |
| `screens/Chat.js` | Chat (`react-native-gifted-chat`) |

La navegación es un stack (`@react-navigation/stack`) montado desde `App.js`. Los colores comunes están en `colors.js`. Firebase se inicializa en `config/firebase.js`.

## Stack

- Expo SDK 51
- React Native 0.74
- React Navigation 6
- Firebase 10
- AsyncStorage
- react-native-gifted-chat

## Cómo ejecutarlo

```bash
npm install
npx expo start
```

Después, `a` para Android o `i` para iOS (en macOS). También vale:

```bash
npm run android
npm run ios
npm run web
```

Hace falta un proyecto de Firebase (Authentication y el servicio de datos que use `config/firebase.js`) y las claves en el entorno que lee `react-native-dotenv`. No subas esas claves al repositorio.
