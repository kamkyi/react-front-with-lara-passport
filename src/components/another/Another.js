import React from 'react';
import './Another.css';
import { connect } from 'react-redux';

class Another extends React.Component{
         render(){
               return <div className='Another'><h1>{this.props.ctr}</h1></div>
         }
}
const mapStateToProps = state =>{
      return {
           ctr:state.counter
      }
}
export default connect(mapStateToProps)(Another);