import { render, screen } from "@testing-library/react";
import PrimaryButton from "../components/PrimaryButton";

describe("PrimaryButton()", () => {
  it("should render correctly", () => {
    render(<PrimaryButton />);

    const element = screen.getByText("Click to Add");

    expect(element).toBeInTheDocument();
  });

  it("should render correctly if the action button is provided", () => {
    const actionTypeText = "Post";

    render(<PrimaryButton actionType={actionTypeText} />);

    const element = screen.getByText("Click to " + actionTypeText);

    expect(element).toBeInTheDocument();
  });
});
