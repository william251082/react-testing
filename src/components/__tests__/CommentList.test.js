import React from 'react';
import Root from 'Root';
import CommentList from 'components/CommentList';
import { mount } from 'enzyme';

let wrapped;

beforeEach(() => {
    const initialState = {
        comments: ['Comment 1', 'Comment 2']
    };

    wrapped = mount(
        <Root initialState={initialState}>
            <CommentList/>
        </Root>
    )

});
it('creates one li per comment', () => {
    console.log(wrapped.find('li').length);
});