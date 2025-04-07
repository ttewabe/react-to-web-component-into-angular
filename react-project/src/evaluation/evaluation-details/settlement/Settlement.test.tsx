import { render, screen } from "@testing-library/react"
import { SettlementPage } from "./Settlement"


describe('Settlement', () => {
    test('renders without crashing', () => {
        render(<SettlementPage />)
        expect(screen.getAllByRole("textbox")).toHaveLength(3)
    })
})