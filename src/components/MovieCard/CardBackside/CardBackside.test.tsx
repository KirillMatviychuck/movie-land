import { render, screen } from '@testing-library/react';

import CardBackside from './CardBackside';

describe('elements in the document', () => {
    test('check elements', () => {
        render(<CardBackside movie_title='Flash' rating={7.9219} release_date='2023-05-03' />);
        const overviewElement = screen.getByText(/overview/i);
        expect(overviewElement).toBeInTheDocument();
        const titleElement = screen.getByText(/flash/i);
        expect(titleElement).toBeInTheDocument();
        const releaseDateElement = screen.getByText(/03-05-2023/i);
        expect(releaseDateElement).toBeInTheDocument();
        const ratingElement = screen.getByText(/7.9/i);
        expect(ratingElement).toBeInTheDocument();
        expect(ratingElement).toHaveStyle({ border: '1px solid green' });
    });
});