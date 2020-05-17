import  React, {Component} from 'react'

const tablestyle = {
    border: '1px solid black'
}

function FragmentColumns() {
    const items = [{
        id:'Name',
        title:'Vishwas'
    }]
    return(
/*  Alternative #1 : React.Fragment */
/*         <React.Fragment> 
            <td style={tablestyle}>Name</td>
            <td style={tablestyle}>Vishwas</td>
        </React.Fragment>
 */    

/*  Alternative #2 : Blank tags (Cannot use key in <React.Fragment>)*/
/*         <> 
            <td style={tablestyle}>Name</td>
            <td style={tablestyle}>Vishwas</td>
        </>
 */    

/*  Alternative #3 */
        <React.Fragment> 
            {
                items.map( (item) => (
                    <React.Fragment key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                    </React.Fragment>
                ))
            }
        </React.Fragment>
    ) 


}

export default FragmentColumns