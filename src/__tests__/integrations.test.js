import React from 'react';
import Root from 'Root';
import { mount } from 'enzyme';
import { App } from 'components/App';
import moxios from 'moxios';

beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [
            { name: 'Fetched #1'},
            { name: 'Fetched #2'},
            ]
    });
});

afterEach(() => {
    moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
    const wrapped = mount(
        <Root>
            <App/>
        </Root>
    );

    wrapped.find('.fetch-comments').simulate('click');

    // introduce a tiny little pause
    setTimeout(() => {
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(2);
        done()
        wrapped.unmount();
    }, 100);
});