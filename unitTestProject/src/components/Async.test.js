import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe('Async component', () => {

    test('renders posts if request succeeds', async () => {
        // Arange
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => {
                return [{
                    id: 'p1',
                    title: 'First Post'
                }];
            }
        });

        render(<Async/>);
        // Act
        // Assert
        const listItemElements = screen.findAllByRole('listitem');
        expect(await listItemElements).not.toHaveLength(0);
    });

});