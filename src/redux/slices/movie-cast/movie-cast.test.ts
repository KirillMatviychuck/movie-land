import axios from 'axios';

import { movieCastReducer } from './movie-cast';

jest.mock('axios');

describe('movie cast reducer test', () => {
    let response;
    beforeEach(() => {
        response = {
            data: [

            ]
        };
    });
});