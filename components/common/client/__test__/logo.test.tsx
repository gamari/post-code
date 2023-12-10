import { screen, render } from "@testing-library/react";
import { Logo } from "../../logo";

test("test logo", () => {
    render(<Logo />)

    expect(screen.getByText("BadCodes")).toBeInTheDocument();
})