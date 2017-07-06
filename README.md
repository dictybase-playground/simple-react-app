# React + Redux + styled-components App

The previous `Redux` [project](https://github.com/dictybase-playground/simple-react-app/tree/feature/idiomatic-redux)
in now styled with [styled-components](https://github.com/styled-components/styled-components).

## Learning styled-components
* **[Official documentation](https://www.styled-components.com/docs)** - Start from the basics and move to advanced if neccessary.
* **[Styled components example/tutorial](https://medium.com/@lvarayut/styled-components-in-action-723852f2a93d)** - A decent example based tutorial.
* **[Built with
  styled-components](https://github.com/styled-components/styled-components#built-with-styled-components)**
  - 3rd party libraries built with styled-components, gives some general idea
  how it is being used, reading the source codes of some of the
  [boilerplates](https://github.com/styled-components/styled-components#boilerplates)
  might be useful.
* **[Grid with styled-components](http://jxnblk.com/grid-styled/)** - `styled-components` based grid system which we will be using at dictyBase. 

## Consistent code formatting
Install [prettier](https://github.com/prettier/prettier) either globally or
locally to format all codes. 

### ESLint
Configure or create `.eslintrc` with the following basic
configuration,

```
{
  "extends": ["prettier"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```
Read [here](https://github.com/prettier/prettier#eslint) for installing
required modules or any more additional information.

### Editor integration
`prettier` must be integrated with your editor. Read
[here](https://github.com/prettier/prettier#editor-integration) for information
on how to set it up with your editor of choice.

### Prettier format options at dictyBase
Default values are used for format
[options](https://github.com/prettier/prettier#options) that are not mentioned
here.

* **Semicolons** - `false`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

