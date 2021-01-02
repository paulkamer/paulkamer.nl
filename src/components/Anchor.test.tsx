import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";

import Anchor, { AnchorProps } from "./Anchor";
import { BrowserRouter } from "react-router-dom";

const testAnchor1: AnchorProps = {
  isInternal: false,
  linkUri: "https://google.com",
  linkContents: <span>Google.com</span>,
};

const testAnchorTargetBlank: AnchorProps = {
  ...testAnchor1,
  linkTarget: "_blank",
};

const testAnchorWithClassname: AnchorProps = {
  ...testAnchor1,
  className: "link-class",
};

const testAnchorInternalLink: AnchorProps = {
  ...testAnchor1,
  isInternal: true,
  linkUri: "/jobs",
};

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<Anchor {...testAnchor1} />, div);
});

it("renders the link with provided contents", () => {
  const { container } = render(<Anchor {...testAnchor1} />);

  expect(container.getElementsByTagName("span")[0]).toBeInTheDocument();
  expect(container.getElementsByTagName("span")[0].textContent).toContain(
    "Google.com"
  );
});

it("renders the link with target _self by default", () => {
  const { container } = render(<Anchor {...testAnchor1} />);

  expect(container.getElementsByTagName("a")[0].target).toBe("_self");
});

it("renders the link with target _blank", () => {
  const { container } = render(<Anchor {...testAnchorTargetBlank} />);

  expect(container.getElementsByTagName("a")[0].target).toBe("_blank");
});

it("renders the link with provided class name", () => {
  const { container } = render(<Anchor {...testAnchorWithClassname} />);

  expect(container.getElementsByTagName("a")[0].className).toBe("link-class");
});

it("renders an internal link", () => {
  const { container } = render(
    <BrowserRouter>
      <Anchor {...testAnchorInternalLink} />
    </BrowserRouter>
  );

  expect(container.getElementsByTagName("a")[0].href).toContain("/jobs");
});
