import React from 'react';
import './Counter.css';
import { connect } from 'react-redux';

class Counter extends React.Component {
    render() {
      return <div><h3>{this.props.ctr}</h3><button onClick={this.props.increaseCounter}>Click Me</button></div>;
    }
 }
 const mapStateToProps = state => {
      return {
            ctr: state.counter
      }
 }

 const mapDispatchToProps = dispatch =>{
       return {
           increaseCounter : () => dispatch({type:'INCRE'})
       }
 }

 export default connect(mapStateToProps,mapDispatchToProps)(Counter);
