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

export default class IntroArticle extends Component<IntroArticleProps> {
  render() {
    let image = <img src={this.props.imageUrl} alt={this.props.imageAlt} />;

    if (this.props.imageLinkUrl) {
      image = <a href={this.props.imageLinkUrl} target={this.props.imageLinkTarget || '_self'} rel="noopener noreferrer">
        {image}
      </a>;
    } else if (this.props.imageLinkTo) {
      image = <Link to={this.props.imageLinkTo}>
        {image}
      </Link>;
    }

    return (
      <article className="intro-article">
        <h3 className="intro-article__title">
          {this.props.title}
          { this.props.subTitle ? <span className="intro-article__subtitle">{this.props.subTitle}</span> : ''}
        </h3>

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
