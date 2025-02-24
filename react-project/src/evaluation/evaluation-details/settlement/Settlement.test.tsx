import { render,screen } from "@testing-library/react"
import { Settlement } from "./Settlement"


describe('Settlement', () => {
    test('renders without crashing', () => {
        render(<Settlement />)
        expect(screen.getAllByRole("textbox")).toHaveLength(3)
    })
})