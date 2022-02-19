import React, {Component} from 'react';
import './Hello.css';
import 'tachyons';

// class Hello extends React.Component {
//   render(){
//       return (
//           <>
//             <h1 className='f1 tc'>Hello World</h1>
//             <p className='tc'>{this.props.greeting}</p>
//           </>
//       );
//   }
// }

const Hello = (props) => {
      return (
          <>
            <h1 className='f1 tc'>Hello World</h1>
            <p className='tc'>{props.greeting}</p>
          </>
      );
}

export default Hello;
