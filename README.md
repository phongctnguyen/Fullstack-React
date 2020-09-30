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