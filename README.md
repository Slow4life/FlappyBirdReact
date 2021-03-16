Game Engine Tutorial

Our game engine holds all functions needed for the game loop to run any given game conforming to our specific game engine. The game loop, which is defined outside the game engine, repeatedly calls any function needed for the game to run. It does so until the game engine returns a true collision Boolean, at which point the loop ends, and the developer of the given game either decided to completely terminate the game or to restart the loop, thus restarting the game. The game engine itself covers three elements of game design:
1.	Physics (including player and environment physics), which manipulates HTML elements within the DOM.
2.	Audio. Allows for loading, playing, as well as stopping of sounds. Takes string as argument. 
3.	Collision. Returns a Boolean, which is either true or false, based on whether the player element collides with any other element in the DOM.
4.	Point system. The updateHUD take care of this for you, althought you have to create corresponding tsx elements.

In order to create game objects, one needs to use react components with the “tsx” extensions. All HTML tags need added IDs, since all DOM elements are requested using “getElementById()”. The game loop needs a function that holds all required game engine functions calls. Also, the game needs to invoke a setInterval containing all wanted function calls, thus creating the loop. Whenever the loop breaks, one needs to call an initializer function, so that every element returns to its starting location. In order for the game audio inclusion to function, one has to load the needed sounds into the game (using the audioManager class), which the game then executes whenever needed.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
