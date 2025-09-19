import React from "react";
import { render, screen } from "@testing-library/react";
import Hero2 from "../components/Hero2";
import { describe, expect, it } from "vitest";

describe("Hero2 Component", () => {
  it("renders all slide images and titles", () => {
    render(<Hero2 />);

    const slideTitles = [
      "حرکت کشش قفسه سینه روی دیوار",
      "دمبل پرس سینه",
      "وضعیت سگ رو به پایین",
      "اسکوات با وزن بدن",
      "TRX ROW",
    ];

    slideTitles.forEach((title) => {
      const textElements = screen.getAllByText(title);
      expect(textElements.length).toBeGreaterThan(0);
      const imgElements = screen.getAllByAltText(title);
      expect(imgElements.length).toBeGreaterThan(0);
    });
  });
});
