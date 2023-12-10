import { screen, render } from "@testing-library/react";
import { Home } from "../Home";

test("HomeSampleTest", () => {
    render(<Home />);
    expect(screen.getByRole("heading")).toHaveTextContent("Home");
})