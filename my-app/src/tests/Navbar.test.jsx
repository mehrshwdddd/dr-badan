import React from "react"; 
import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";
import { describe, it, expect,vi } from "vitest";

vi.mock("../images/New-Project-1-1024x576.png", () => ({
  default: "logo-mock.png",
}));

describe("Navbar Component", () => {
  it("renders the logo", () => {
    render(<Navbar />);
    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();
  });

  it("renders all menu items", () => {
    render(<Navbar />);
    const menuItems = ["خانه", "رژیم ها", "تمرین ها", "محاسبه bmi", "مقالات"];
    menuItems.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it("has correct number of menu items", () => {
    render(<Navbar />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(5);
  });
});
