# WORKING ON THE PROJECT:

Everytime you start your work, pull the project in your system first, then start making changes to it. Do not make changes to your locally available code but rather to the one most recently pulled into your system.

1. Any file you create, keep its name as descriptive and accurate to its job as possible.
2. Follow a well structured folder pattern to segregate your files according to their job. You can follow this short video to understand about the organizing the folder structure in react. We will try to follow the intermediate level. https://youtu.be/UUga4-z7b6s?t=230
3. Whenever you feel a particular piece of code is not self explanatory or is important wrt other branches of the project, add comments explaining the same.
4. Keep the code well formatted
5. You don't have to handle the hosting part, host it locally on your system for development.
6. Avoid memory leaks(this occurs when using hooks).
7. `Make the app dynamic at each point of development. Ex: If we require to display some info that will actually be fetched from database and then displayed, simulate the same by creating .json files in the database folder(in client side only) and make CRUD operations accordingly. If you need help creating such files, DM me. It'll greatly help us while working on the backend. Do not hardcode the html files with remote information.`
8. For a particular component(or page), include its css in its own css file. Eg: if there's home.jsx, create home.css in the same folder that will serve for css of the home page(similarly for any component).
9. Use the font and color exactly that in the figma file. Take the spacing measurements from figma file only, and keep it exact in development.
10. The web app must be responsive to screen width, so ping me or abhishek in case of alignment issues in different screen widths.
11. If at time you have to create your own custom hooks, create a hooks folder and place all your custom hooks inside(I haven't created it as I don't think we will need this).
12. Make the css file corresponding to a particular component/page in that folder only and name it 'name.module.css' (to import it as module(avoids css clashes)). DO NOT BUNDLE UP THE ENTIRE CSS IN INDEX.CSS OR APP.CSS

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


