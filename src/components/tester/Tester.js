import React from 'react';
import './Tester.css';

class Tester extends React.Component{
    
    callNow()
    {
         window.alert();
    }
     render(){
          return (
              <div className="Tester">
                    <h1>Hello</h1>
                    <p onClick={this.callNow}>I'm Tester in Wai Hyn Htun</p>
              </div>
          );
     }
}

export default Tester;