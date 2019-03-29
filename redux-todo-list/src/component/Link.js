import React from 'react';
import {setVisibilityFilter} from '../actions';
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

class Link extends React.Component {
    render() {
        const {active, children, onClick} = this.props
        return (
            <button
                onClick={onClick}
                disabled={active}
                style={{
                    marginLeft: '4px'
                }}
            >
                {children}
            </button>
        )
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)