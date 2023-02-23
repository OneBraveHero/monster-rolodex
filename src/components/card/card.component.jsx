
// Whit Classes***********************************

// import {Component}from "react";
// import './card.styles.css';
//
// class Card extends Component {
//     render() {
//         const {name,id,email} = this.props.monster;
//         return(
//             <div className={"card-container"} key={id}>
//                 <img alt={`Monster ${name}`}
//                      src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
//                 <h1>{name}</h1>
//                 <p>{email}</p>
//             </div>
//         )
//
//
//     }
// }
//
// export default Card;


//Whit Hooks***********************************

import './card.styles.css';

const Card =({monster})=> {
        const {name,id,email} = monster;
        return(
            <div className={"card-container"} key={id}>
                <img alt={`Monster ${name}`}
                     src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
        )



};

export default Card;