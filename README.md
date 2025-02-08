# useParams Hook Returns Empty Object Outside Route Component in React Router v6

This repository demonstrates a common issue when using React Router v6's `useParams` hook: receiving an empty object when accessing parameters outside the direct route component tree. The issue stems from `useParams` relying on the routing context provided by parent Route components. If `useParams` is called outside this context, it incorrectly returns an empty object.

**Problem:** Accessing URL parameters directly within a component not nested within a `<Route>` component results in an empty object, regardless of the URL parameters.

**Solution:**  Nest the component needing the parameters within the `<Route>` component or use a method for passing parameters such as Context API, props, etc.

The `bug.js` file reproduces the problem, and `bugSolution.js` provides a working solution using a nested component.