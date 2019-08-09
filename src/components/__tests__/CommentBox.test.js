import React from 'react'
import { CommentBox } from 'components/CommentBox'
import { mount } from 'enzyme'

it('has a text area and a button', () => {
    const wrapped = mount(<CommentBox/>);

    console.log(wrapped.find('textarea'));
    console.log(wrapped.find('button'))
});
