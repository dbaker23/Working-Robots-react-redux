import React, { Component } from 'react';
import AreaBox from '../components/area_box';
import { SELECTED, UNSELECTED } from '../styles/constants';

export default class Recharge extends Component {
    render() {
        return (
            <div id='recharge-station'>
                <AreaBox name='Recharge Station' />
            </div>
        );
    }
}