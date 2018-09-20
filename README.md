# Github search

## Introduction

Application was created based on `create-react-app`. To build a nice look interface I used `material-ui`. This lib provide something called JSS that is more powerful abstraction over CSS. All application state is persisted in localstorage except of data about logged github profile.
Screenshot:
![screenshot](https://gitlab.com/MateuszJonak/github-search/raw/master/screenshot.png)

## Setup configuration

To provide a authorisation by GitHub OAuth with "Log in with GitHub" button, I used a library called `react-social-login` ([https://github.com/deepakaggarwal7/react-social-login#github-specifics](https://github.com/deepakaggarwal7/react-social-login#github-specifics)). This lib required a deployed instance of application called `Gatekeeper` ([https://github.com/prose/gatekeeper](https://github.com/prose/gatekeeper)) to authorisation user using OAUTH_CLIENT_ID and OAUTH_CLIENT_SECRET. This two values should be provided to application by `.env` variables. Also You should define for which url github should redirect his response. For development I always set this variable to: `http://localhost:3000`.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
