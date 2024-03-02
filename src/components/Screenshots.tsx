import React, { useEffect } from 'react';
import baguetteBox from 'baguettebox.js';

import './Screenshots.scss';

type Screenshot = {
  alt: string;
  url: string;
  thumbUrl: string;
  title?: string;
};

export interface ScreenshotsProps {
  screenshots: Screenshot[];
}

export const Screenshots: React.FC<ScreenshotsProps> = (props) => {
  useEffect(() => {
    console.log('useEffect');
    baguetteBox.run('.screenshots');
  }, []);

  return (
    <div className="screenshots">
      {props.screenshots.map((screenshot, index) => (
        <div key={`screenshot_${index}`} className="screenshots__screenshot">
          <a
            href={screenshot.url}
            target="_blank"
            title={screenshot.title || screenshot.alt}
            rel="noopener noreferrer"
          >
            <img src={screenshot.thumbUrl} alt={screenshot.alt} />
          </a>
        </div>
      ))}
    </div>
  );
};
