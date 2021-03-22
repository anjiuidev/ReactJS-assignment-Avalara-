import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../Button';

describe("Button Component", () => {
    beforeEach(() => {
    })
    test('renders Button successfuly.', () => {
        render(<Button />);
        const btn = screen.getByTestId('button');
        expect(btn).toBeInTheDocument();
    });

    test('renders Button text as per the input', () => {
        render(<Button text="Click Me" />);
        const btnText = screen.getByText(/Click Me/i);
        expect(btnText).toBeInTheDocument();
    });

    describe("Disabled", () => {
        test('disables the button when disabled is true', () => {
            render(<Button text="Click Me" disabled={true} />);
            const btn = screen.getByTestId('button');
            expect(btn).toBeDisabled();
        });
        test('enabled the button when disabled is false', () => {
            render(<Button text="Click Me" disabled={false} />);
            const btn = screen.getByTestId('button');
            expect(btn).toBeEnabled();
        });
    });

    describe("Type", () => {
        test('type will be submit when the given type is submit', () => {
            render(<Button type="submit" />);
            const btn = screen.getByTestId('button');
            expect(btn).toHaveAttribute('type', 'submit');
        });

        test('type will be reset when the given type is reset', () => {
            render(<Button type="reset" />);
            const btn = screen.getByTestId('button');
            expect(btn).toHaveAttribute('type', 'reset');
        });

        test('type will be button when the given type is button', () => {
            render(<Button type="button" />);
            const btn = screen.getByTestId('button');
            expect(btn).toHaveAttribute('type', 'button');
        });
    });

    describe("Size", () => {
        test('renders large button when size is large', () => {
            render(<Button text="Click Me" size="large" />);
            const btn = screen.getByTestId('button');
            expect(btn).toHaveClass('waves-effect waves-light btn-large red darken-2');
        });
        test('renders normal button when size is normal', () => {
            render(<Button text="Click Me" size="normal" />);
            const btn = screen.getByTestId('button');
            expect(btn).toHaveClass('waves-effect waves-light btn');
        });
    });

    test('calls the onClick callback handler', async () => {
        const onClick = jest.fn();
        render(<Button onClick={onClick} />);
        const btn = screen.getByTestId('button');
        await userEvent.click(btn);
        expect(onClick).toHaveBeenCalledTimes(1);
    });
})