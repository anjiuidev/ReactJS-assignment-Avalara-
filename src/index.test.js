import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { fireEvent, screen, render, getByRole } from '@testing-library/react';

describe("Given redux store created from reducer", () => {
    beforeEach(() => {
    });
    describe("WHEN this is passed to App", () => {
        let getByLabelText, getByText, container;
        beforeEach(() => {
            ({ getByLabelText, getByText, container } = render(
                <Provider store={store}>
                    <React.StrictMode>
                        <App />
                    </React.StrictMode>
                </Provider>
            ));
        });

        test("THEN there a tile with text 'JS Assignment' shown", () => {
            expect(container).toHaveTextContent(/JS Assignment/i);
        });

        test("contains the navigation link content", () => {
            expect(container).toHaveTextContent(/My todos/i);
            expect(container).toHaveTextContent(/Songs/i);
        });

        describe("When Naviation changes to Mytodos page", () => {
            let todosLink;
            beforeEach(() => {
                todosLink = screen.getByText(/My Todos/);
                fireEvent.click(todosLink);
            });

            test('My Todos link has active class', () => {
                expect(todosLink).toHaveClass('active');
            });

            describe("AND when a todo is added", () => {
                beforeEach(() => {
                    fireEvent.change(screen.getByTestId('todoinput'), {
                        target: { value: "My first todo" }
                    });
                    fireEvent.click(screen.getByText(/Save/i));
                });
    
                test("THEN the todo is visible", () => {
                    expect(container).toHaveTextContent("My first todo");
                });
    
                describe("AND when completed todos are not selected", () => {
                    test("THEN the completed todos button is disabled", () => {
                        expect(screen.getByText('Clear Completed Todos')).toBeDisabled();
                    });
                });
    
                describe("AND when a further todo is added", () => {
                    beforeEach(() => {
                        fireEvent.change(screen.getByTestId('todoinput'), {
                            target: { value: "My second todo" }
                        });
                        fireEvent.click(screen.getByText(/Save/i));
                    });
    
                    test("THEN both todos are visible", () => {
                        expect(container).toHaveTextContent("My first todo");
                        expect(container).toHaveTextContent("My second todo");
                    });
    
                    describe("AND when the first todo is clicked on", () => {
                        beforeEach(() => {
                            fireEvent.change(screen.getAllByRole('checkbox')[0]);
                        });
    
                        test("THEN both todos are still visible", () => {
                            expect(container).toHaveTextContent("My first todo");
                            expect(container).toHaveTextContent("My second todo");
                        });
                    });
                });
            });
        });

        describe("When Naviation changes to Songs", () => {
            let songsLink;
            beforeEach(() => {
                songsLink = screen.getByText(/Songs/);
                fireEvent.click(songsLink);
            });

            test('Songs link has active class', () => {
                expect(songsLink).toHaveClass('active');
            });

            test('renders no songs available when no data', () => {
                expect(screen.getByText(/No songs available/)).toBeInTheDocument();
            });

            describe("AND when any field is invalid", () => {
                beforeEach(() => {
                    fireEvent.change(screen.getByTestId('title'), {
                        target: { value: "My first song" }
                    });
                    fireEvent.change(screen.getByTestId('artist'), {
                        target: { value: "artist one" }
                    });
                    fireEvent.click(screen.getByText(/Add/i));
                });
    
                test("THEN the error message will be shown for corresponding field(time)", () => {
                    expect(container).toHaveTextContent("Time is required");
                });

                test("THEN the song will not added to the list", () => {
                    expect(container).not.toHaveTextContent("My first song");
                    expect(container).not.toHaveTextContent("artist one");
                });
            });

            describe("AND when click on Reset button", () => {
                beforeEach(() => {
                    fireEvent.change(screen.getByTestId('title'), {
                        target: { value: "My first song" }
                    });
                    fireEvent.change(screen.getByTestId('artist'), {
                        target: { value: "artist one" }
                    });
                    fireEvent.click(screen.getByText(/Reset/i));
                });
    
                test("THEN the form will get cleared", () => {
                    expect(screen.getByTestId('title')).toHaveTextContent("");
                    expect(screen.getByTestId('artist')).toHaveTextContent("");
                });
            });

            describe("AND when a song is added", () => {
                beforeEach(() => {
                    fireEvent.change(screen.getByTestId('title'), {
                        target: { value: "My first song" }
                    });
                    fireEvent.change(screen.getByTestId('artist'), {
                        target: { value: "artist one" }
                    });
                    fireEvent.change(screen.getByTestId('time'), {
                        target: { value: 180 }
                    });
                    fireEvent.click(screen.getByText(/Add/i));
                });
    
                test("THEN the song is visible", () => {
                    expect(container).toHaveTextContent("My first song");
                    expect(container).toHaveTextContent("artist one");
                });
            });
        });
    });
})