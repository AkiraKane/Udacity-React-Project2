# Would You Rather...

"Would you rather" is a conversation or party game that poses a dilemma in the form of a question beginning with "would you rather". The dilemma can be between two supposedly good options, such as, "Would you rather have the power of flight or the power of invisibility?", two attractive choices such as "Would you rather have money or have fame?", or it can be between two supposedly bad options, for example, "Would you rather sleep with your best friend's lover or your lover's best friend?" The players, sometimes including the questioner, then must choose their answers. Answering "neither" or "both" is against the rules. This leads the players to debate their rationales. [(Wikipedia)](https://en.wikipedia.org/wiki/Would_you_rather)

The user can an username and start to answer other users questions or crete their own questions. There is a ranking which sums the number of questions and answers gave per user.

## About

There are different pages here:

- Home, is it's own component and page `"/home"`
- Login, rendered in `Home` component `"/home"`
- QuestionPage, is it's onw component and page `"/question/:id"`
- LeaderboardPage, is it's own component and page `"/leaderboard"`
- NewQuestion, is it's onw component and page `"/add"`
- NoMatch, is it's own component and page (anything that is not defined above will default here)

Note that for every different page, I will need to create a different url, with exception of Login and Home page given they will share the same and will be the root of my app.   

## Instalation

Clone or fork this repository and install the dependencies running the code below:

```bash
npm install
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
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

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
