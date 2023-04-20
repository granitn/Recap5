import { render, screen } from "@testing-library/react";
import ArtPieces from ".";

test("renders all artpieces in a list", () => {
  render(<ArtPieces />);
  const artpieces = screen.getByRole("list");
  expect(artpieces).toHaveProperty("listItems");
});
