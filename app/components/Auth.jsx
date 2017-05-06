import React from 'react';
import uuid from 'uuid';
import {compose} from 'redux';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import connect from '../libs/connect';
import Lanes from './Lanes';
import LaneActions from '../actions/LaneActions';

module.exports = React.createClass({
    getInitialState:function(){
      return {
          name:'',
          password:''
      }
    },
    userLogin:function(e){
        e.preventDefault();
        LaneActions.userLogin(this.state);
    },
    handleInputChange:function(e){
      e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      state[name] = e.target.value;
      this.setState(state);
    },
    render:function(){
        return(
            <form className="form" onSubmit={this.userLogin}>
                <div className="form-group">
                    <label className="control-label" htmlFor="name">Username:</label>
                    <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="Username" />
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="tagline">Password:</label>
                    <input type="text" className="form-control" id="tagline" name="password" value={this.state.address} onChange={this.handleInputChange} placeholder="Password" />
                </div>
                <div className="form-group">
                    <button className="btn" type="submit">Submit</button>
                </div>
            </form>
        )
    }
})
