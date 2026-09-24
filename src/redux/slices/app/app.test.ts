import { AppReducerType, AppProgressStatusType, appReducer, setAppProgressStatus } from './app';

describe('app reducer', () => {
    const initialTestState: AppReducerType = {
        status: 'idle',
    };

    describe('setAppProgressStatus', () => {
        it.each(
            ['idle', 'loading', 'succeeded', 'failed'] as AppProgressStatusType[]
        )('should change status to %s', (status) => {
            const changedState = appReducer(
                initialTestState,
                setAppProgressStatus({ status })
            );

            expect(changedState.status).toBe(status);
        });
    });

    test('should return initial state for unknown action', () => {
        const state = appReducer(
            initialTestState,
            { type: 'UNKNOWN_ACTION' }
        );

        expect(state).toEqual(initialTestState);
    });
});