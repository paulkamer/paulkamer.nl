import React from "react";
import { render, screen, act } from "@testing-library/react";

import IntroArticle, { IntroArticleProps } from "./IntroArticle";

const testArticle1: IntroArticleProps = {
  title: "Title",
  subTitle: "Subtitle",
  articleText: <p>Article text</p>,
  url: "https://google.com",
  externalUrlTarget: "_blank",
  imageUrl: "https://google.com/logo.svg",
  imageAlt: "Image alt text",
};

const testArticle2: IntroArticleProps = {
  ...testArticle1,
  externalUrlTarget: "_self",
};

const testArticleWithoutUrl: IntroArticleProps = {
  ...testArticle1,
  url: undefined,
};

it("renders without crashing", () => {
  render(<IntroArticle {...testArticle1} />);
});

it("renders the title, subtitle and article", () => {
  render(<IntroArticle {...testArticle1} />);
  expect(screen.getByText("Title")).toBeInTheDocument();
  expect(screen.getByText("Subtitle")).toBeInTheDocument();
  expect(screen.getByText("Article text")).toBeInTheDocument();
});

it("renders the image", () => {
  const { container } = render(<IntroArticle {...testArticle1} />);

  expect(
    container
      .getElementsByClassName("intro-article__image")[0]
      .getElementsByTagName("img")[0]
  ).toBeInTheDocument();
  expect(
    container
      .getElementsByClassName("intro-article__image")[0]
      .getElementsByTagName("img")[0].src
  ).toContain("logo.svg");

  expect(screen.getByAltText("Image alt text")).toBeInTheDocument();
});

it("renders the link", () => {
  const { container } = render(<IntroArticle {...testArticle1} />);

  expect(screen.getByText("Title").closest("a")?.href).toContain("google.com");
  expect(screen.getByText("Title").closest("a")?.target).toBe("_blank");

  expect(
    container
      .getElementsByClassName("intro-article__image")[0]
      .getElementsByTagName("a")[0].href
  ).toContain("google.com");
});

it("renders the link with target _self", () => {
  render(<IntroArticle {...testArticle2} />);

  expect(screen.getByText("Title").closest("a")?.target).toBe("_self");
});

it("renders an article without url", () => {
  render(<IntroArticle {...testArticleWithoutUrl} />);

  expect(screen.getByText("Title").closest("a")).not.toBeInTheDocument();
});
