# react-native-tinder-like-swiper
A React Native project

## Requirements


## Project requirement
- [ ] React Native CLI
- [ ] watchman
- [ ] node/npm
- [ ] yarn (optional for package manager)
- [ ] Android studio and packages for Android
- [ ] Xcode for iOS
- [ ] Pod for iOS

## Project setup

1. Clone repo to local drive
2. Use terminal or command prompt and get to project root folder
3. Install project libraries via `npm i` or `yarn`
4. Go to ios folder
5. Install pod files by `pod install`

# Running react-native-tinder-like-swiper
## Running react-native-tinder-like-swiper on iOS Simulator
1. Go to project root folder
2. run `react-native run-ios`
3. Simulator should start and app will install and react packager will launch as well

## Running react-native-tinder-like-swiper on iOS Device
1. Connect device to xcode
2. Make sure device is registered on xcode and dev is enabled
3. Open project workspace from ios folder
4. Select device from Xcode
5. Run on device

## Running react-native-tinder-like-swiper on Android Emulator

* Run `npm start` to run Metro Bundler
* Launch android studio
* Launch an android emulator
* Go to project root folder
* Run `react-native run-android`
* Simulator should start and app will install and react packager will launch as well

## Running react-native-tinder-like-swiper on Android Device
1. Connect device via USB
2. Use terminal and run `adb devices` this will connect your device to the pc
3. Go to project root folder
4. Run `react-native run-android`
5. App will install onto device

## Debugging with Chrome
1. When app is running in debug mode
2. Activate remote js debug via app
3. Chrome will launch, open Console

## Debugging with React Devtools
1. When app is running in debug mode
2. Activate remote js debug via app
3. use react-devtools

## Compiling for iOS
1. Launch Xcode, open project workspace file in ios folder
2. Update build number
3. Archive, when complete organizer will launch showing where the file is
Deployment version must match or be higher than the Zendesk framework deployment version
See https://github.com/mokriya-org/react-native-zendesk for framework setup instructions

## Compiling for Android via Android studio
1. Update version build number
2. Use android studio to open android folder
3. Click on Generate signed apk
4. When built successfuly apk file will be placed in app/build/output/ folder

## Compiling for Android via CLI
5. Update version build number
6. Go to project root folder
7. run `cd android && ./gradlew assembleRelease && cd ..` or `yarn release-android`
8. When built successfuly apk file will be placed in app/build/output/ folder


## Deploy iOS via Hockey


## Deploy Android via Hockey
Login to hockey, select android build, add version, upload apk file

## How to add new app dependancies
1. Locate the dependency, do you really need it?
2. If yes, go to project folder
3. Use `npm i package-name --save` or `yarn add package-name` to install package
4. Majority of packages will use `react-native link package-name` to link the package
5. Some packages might have extra manual setup steps


## FAQ
Do I need to keep my react packager open?
Yup. App built without release mode requires react packager on the same network.

Can I have multiple react packager instance launched?
Nope. Each project can only run 1 instance due to port limitations.

Can I run different projects with a single react packager instance?
Nope. Packager must be in the same folder as the project you are running.

After installing app on device, app wouldn't run after disconnecting USB or network.
When running on device, app isn't installed fully and requires react packager to work.

Android or iOS Build fails
Check build log for errors, common issues are missing dependancies or error in coding.


## Misc tools

## Device window/screen height
592 android pixel
683/731 android pixel xl, nexus 5x, pixel 2
765/823 android pixel xl 2
568 ios se
667 ios 6
736 ios 6+
812 ios x
