import { appReducer, AppReducerType, setAppProgressStatus } from './app';

describe('app tests', () => {
    const initialState: AppReducerType = {
        status: 'idle'
    }
    beforeEach(() => {
        initialState.status = 'idle'
    })

    test('should return the initial state', () => {
        const action = setAppProgressStatus({ status: 'loading' })
        const finalState = appReducer(initialState, action)
        expect(finalState.status).toBe('loading')
    })
});