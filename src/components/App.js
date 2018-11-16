import React, { Component } from 'react';
import { connect } from 'react-redux';

import WorkContainer from '../containers/work_container';
import Recharge from '../containers/recharge_container';

class App extends Component {  
  render() {
    return (
      <div className="App">
        <div>
          <WorkContainer 
            name='Field'
            area={this.props.field} />
          <WorkContainer 
            name='Farm' 
            area={this.props.farm} />
        </div>
        <div>
          <WorkContainer 
            name='House'
            area={this.props.house} />
          <WorkContainer 
            name='Store House'
            area={this.props.storehouse} />
        </div>
        <Recharge />
      </div>
    );
  }
}

const mapStateToProps = ( state ) => {
  return {
    field: state.area.field,
    farm: state.area.farm,
    house: state.area.house,
    recharge: state.recharge,
    storehouse: state.area.storehouse
  };
}

export default connect( mapStateToProps )( App );
