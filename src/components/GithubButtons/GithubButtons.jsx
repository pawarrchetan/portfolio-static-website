import React from 'react';
import GitHubButton from 'react-github-btn';

const GithubButton = () => (
  <>
    <GitHubButton
      className="github-button"
      href="https://github.com/pawarrchetan/portfolio-static-website/fork"
      data-icon="octicon-repo-forked"
      data-size="large"
      data-show-count="true"
      aria-label="Fork pawarrchetan/portfolio-static-website on GitHub"
    >
      Fork
    </GitHubButton>
    <GitHubButton
      className="github-button"
      href="https://github.com/pawarrchetan/portfolio-static-website"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Star pawarrchetan/portfolio-static-website on GitHub"
    >
      Star
    </GitHubButton>
  </>
);

export default GithubButton;
