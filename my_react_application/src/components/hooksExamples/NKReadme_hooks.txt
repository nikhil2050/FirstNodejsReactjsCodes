-- ---------------------------------------------------
                        HOOKS
-- ---------------------------------------------------

New feature from React v16.8

Pre-requisites:
    1. React basics
    2. Functional & Class components
    3. Props & States

DEFINITION: 
    Hooks allow you to use React features without having to write a class.
    eg. State of a component

WHY HOOKS:
    Reason set #1:
        Understand how 'this' keyword works in JS. (Hooks remove 'this' keyword confusion.)
        Remember to bind event-handlers in class components
        Classes don't minify very well and make hot reloading very unreliable

    Reason set #2:
        There is no particular way to re-use stateful component logic
        HOC & render props pattern do address this problem but you have to restructure your components in awkward looking code.
        Makes the code harder to follow
        There is a need to share stateful logic in better way.

    Reason set #3:
        Create components for complex scenarios such as data fetching and subscribing to events
        Related code is not organized in 1 place 
        Ex. "Data Fetching" is done in componentDidMount() & componentDidUpdate()
        Ex. "Event listeners" is subscribed in componentDidMount() and unsubscribed in componentWillUnmount()
            Both "Data fetching" & "Event listeners" end up in the same code block of componentDidMount()
        Because of stateful logic - Cannot break components into smaller ones




