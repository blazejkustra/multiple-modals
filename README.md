# React Native Modal Bug Demo

This app demonstrates a bug with nested React Native modals.

## 🧪 Steps to Reproduce

1. Open Modal 1 → then Modal 2 → then Modal 3.
2. Modal 3 does **not appear**.
3. After closing Modal 2 and 1, the app becomes **unresponsive**.

## 📹 Demo

See a screen recording of the issue:

![bug](bug.mp4)

## 🔧 Run the App

First, make sure you install dependencies with:

```bash
cd ios && bundle install && bundle exec pod install
```

Then you can run the iOS app with:

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```