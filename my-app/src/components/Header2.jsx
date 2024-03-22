import React from 'react'

// function Header2(props) {
//   return (
//     <div>Hello {props.name} {props.last}</div>
//   )
// }

// const Header2=(props)=>{
//     return <div>
//         Hello {props.name}-{props.last}

//     </div>
// }

class Header2 extends React.Component{
    render(){
        return <div>
            Hello{this.props.name} {this.props.last} {this.props.children}
        </div>
    }
}

export default Header2