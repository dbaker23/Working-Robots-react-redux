import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import WorkContainer from '../containers/work_container';
import Recharge from '../containers/recharge_container';
import { selectArea } from '../actions/index';

class App extends Component {
  handleClick( area ) {
    console.log( 'area', area );
    selectArea( area );
  }

  render() {
    console.log( 'props', this.props );
    return (
      <div className="App">
        <div>
          <WorkContainer 
            name='Field' 
            handleClick={this.handleClick} 
            robots={this.props.field} />
          <WorkContainer 
            name='Farm' 
            handleClick={this.handleClick} 
            robots={this.props.farm} />
        </div>
        <div>
          <WorkContainer 
            name='House' 
            handleClick={this.handleClick} 
            robots={this.props.house} />
          <WorkContainer 
            name='Store House' 
            handleClick={this.handleClick} 
            robots={this.props.storehouse} />
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

const mapDispatchToProps = dispatch => {
  return bindActionCreators( {selectArea: selectArea}, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( App );
