import React from 'react'

// const Hello =() => {
//     return (
//         <div>
//             <h1>Hello Uma</h1>
//         </div>
//     )
// }

const Hello = () => {

    const attr = {id: 'divMessage'}
    return React.createElement("div",attr, 
           React.createElement("h1", {className:'header'}, "Hello Uma"))
}

export default Hello