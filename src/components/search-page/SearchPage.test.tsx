import {
  render,
  screen,
//   waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import SearchPage from "./SearchPage";
import { MemoryRouter as Router } from "react-router-dom";

test("should be able to search and display book results", async () => {
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
  
  // @ts-ignore
  render(<SearchPage books={[fakeBook]} handleSelect={handleSelect} />, {
    wrapper: Router,
  });
  // ACT
  const input = screen.getByTestId("search-input");
  await userEvent.type(input, "testTyping");

  // ASSERT
  expect(input).toBeInTheDocument();
  expect(input).toHaveValue("testTyping");
  //   await waitForElementToBeRemoved(() => screen.queryByText(/Loading.../i));
});
