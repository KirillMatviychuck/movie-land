import { AppReducerType, appReducer, setAppProgressStatus } from './app';

describe('app', () => {
    const initialTestState: AppReducerType = {
        status: 'idle'
    };

    test('correct status change', () => {
        const changedState = appReducer(initialTestState, setAppProgressStatus({ status: 'loading' }));
        expect(changedState.status).toBe('loading');
    });
});