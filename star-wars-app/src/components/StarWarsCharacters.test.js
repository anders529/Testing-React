import React from 'react';
import {render} from "@testing-library/react";
import StarWarsCharacters from "./StarWarsCharacters";
// Running component mounting tests.
test('Checking to see if we are rendering the StarWarsCharacters component.', () => {
    render(<StarWarsCharacters/>);
});
test('Checking to see if the Next button is rendering.', () => {
    const {queryByText} = render(<StarWarsCharacters/>);
    const nextButton = queryByText(/next/i);
});
test('Checking to see if we are rendering the Previous Button', () => {
    const {queryByText} = render(<StarWarsCharacters/>);
    const previousButton = queryByText(/previous/i);
});