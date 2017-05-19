# React Redux Typescript Webpack Calculator Example / Boilerplate

Run `npm install`

Run `npm start`

# Technologies Used

- React
- Redux
- Typescript 2
- Webpack 2

# Purpose

This application should serve as a boilerplate example of how these technologies work together. The Redux application has some basic components and a reducer that handles all of the application logic. This should be expandable for larger scale applications.

Typescript (as integrated) should compile regular Javascript but throw errors when type checking is not properly enforced.

#Typescript 2 Migration Notes, helpful resources:

Migrating from JS to TS 2 with Webpack etc:

https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html

Typescript JSX parameters (for type checking on React components):

https://www.typescriptlang.org/docs/handbook/jsx.html

List of acceptable TS parameters:

https://www.typescriptlang.org/docs/handbook/compiler-options.html

If you cannot resolve a module you may need to update to the latest version of typescript (see):

http://stackoverflow.com/questions/43815501/typescript-error-ts5023-unknown-compiler-option-strict

Pros:
Static typing is good for error checking, makes what the developer intended more clear. When working properly the compiler / linter will throw errors, letting you still develop while indicating there may be a more precise way to do things.

Cons:
Migration from es6 to Typescript is not always smooth, and Webpack can be a little bit of a pain to set up (hopefully that can be reduced by having a proper internal boilerplate that we can use to spin up apps quickly).

Sometimes typing errors are a little opaque (though this will probably change as one gains more familiarity with Typescript).

Redux already enforces a decent amount of type checking (for example modules usually accept a list of proptypes and ask for their values), at times Typescript can feel a little verbose and unnecessary when it ends up doing the same thing
