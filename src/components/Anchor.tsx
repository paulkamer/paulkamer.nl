import React from 'react';
import { Link } from 'react-router-dom';

export interface AnchorProps {
  isInternal: boolean;
  className?: string;
  linkUri: string;
  linkContents: JSX.Element;
  linkTarget?: '_self' | '_blank';
}

const Anchor: React.FC<AnchorProps> = (props) => {
  if (props.isInternal) {
    return (
      <Link className={props.className} to={props.linkUri}>
        {props.linkContents}
      </Link>
    );
  }

  return (
    <a
      className={props.className}
      href={props.linkUri}
      target={props.linkTarget || '_self'}
    >
      {props.linkContents}
    </a>
  );
};

export default Anchor;
