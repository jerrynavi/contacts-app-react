# Introduction to React and Redux - Building a Contacts App

Hi! First things first. I apologize for the long delay. I had to deal with a couple of things, including changing jobs and moving to a new city. 😅 I'll talk about all the interesting things I've been up to in a different blog post. Today, however, is all about React! ⚛

If you've heard me talk about React in the last year or so, you'll know that I ~~have~~ had little love for React. I preached Angular everywhere I went, and for good reasons. But I've had to learn to use React when I resumed at my new job, as that's the primary UI library the company uses for developing web and mobile apps. So I built a simple contacts app while learning about and exploring the React ecosystem.

I'll be providing a walkthrough / documenting my process in this blog post.

---
- Introduction to React
- Integration with TypeScript
- Create-React-App
- "Yeah, but where's the Router?"
- State Management, Lifecycle and etc.
- Redux
- Housekeeping

---

## Introduction to React

React is an open-source JavaScript library for building *reusable* user interfaces developed and maintained by Facebook. It's being used at Facebook and Instagram, both really big companies with really big products, but it also works incredibly well for small web pages and apps.
> React has been designed from the start for gradual adoption, and you can use as little or as much React as you need.

The official docs is a great place to get started learning React as they have a step-by-step guide for those who prefer to learn by doing as well as a guide to the main react concepts for everyone else. React's has a bit of a learning curve but it's easy to get the hang of it with practice and patience, which is the case for every other discipline.

***Note:** React code blocks in this article are written in JSX syntax. Learning JSX is optional, however, and is not required to use React.*

## Integration With TypeScript

Working with JavaScript has been pure joy ever since I discovered TypeScript. TypeScript is a strictly-typed superset of JavaScript. Or, as I love to call it, JavaScript with superpowers.

I was pleased to discover that the TypeScript compiler supports React projects. This project was built using a variant of JSX, TSX.

## Create-React-App

React is an unopinionated framework. This means that there is no one recommended way to use React in a project. Since you're free to decide how you want to use React in your project, it's trivial to plug React into an existing project or start a new project from scratch using React. However, it's also difficult to know where to start if you're a beginner.

Thankfully, the team behind React developed a command line tool that can help one bootstrap a React project (structure) using configurable options or some sensible defaults.

***Spoiler alert:** It's time to write code! If you follow from this point onward, I'm assuming it's because you have some familarity with JavaScript.*

To get started with this tool, make sure you have the latest version of Nodejs installed.

Launch a terminal and run the following command

```bash
node -v
```

You should see `v12.10.0` or `v10.16.3-LTS` or a more recent version.

Now run

```bash
npx create-react-app <APP_NAME> --typescript
```
*Learn more about npx [here](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b)*

That one-liner will generate an initial React project structure and install the required dependencies. Remember to replace `APP_NAME` with your app name.

At this point, you should have a folder structure similar to this one:

```bash
contacts
.
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.css
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── index.tsx
│   ├── logo.svg
│   ├── react-app-env.d.ts
│   └── serviceWorker.ts
└── tsconfig.json
```

You can start the app to ensure that everything is in order by running `npm start` in the project directory.

Nice work so far! However this directory structure is fundamentally wrong and is at odds with everything good, pure and noble in this world.

Just kidding.

We do need to move things around a bit in order to achieve something similar to

```bash
.
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── server.js
├── src
│   ├── index.scss
│   ├── index.tsx
│   ├── interfaces
│   ├── logo.svg
│   ├── pages
│   │   ├── contacts
│   │   │   ├── Contacts.module.scss
│   │   │   └── Contacts.tsx
│   │   └── home
│   │       ├── Home.module.scss
│   │       └── Home.tsx
│   ├── react-app-env.d.ts
│   ├── redux
│   └── serviceWorker.ts
└── tsconfig.json
```

First, let's add the missing folders to our `./src` directory. `cd` there and run

```bash
mkdir pages redux
```

We would be moving components that qualify as "pages" to `./src/pages`. Keep in mind that this is just *my* preferred way of doing things. Your directory layout does **not** have to be the same. You also don't need TypeScript or SASS (looking at you, Angular). That's one of the beautiful things about React. It's also potentially destructive.

Go ahead and delete the following files from your `./src` directory:

```bash
rm App.css App.test.tsx App.tsx
```

Then create the following files for our home page:

```bash
mkdir -p pages/home && cd pages/home && touch Home.tsx Home.css
```

Open `Home.tsx` in your code editor and add the following lines of code:

```javascript
import React from "react";

class Home extends React.Component {
    render() {
        return (
            <>
                <h1>Hello home</h1>
            </>
        )
    }
}

export default Home;
```
*Learn more the `export` keyword in JavaScript [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)*

This just creates and exports a [module](https://javascript.info/modules-intro) which we can import and use in our application. Open up the app's main file at `./src/index.tsx` and modify it to look like this

```diff
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
- import App from './App';
+ import Home from './pages/home/Home';
import * as serviceWorker from './serviceWorker';

- ReactDOM.render(<App />, document.getElementById('root'));
+ ReactDOM.render(<Home />, document.getElementById('root));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

```

If the app is already running, it should reload and display a nice, bold "Hello home".
