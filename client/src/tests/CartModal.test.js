import CartModal from "../components/CartModal";
import {render, fireEvent} from '@testing-library/react'

test('renders CartModal without crashing', () => {
    render(<CartModal open={true} setOpen={jest.fn()} />);
});
