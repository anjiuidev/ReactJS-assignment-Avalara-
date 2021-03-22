import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Todo from '../Todo';

describe("Todo Component", () => {
    const mockTodo = {
        id: new Date().getTime(),
        title: "todo one",
        completed: false,
        createdAt: new Date().toString()
    }
    beforeEach(() => {
    });

    test('renders Todo successfuly.', () => {
        render(<Todo todo={mockTodo} />);
        const todo = screen.getByTestId('todo');
        expect(todo).toBeInTheDocument();
    });

    test('renders Todo title as per the input', () => {
        render(<Todo todo={mockTodo} />);
        const todoText = screen.getByText(/todo one/i);
        expect(todoText).toBeInTheDocument();
    });

    test('renders check box to be checked', () => {
        mockTodo.completed = true;
        render(<Todo todo={mockTodo} />);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeChecked();
    });

    // test('calls the onChange callback handler', async () => {
    //     const onChange = jest.fn();
    //     render(<Todo todo={mockTodo} onChange={onChange} />);
    //     const checkbox = screen.getByRole('checkbox');
    //     fireEvent.change(checkbox, {
    //         target: { value: true },
    //     });
    //     expect(onChange).toHaveBeenCalledTimes(1);
    // });

})