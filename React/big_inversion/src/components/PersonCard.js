import React from 'react';

const PersonCard = props => {
    return(
        <div>
            <h1>{ props.lastName }, { props.firstName }</h1>
            <p>Age: { props.age }</p>
            <p>Hair Color: { props.hairColor }</p>
        </div>
    );
}
export default PersonCard;


// class PersonCard extends React.Component {

//     constructor(prop){
//         super(prop);

//         this.state = {
//             ageCount: 0
//         }
//     }

//     clickHandler = event => {
//         this.setState({
//             ageCount: this.state.ageCount + 1
//         })
//     }


//     render() {
//         const {firstName, lastName, age, hairColor} = this.props;
//         return(
//             <div>
//                 <h1>{ lastName } , { firstName }</h1>
//                 <p>Age: {age + this.state.ageCount}</p>
//                 <p>Hair Color: { hairColor }</p>
//                 <button onClick={ this.clickHandler }>Add Age for {firstName} { lastName }</button>
//             </div>
//         );
//     }
// }

// export default PersonCard;