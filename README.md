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