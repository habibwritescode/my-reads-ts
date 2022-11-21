import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Book from "./Book";

test("change book shelf select value", async () => {
  // ARRANGE
  const handleSelect = jest.fn();
  const fakeBook = {
    authors: ["jack harlow"],
    categories: ["science"],
    description: "cooking book",
    id: "kckjzb",
    imageLinks: {
      smallThumnail: "",
      thumbnail: "",
    },
    shelf: "read",
    title: "how to love",
    subtitle: "loving is a crime",
  };

  render(
    //   @ts-ignore
    <Book book={fakeBook} handleSelect={handleSelect} />
  );
  // ACT
  const select = screen.getByTestId("book-select");
  // ASSERT
  expect(
    await screen.findByRole("option", { name: "Read" })
  ).toBeInTheDocument();

  userEvent.selectOptions(select, "read");
  expect(select).toHaveValue("read");
  expect(handleSelect).toHaveBeenCalled();
});
