# Fullstack-React

## I. Introduction

### 1. Create-react-app
**Install create-react-app** 

![npm-install-react-app](https://i.ibb.co/3TNN1XJ/npm-create-react-app.png)

**Create react app**
```
create-react-app <name of project>
```

**Create react app (using npx)**
  
![npx-create-react-app](https://i.ibb.co/y5YTqRq/npx-create-react-app.png)

**Why using create-react-app**

![why-using-create-react-app](https://i.ibb.co/D8m6h8G/using-create-react-app.png)

**Project directory**
  
![project-directory](https://i.ibb.co/vHJvBmC/project-directory.png)

Start/Stop project
```
Start: Run "npm(yarn) start"
Stop: Press "Control+C"
```

**Module system**

![import](https://i.ibb.co/cQstWhN/import-react.png)

![importVSrequire](https://i.ibb.co/RHjNGV0/import-VSrequire.png)

**Component**

![component](https://i.ibb.co/HHGKjyt/component.png)

### 2. JSX
**JSX**
- special dialect of JS (not HTML)
- browsers don't understand JSX code! We write JSX then run tools(babel) to turn it into normal JS
- similar in form and function to HTML with a couple differences
- JSX can't print javascript object
  
![JSX](https://i.ibb.co/PgBGtMg/JSX.png)

**JSX vs HTML**

![jsxvshtml](https://i.ibb.co/rvGN8bp/JSXvs-HTML.png)
![jsxstyle](https://i.ibb.co/qjmrcbb/style-JSX.png)

## II. Components
### 1. Three tenets of components

![three-tenets](https://i.ibb.co/T1H9ZRm/three-tenets.png)

### 2. Creating reusable, configurable component

![creating-components](https://i.ibb.co/19XfQSS/creating-components.png)

### 3. Props
- System for passinggg data from a parent component to a child component
- Goal is to customize or configure a child component
- Providing props from parent to child
![providing-props](https://i.ibb.co/jHMFjpz/provide-props.png)

```
Default props:
Component.defaultProps = {
  name: 'David'
};
```

### 4. Class Component vs Functional Component
- How React Used to be
  
![how-used-to-be](https://i.ibb.co/Byjmkbm/fum-VSclass.png)

- How React is now
  
![how-react-now](https://i.ibb.co/rt32pmZ/how-react-now.png)

- How to use
  
![how-to-use](https://i.ibb.co/h9FXbyx/how-to-use.png)

- Rules of Class Components

![rules-class-component](https://i.ibb.co/xzpGrSG/rules-class.png)

### 5. State
- Rules of State

![rules-state](https://i.ibb.co/HVmXYLy/rules-state.png)

### 6. Component Lifecycle
- Lifecyle

![life-cycle](https://miro.medium.com/max/1000/1*fdGC22mqWBAQ7jOFPPAvIg.png)

- Why use lifecycle method

![why-lifecyle](https://i.ibb.co/KK69nqk/why-lifecycle.png)

- Benefits of class component

![benefit-class-comp](https://i.ibb.co/Cv2YdNt/benefit-class-comp.png)

### 7. Forms and Events
- Some Events

![events](https://i.ibb.co/P6J76FX/events.png)

- Uncontrolled

![uncontrolled](https://i.ibb.co/wppvVZR/uncontrolled.png)

- Controlled

![controlled](https://i.ibb.co/LtrcP9R/controlled.png)

- React Ref

![react-ref](https://i.ibb.co/pdFrVGd/react-ref.png)

## III. React-Hooks

### Hooks System
Hooks are a way to write reusable code, instead of more classic techniques like Inheritance

[React-Hooks](https://reactjs.org/docs/hooks-intro.html)

Ex:
* useState: Function that lets you use state in functional component
* useEffect: Function that lets you use something like lifecycle methods in a functional component
* useState: Function that lets you create a 'ref' in a function component

**Primitive Hooks:**

* useState
* useEffect
* useContext
* useReducer
* useCallback
* useMemo
* useRef
* useImperativeHandle
* useLayoutEffect
* useDebugValue

**useState**
```
Syntax:
const [activeIndex (*piece of state*), setIndex (*function to change this piece of state*)] = useState(null (*initial value for this piece of state)*)
```

![useState](https://i.ibb.co/QC8svPs/useState.png)
![stateClassVSstateFunc](https://i.ibb.co/fFz1pf4/state-class-vs-state-func.png)

**useEffect**
- allow function components to use something like lifecycle methods
- we configure the hook to run some code automatically in one of three scenarios:
  1. When the component is rendered for the first time only
  2. When the component is rendered for the first time and whenever it rerenders
  3. When the component is rendered for the first time and (whenever it rerenders and some piece of data has changed)

- useEffect second argument:
  
  * [] -> Run at initial render (scenario 1) 
  * nothing -> Run at initial render -> Run after every rerender (scenario 2) 
  * [data] -> Run at initial render -> Run after every rerender if data has changed since last render (scenario 3) 

![useEffect](https://i.ibb.co/vDPf11Z/use-Effect-arguments.png)

- useEffect cleanup function:
![clean-up](https://i.ibb.co/YDtX9ym/cleanup.png)

**useRef**
- useRef returns a mutable ref object whose "*.current*" property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.

```
Syntax:

const refContainer = useRef(initialValue);
```

### Bonus: Navigation from scratch
- Navigation in React
![navigation](https://i.ibb.co/RCL66fY/react-navigation.png)

## IV. Redux

### Redux Theory
- State management library
- Makes creating complex applications easier
- Not required to create a React app!
- Not explicitly designed work with React

**Redux Cycle**

![redux-cycle](https://i.ibb.co/C12FTNQ/redux-cycle.png)
![redux-cycle-vs-anology](https://i.ibb.co/q1Crf2s/redux-cycle-vs-anology.png)
![redux-cycle-diagram](https://i.ibb.co/ZByn6Bj/redux-cycle-diagram.png)

**Connect React with Redux**

Example:
![connect](https://i.ibb.co/d49r65S/connect-react-redux.png)
![redux-not-magic](https://i.ibb.co/hVPRgzz/redux-not-magic.png)

### Redux Thunk
**Data Loading with Redux**

![data-loading-redux](https://i.ibb.co/stWTQ1N/data-loading-redux.png)

**Redux cycle with Middleware**

![redux-cycle-middleware](https://i.ibb.co/nfMJ5LT/redux-cycle-middleware.png)

**Middleware in Redux**

![middleware-in-redux](https://i.ibb.co/7bpPrhy/middleware-in-redux.png)

**Rules with Redux Thunk**

![rules-with-redux-thunk](https://i.ibb.co/WGPrrcs/rules-redux-thunk.png)

**Redux Thunk behind the scene**

![redux-thunk-behind-the-scene](https://i.ibb.co/VjCmgFc/redux-thunk-behind-the-scene.png)

**Rules of Reducer**

![rules-of-reducer](https://i.ibb.co/CHFXvy5/rules-of-reducer.png)

**Update State**

![update-state](https://i.ibb.co/X4wPy20/safe-state-update.png)

## V. React Router
### Introduction

![react-router](https://i.ibb.co/3MvQhmF/react-router.png)

**React Router Dom work**

![route-example](https://i.ibb.co/KDvmQJX/route-example.png)

![react-router-dom-work](https://i.ibb.co/Jcrbd7R/react-router-dom-work.png)

**Router Types**

![router-types](https://i.ibb.co/Q7WBgY5/router-types.png)

- Traditional Server 

![traditional-server-200](https://i.ibb.co/B2c8M3S/traditional-server-200.png)

![traditional-server-404](https://i.ibb.co/dK3v9QC/ytaditional-server-404.png)

- Create-react-app Dev Server

![create-react-app-dev-server](https://i.ibb.co/WtK6QC9/create-react-app-dev-server.png)

**Path Example**

![path-ex-1](https://i.ibb.co/ySvBhDm/path-ex-1.png)

![path-ex-2](https://i.ibb.co/yYnQ7zj/path-ex-2.png)

![path-ex-3](https://i.ibb.co/rx3Ybg2/path-ex-3.png)

**Navigation**
- Bad navigation

![bad-navigation](https://i.ibb.co/SfB2Y3C/bad-navigation.png)

- How React Navigation (SPA)

![react-navigation](https://i.ibb.co/vDLCpDf/react-navigation.png)


## VI. Authentication with React

**Email/Password Authentication vs OAuth Authentication**

![email/passwordvsoauth](https://i.ibb.co/dmtvZfx/emai-pass-vs-oatuh.png)

**OAuth for Server and OAuth for JS Browser Apps**

![OAuth-server-vs-js-browser](https://i.ibb.co/4FQ9hDX/oauth-server-vs-oauth-js-browser.png)

**OAuth for JS Browser Apps**

![oauth-js-browser-flow](https://i.ibb.co/1fRmjDf/oauth-js-browser-flow-1.png)

![oauth-js-browser-flow-settings](https://i.ibb.co/bdTsBjK/oauth-js-browser-flow-settings.png)

## VII. Redux Form
**Handling input without redux**

![without-redux](https://i.ibb.co/cCWxM33/handling-input-without-redux.png)

**Handling input with redux-form**

![with-redux](https://i.ibb.co/0szHg4q/handling-input-with-redux-form.png)