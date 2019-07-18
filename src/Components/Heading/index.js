import React from 'react';

import './style.scss';

export default class Heading extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <div className={'title'}>
        <span className="title__back">{text}</span>
        <span className="title__front">{text}</span>
      </div>
    );
  }
}
