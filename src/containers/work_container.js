import React, { Component } from 'react';
import AreaBox from '../components/area_box';
import { SELECTED, UNSELECTED } from '../styles/constants';

export default class WorkContainer extends Component {
    handleClick() {
        this.props.handleClick( this.props.name );
    }
    render() {
        console.log( 'state', this.state.clicked );
        return (
            <div id='work-station' className={this.state.clicked} >
                <AreaBox 
                    onClick={ () => this.handleClick() } 
                    name={this.props.name} />
            </div>
        );
    }
}