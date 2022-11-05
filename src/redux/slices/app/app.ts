import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: AppReducerType = {
    status: 'idle'
};

const appSlice = createSlice({
    name: 'app',
    initialState: initialState,
    reducers: {
        setAppProgressStatus(state, action: PayloadAction<{status: AppProgressStatusType}>) {
            state.status = action.payload.status;
        }
    },
});

export const {setAppProgressStatus} = appSlice.actions;

type AppReducerType = {
    status: AppProgressStatusType
}
export type AppProgressStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

export const appReducer = appSlice.reducer;