import React, { Component } from 'react';
import AreaBox from '../components/area_box';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectArea } from '../actions/index';

class WorkContainer extends Component {      
    render() {      
        return (
            <div id='work-station' className={this.props.area.isSelected} >
                <AreaBox 
                    handleClick={this.props.selectArea} 
                    name={this.props.name} />
            </div>
        );
    }
}

const mapStateTopProps = ( state ) => {
    return {
        selected: state.area.selected
    };
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators( {selectArea: selectArea}, dispatch );
}

export default connect( mapStateTopProps, mapDispatchToProps )( WorkContainer );