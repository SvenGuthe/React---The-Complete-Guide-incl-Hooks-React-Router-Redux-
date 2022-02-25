import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting"

describe('Greeting component', () => {

    test('renders Hello World as a text', () => {
        // Arrange
        render(<Greeting />);
        // Act
        // ... noting
        // Assert
        const helloWorldElement = screen.getByText('Hello World');
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('renders It\'s good to see you! as a text if the button was not clicked', () => {
        // Arrange
        render(<Greeting />);
        // Act
        // ... noting
        // Assert
        const goodToSeeYou = screen.getByText('It\'s good to see you!');
        expect(goodToSeeYou).toBeInTheDocument();
    });

    test('render Changed! if the button was clicked', () => {
        // Arrange
        render(<Greeting />);
        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)
        // Assert
        const changedText = screen.getByText('Changed!');
        expect(changedText).toBeInTheDocument();
    });

    test('render not It\'s good to see you! if the button was clicked', () => {
        // Arrange
        render(<Greeting />);
        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)
        // Assert
        const goodToSeeYou = screen.queryByText('It\'s good to see you!');
        expect(goodToSeeYou).toBeNull();
    });


});