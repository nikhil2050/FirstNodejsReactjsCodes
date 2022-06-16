Styling React COmponents :

1. CSS Stylesheets
2. Inline Styling
3. CSS Modules (filename.module.css)
4. CSS in JS Libraries (Styles Components)

-- -----------------------------------------------

Lifecycle Methods (of CLASS COMPONENT) :

1. MOUNTING :   Called when an instance of component is being created and inserted in the DOM.
        Methods : constructor, static getDerivedStateFromProps, render, componentDidMount.

2. UPDATING :   Called when component is being re-rendered due to changes in props/state.
        Methods : static getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate, componentDidUpdate

3. UNMOUNTING : Called when component is being removed from the DOM.
        Methods : componentWillUnmount

4. ERROR HANDLING : Called when there is error during rendering, in a lifecycle method 
                OR in the Constructor of any child component.
        Methods : static getDerivedStateFromError, componentDidCatch

-- ---------
1. MOUNTING :

1.a. constructor(props) :
    > Special func that will be called whenever a new compo is created.
    > Used for initializing state & binding event handlers
    > "DO NOT cause side effects ex. HTTP requests"
    > super(props)
    > Directly overwrite this.state

1.b. static getDerivedStateFromProps(props, state) :
    > Used when a state of a compo depends on changes in props over time.
    > So, use this method to set the state
    > Cannot use 'this.setState' as it is static
    > "DO NOT cause side effects ex. HTTP requests"
    
1.c. render() :
    > Only required method
    > Read props & state and return JSX
    > DO NOT change state or interact with DOM or make AJAX calls
    > Children components lifecycle methods also executed here

1.d. componentDidMount() :
    > Invoked immediately after a compo and all its children compo have been rendered on DOM.
    > Place to Cause side effects: Ex. Interact with DOM & make AJAX calls 

Parent-Child component execution flow:
    Parent-constructor()
    Parent-getDerivedStateFromProps()
    Parent-render()
    Child-constructor()
    Child-getDerivedStateFromProps()
    Child-render()
    Child-componentDidMount()
    Parent-componentDidMount() 

-- ---------
2. UPDATING : 

2.a. static getDerivedStateFromProps(props, state) : (REFER 1.b.)
    > Used when a state of a compo depends on changes in props.
    > Called every time the compo is re-rendered
    > "DO NOT cause side effects ex. HTTP requests"
    > used rarely

2.b. shouldComponentUpdate(nextProps, nextState) :
    > Tells if the component should re-render or NOT
    > For performance optimization
    > "DO NOT cause side effects ex. HTTP requests OR setState()"
    > used rarely

2.c render() : (REFER 1.c.)

2.d. getSnapshotBeforeUpdate(prevProps, prevState)
    > Called before the changes from the virtual DOM are to be reflected in DOM
    > The returned value will be passed to next method.
    > used rarely (to get and maintain the last scroll position)

2.e. componentDidUpdate(prevProps, prevState, snapshot) :
    > Place to Cause side effects: Ex. Interact with DOM & make AJAX calls based on prev and curr props value 

Parent-Child component execution flow:
    Parent-getDerivedStateFromProps()
    Parent-shouldComponentUpdate()
    Parent-render()
    Child-getDerivedStateFromProps()
    Child-shouldComponentUpdate()
    Child-render()

    Child-getSnapshotBeforeUpdate()
    Parent-getSnapshotBeforeUpdate()

    Child-componentDidUpdate()
    Parent-componentDidUpdate()

-- ---------
3. UNMOUNTING :

3.a. componentWillUnmount() :
    > Called immediately before a compo is unmounted and destroyed.
    > Do cleanup tasks, invalidating timers.
    > DO NOT call setState()

-- ---------
4. ERROR HANDLING :

4.a. static getDerivedStateFromError(error) :
4.b. componentDidCatch(error, info) :
    
    > When there is an error either during rendering OR in a lifecycle method 
        OR in constructor of child compo.

-- -----------------------------------------------
-- -----------------------------------------------
SHALLOW COMPARISON :
-- -----------------------------------------------
    Primitive Types:
        var a = 'Vishwas'
        var b = 'Vishwas'
        (a === b)   // true

    Complex Types:
        var a = [1,2,3]
        var b = [1,2,3]
        var c = a
        (a === b)   // false
        (a === c)   // true

        Similarly for objects
        ex. var ob = { x:1, y:2 };

-- -----------------------------------------------
-- -----------------------------------------------
PURE-COMPONENT (for Class Components):
-- -----------------------------------------------

Instead of extending Component, PureComponent can be extended.

PureComponent implements shouldComponentUpdate lifecycle method by performing a SHALLOW COMPARISON (Refer above block)
on the props and state of the component.

If parent don't Re-render, then child doesn't Re-render.

PERFORMANCE BOOST - If there is no difference, the component is not re-rendered.

Never mutate the state. Always return a new object that reflects the new state.

var a = [1,2,3]
var b = [1,2,3]
var c = a
(a === b)   // false
(a === c)   // true

DISADVANTAGE: Works with only Class Components.

-- -----------------------------------------------

MEMO (for Functional Components):

    - ClassComponent :: PureComponent
    - FunctComponent :: React.memo()
    React.memo() does the same as PureComponent (for Component)
    But it does not check for changes in state, only in props 
    React.memo() = "Higher order components"

-- -----------------------------------------------
-- -----------------------------------------------
REFs:
-- -----------------------------------------------
    Approach #1: Using React.createRef()
        1. Create a reference using React.createRef()
        2. We attach a reference to an element using the ref prop and assign the property
        3. The element can be accessed using 'this.ref.current'

    Approach #2: Create a property and assign value = null
        1. First create a property and 
            then create a method that assigns the property with a DOM element passed as a parameter.
        2. We attach the 'ref' to an element using the method that inturn assigns the element to the property
        3. The element can be accessed using 'this.ref'
