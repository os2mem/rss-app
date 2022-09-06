# Description

Basic RSS reader challenge

## Start project

`yarn install`

**IOS**
`npx pod-install`
`yarn ios`

**Android**
`yarn android`

## Folder structure

### src/

- **components:** reusable components
- **screens:** here will be the main components used by the navigation
- **state:** in this folder resides the state management configuration and hooks for the app. The idea is the app doesn't know about the library used, in this way we could change the library without need to change the imports in the app.
- **i18n:** here will be the configuration needed for app internationalization
- **utils:** reusable logic across the app.
- **navigation:** the navigation config of the app.

## External libraries

- **fast-xml-parser:** it was used to parse XML from the rss to JS Object
- **react-redux:** state manager
- **@reduxjs/toolkit:** toolset for redux. It helped me to create actions and reducers in an easy way.
- **redux-persist:** it was used to persist the app state.
- **@react-native-async-storage/async-storage:** it was used as the storage to persist data through the redux-persist library
- **redux-saga:** it was used as side-effects manager for the app. It helps to separate biz logic and handle async calls for data-fetching.

## Design Patterns

**Hooks pattern:** creating custom hooks to separate and reuse logic across components.
**Provider pattern:** It is compuse by a Provider component that wraps the app and passes data down the components. It is commonly used to share global data.
