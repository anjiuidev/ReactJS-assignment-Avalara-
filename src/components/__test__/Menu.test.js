import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Menu from '../Menu';
import { BrowserRouter } from 'react-router-dom';

describe("Menu Component", () => {
    let menu;
    beforeEach(() => {
        render(<BrowserRouter><Menu /></BrowserRouter>);
        menu = screen.getByTestId('menu');
    })
    test('renders Menu successfuly.', () => {
        expect(menu).toBeInTheDocument();
    });

    test('Menu contains the title as JS Assignment.', () => {
        expect(menu).toHaveTextContent(/JS Assignment/i);
    });

    test('Menu contains the link text as My todos.', () => {
        expect(menu).toHaveTextContent(/My todos/i);
    });

    test('Menu contains the link text as Songs.', () => {
        expect(menu).toHaveTextContent(/Songs/i);
    });

})