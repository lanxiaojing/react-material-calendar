import React from 'react';
import styles from './index.less';
import {Calendar} from '../components';

class Index extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    const calendarProps = {
    }
    return <Calendar {...calendarProps} />
    // return <p>asasdfdf</p>
  }
}

export default Index;
