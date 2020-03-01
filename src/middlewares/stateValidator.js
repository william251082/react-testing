import tv4 from 'tv4';
import stateSchema from './stateSchema';

export default ({ dispatch, getState }) => next => action => {
    next(action);

    console.log(tv4.validate(getState(), stateSchema))

    if (!tv4.validate(getState(), stateSchema)) {
        console.warn('Invalid state schema detected')
    }
};
