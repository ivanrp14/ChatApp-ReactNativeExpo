import 'dotenv/config';
export default {

  "expo": {
    "name": "ChatApp",
    "slug": "chatapp",
    "version": "1.0.0",
    "extra": {
      "eas": {
        "projectId": "07ff69f0-d61a-492b-991d-4b100bfcdd2b"
      }
    },
    "android": {
      "package": "com.yourname.chatapp",
      "versionCode": 1
    },
    "ios": {
      "bundleIdentifier": "com.yourname.chatapp"
    }
  },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    extra: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID
    }
  }

