import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: AppReducerType = {
    status: 'idle'
};

export const appSlice = createSlice({
    name: 'app',
    initialState: initialState,
    reducers: {
        setAppProgressStatus(state, action: PayloadAction<{ status: AppProgressStatusType }>) {
            state.status = action.payload.status;
        }
    },
});

export const { setAppProgressStatus } = appSlice.actions;

export type AppReducerType = {
    status: AppProgressStatusType
}
export type AppProgressStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

export const appReducer = appSlice.reducer;