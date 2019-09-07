import React from 'react';
import { render } from '@testing-library/react'
import App from './App';

// test('renders without crashing', () => {
//     const app = render( < App / > );
// });

test('looking for button text', () => {
    const app = render( < App / > );
    app.getByText(/click me/i)
});

test('looking for title text', () => {
    const app = render( < App / > );
    app.getByText(/Hello! Welcome To The Ladies Of Soccer/i)
});