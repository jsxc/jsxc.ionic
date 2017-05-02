
# JavaScript XMPP Client for Android and IOS


Real-time chat app. This app requires an external XMPP server (openfire, ejabberd etc.).

You find a full list of features, supported protocols and browsers on [our homepage](http://www.jsxc.org).

If you are looking for install instructions or developer notes, please also checkout our [wiki](https://github.com/jsxc/jsxc/wiki/).


## To run the application in a browser 
Go into the folder and run this code in a terminal:

```bash
ionic serve
```

## To run the application on Android 

Firstly you need to download the android sdk. An easy way to download it is to get [Android Studio](https://developer.android.com/studio/index.html) and use the sdkmanager to download it.
After you downloaded the SDK you need to add it to your PATH variable.

### PATH variable on linux

```bash
export ANDROID_HOME=/path/to/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/tools
```

Replace  /path/to/Android/Sdk with the actual path. To make it permanent add the lines to you bashrc file.

### PATH variable on windows 

Open control panel  
Then go to System
Then go to Change Environment Variables of the User
Then click create a new environment variables
Create a new variable named ANDROID_HOME
Set its value to your Android directory, like C:/users/<username>/.android

Replace C:/users/<username>/.android with the actual path.

### PATH variable on mac 

Edit /etc/paths and add 

```bash
/Users/username/Libs/Android/sdk/platform-tools
/Users/username/Libs/Android/sdk/tools
```

Replace /Users/username/Libs/Android/sdk with the actual path.

### Run the app on your android phone

Connect your phone to the PC with a USB cable, go to the jsxc.ionic folder and run this code in a terminal

```bash
ionic run android
```

### Run the app on an android emulator

The emulator in android studio is slow so we recomend using [Genymotion](https://www.genymotion.com/)
After you create a device in it and start go to the folder and run this code in a terminal

```bash
ionic run android
```


## To run the application on Android

Coming soon
