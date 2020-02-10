import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './IntroArticle.scss';

export interface IntroArticleProps {
  title: string;
  subTitle?: string;
  articleText: JSX.Element;
  imageUrl: string;
  imageLinkTo?: string;
  imageLinkUrl?: string;
  imageLinkTarget?: string;
  imageAlt?: string;
};

interface AnchorProps {
  isInternal: boolean,
  className?: string,
  linkUri: string,
  linkContents: JSX.Element,
  linkTarget?: string
};

const Anchor = (props:AnchorProps) => {
  if (props.isInternal) {
    return <Link className={props.className} to={props.linkUri}>{props.linkContents}</Link>;
  }

  return <a className={props.className} href={props.linkUri} target={props.linkTarget || '_self'}>{props.linkContents}</a>;
}

export default class IntroArticle extends Component<IntroArticleProps> {
  render() {
    let title = <h3 className="intro-article__title">
        {this.props.title}
        { this.props.subTitle ? <span className="intro-article__subtitle">{this.props.subTitle}</span> : ''}
      </h3>;

    let image = <img src={this.props.imageUrl} alt={this.props.imageAlt} />;

    if (this.props.imageLinkTo || this.props.imageLinkUrl) {
      title = Anchor({
        isInternal: !!this.props.imageLinkTo,
        className: 'intro-article__title-link',
        linkUri: (this.props.imageLinkTo || this.props.imageLinkUrl || ''),
        linkContents: title,
        linkTarget: this.props.imageLinkTarget,
      });
    }

    if (this.props.imageLinkTo || this.props.imageLinkUrl) {
      image = Anchor({
        isInternal: !!this.props.imageLinkTo,
        linkUri: (this.props.imageLinkTo || this.props.imageLinkUrl || ''),
        linkContents: image,
        linkTarget: this.props.imageLinkTarget,
      });
    }

    return (
      <article className="intro-article">
        {title}

        <section className="intro-article__container">
          <div className="intro-article__image">
            {image}
          </div>
          <div className="intro-article__text">
            {this.props.articleText}
          </div>
        </section>
      </article>
    );
  }
}
