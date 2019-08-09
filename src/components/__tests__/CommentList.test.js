import Root from 'Root';
import CommentList from 'components/CommentList';

let wrapped;

beforeEach(() => {
   wrapped = mount(
       <Root>
           <CommentList/>
       </Root>
   )

});
it('creates one li per comment', () => {

});