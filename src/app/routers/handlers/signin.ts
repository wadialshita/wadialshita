import { includes } from 'lodash';

const ALLOWED_FROM_STATES = ['dashboard'];

export default [
    'dashboard',
    () => (fromState: any, done: any) => {
        if (!fromState || !fromState.name || includes(ALLOWED_FROM_STATES, fromState.name)) {
            return done();
        }
        return Promise.reject({ redirect: { name: fromState.name } });
    },
];
