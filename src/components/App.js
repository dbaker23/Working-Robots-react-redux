import React, { Component } from 'react';
import { connect } from 'react-redux';

import WorkContainer from '../containers/work_container';
import Recharge from '../containers/recharge_container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <WorkContainer />
          <WorkContainer />
        </div>
        <div>
          <WorkContainer />
          <WorkContainer />
        </div>
        <Recharge />
      </div>
    );
  }
}

const mapStateToProps = ( {totals} ) => {
  return {totals};
}

export default connect( mapStateToProps )( App );
