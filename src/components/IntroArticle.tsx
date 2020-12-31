import React from "react";

import Anchor from "./Anchor";

import "./IntroArticle.scss";

export interface IntroArticleProps {
  title: string;
  subTitle?: string;
  articleText: React.ReactElement;
  url?: string;
  externalUrlTarget?: "_self" | "_blank";
  imageUrl: string;
  imageAlt?: string;
}

const IntroArticle: React.FC<IntroArticleProps> = (props) => {
  let titleElement: React.ReactElement;
  let imageElement: React.ReactElement;

  titleElement = (
    <>
      {props.title}
      {props.subTitle && (
        <span className="intro-article__subtitle">{props.subTitle}</span>
      )}
    </>
  );
  imageElement = <img src={props.imageUrl} alt={props.imageAlt} />;

  if (props.url) {
    const isInternal = !props.url.match(/http/);

    titleElement = Anchor({
      isInternal,
      className: "intro-article__title-link",
      linkUri: props.url,
      linkContents: titleElement,
      linkTarget: props.externalUrlTarget,
    })!;

    imageElement = Anchor({
      isInternal,
      linkUri: props.url,
      linkContents: imageElement,
      linkTarget: props.externalUrlTarget,
    })!;
  }

  return (
    <article className="intro-article">
      <h3 className="intro-article__title">{titleElement}</h3>

      <section className="intro-article__container">
        <div className="intro-article__image">{imageElement}</div>
        <div className="intro-article__text">{props.articleText}</div>
      </section>
    </article>
  );
};

export default IntroArticle;
