import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
    class ComposedComponent extends Component {
        // Component just got rendered
        componentDidMount() {
            this.shouldNavigateAway();
        }

        // Component just got updated
        componentDidUpdate() {
            this.shouldNavigateAway();
        }

        shouldNavigateAway() {
            if (!this.props.auth) {
                console.log('I need to leave');
                this.props.history.push('/');
            }
        }

        render() {
            return <ChildComponent/>;
        }
    }

    function mapStateToProps(state) {
        return {auth: state.auth};
    }

    return connect(mapStateToProps)(ComposedComponent);
};
