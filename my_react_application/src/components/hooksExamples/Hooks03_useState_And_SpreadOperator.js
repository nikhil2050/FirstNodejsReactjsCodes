import React, {useState} from 'react'

/* 
    Ref.: Codevolution - React Hooks Tutorial - 4 - useState with object 
    https://www.youtube.com/watch?v=cF2lQ_gZeA8&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=45
*/
function UseState_And_SpreadOperator() {
    
    const [name, setName] = useState({firstName:'', lastName:''})

    return(
        <form>
            {/* NOTE: 'Spread operator' will copy every property in name object, just override the field defined ahead */}
            <input type='text' value={name.firstName} 
                    onChange={e => setName({ ...name, firstName:e.target.value})} />      {/* <<<=== Spread operator */} 
            <input type='text' value={name.lastName} 
                    onChange={e => setName({...name, lastName:e.target.value})} />        {/* <<<=== Spread operator */} 

            Name: {name.firstName +' '+ name.lastName}
        </form>
    )

}

export default UseState_And_SpreadOperator