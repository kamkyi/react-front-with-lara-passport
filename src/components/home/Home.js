import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.css';

class Home extends Component{
      render(){
            return <div className='Home'>
                 <h1>Welcome Home</h1>
                 <button className="counter" onClick={this.props.IncreCount}>Counter</button>
                 <input type="text" onChange={this.props.textnow}></input>
            </div>;
      }
}
const mapStateToProps = state =>{
      return {

      }
}

const mapDispatchToProps = dispatch => {
      return {
      IncreCount : () => dispatch({type:'incre_count'}),
      textnow :() => dispatch({type:'text_now'})
      }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);