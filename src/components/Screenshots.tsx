import React, { Component } from 'react';

import './Screenshots.scss';

type Screenshot = {
  alt: string;
  url: string;
  title?: string;
}

export interface ScreenshotsProps { screenshots: Screenshot[]; }

export class Screenshots extends Component<ScreenshotsProps> {
  render() {
    return (
      <div className="screenshots">
        {
          this.props.screenshots.map((screenshot, index) =>
            <div key={`screenshot_${index}`} className="screenshots__screenshot">
              <a
                href={screenshot.url}
                target="_blank"
                title={`${screenshot.title || screenshot.alt} - click to expand`}
                rel="noopener noreferrer"
              >
                <img src={screenshot.url} alt={screenshot.alt} />
              </a>
            </div>
          )
        }
      </div>
    );
  }
}
