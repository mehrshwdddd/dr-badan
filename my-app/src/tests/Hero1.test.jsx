import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Hero1 from "../components/Hero1";

describe("Hero1 Component", () => {
  it("renders main images", () => {
    render(<Hero1 />);
    expect(screen.getByAltText("img")).toBeInTheDocument();
    expect(screen.getAllByRole("img")).toHaveLength(5); 
  });

  it("renders main title and paragraph", () => {
    render(<Hero1 />);
    expect(screen.getByText("برنامه تمرینی و رژیم مخصوص بدن تو")).toBeInTheDocument();
    expect(screen.getByText(/ما توی دکتر بدن، بر اساس هدف/)).toBeInTheDocument();
  });

  it("renders the button with correct text", () => {
    render(<Hero1 />);
    const button = screen.getByRole("button", { name: "ثبت نام برنامه اختصاصی" });
    expect(button).toBeInTheDocument();
  });

  it("renders all feature cards with logos and text", () => {
    render(<Hero1 />);
    const cardTexts = [
      "انواع رژیم غذایی",
      "آموزش تمرین های ورزشی",
      "معرفی مشاوران و مربیان",
      "محاسبه گر BMI",
    ];

    cardTexts.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });

    const logos = ["logo1", "logo2", "logo3", "logo4"];
    logos.forEach((alt) => {
      expect(screen.getByAltText(alt)).toBeInTheDocument();
    });
  });
});
