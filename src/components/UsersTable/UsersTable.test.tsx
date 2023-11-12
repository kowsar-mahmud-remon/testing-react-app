import { render, screen, within } from "@testing-library/react";
import UsersTable from "./UsersTable";
import { users } from "../../App";

describe("UsersTable()", () => {
  it("should render the welcome message after 5ms", async () => {
    render(<UsersTable users={users} />);

    const welcomeMessageEl = await screen.findByTestId(
      "welcome",
      {},
      { timeout: 2000 }
    );

    expect(welcomeMessageEl).toBeInTheDocument();
  });

  it("should render the table correctly and how much row have", async () => {
    render(<UsersTable users={users} />);

    const rows = within(screen.getByTestId("users")).getAllByRole("row");

    expect(rows).toHaveLength(3);
  });
});
