import React, { Component } from 'react-dom';

export default (ChildComponent) => {
    class ComposedComponent extends Component {
        render() {
            return <ChildComponent/>;
        }
    }

    return ComposedComponent;
};

// Imagine we are in CommentBox.js
// import requireAuth from 'components/requireAuth';
//
// class CommentBox {
//
// }

export default requireAuth(CommentBox)


// Imagine we are in App.js
// import CommentBox from 'components/CommentBox';