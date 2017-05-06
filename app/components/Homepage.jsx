import React from 'react';
import uuid from 'uuid';
import {compose} from 'redux';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import connect from '../libs/connect';

module.exports = React.createClass({
    render:function(){
        return(
            <div>
        <h1>Retro Board</h1>
        <ul className="header">
          <li>Home</li>
          <li>Login</li>
        </ul>
         <div className="content">

        </div>
      </div>
        )
    }
})
