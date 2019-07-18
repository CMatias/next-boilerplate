import React from 'react';
import { connect } from 'react-redux';

import { Heading } from '@components';

export class HomePage extends React.Component {
  render() {
    return (
      <div className="title">
        Hello!
        <Heading text="World!" />
      </div>
    );
  }
}

const mapStateToProps = state => state.home;

export default connect(mapStateToProps)(HomePage);
