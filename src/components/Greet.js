import React from 'react'

// export function Greet(){
//     return <h1>Hello From Greet</h1>
// }
 const Greet = (props) => {
     console.log(props.children)
    return (
        <div>
            <h1> {props.name} : <i>{props.skill}</i></h1>
        </div>
    )
}

export default Greet;