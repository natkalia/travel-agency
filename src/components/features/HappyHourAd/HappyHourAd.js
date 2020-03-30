import React from 'react';
import styles from './HappyHourAd.scss';
import PropTypes from 'prop-types';
import {formatTime} from '../../../utils/formatTime';

class HappyHourAd extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    promoDescription: PropTypes.string,
  }
  
  constructor() {
    super();
    setInterval(() => {
      this.forceUpdate();
    }, 1000);
  }

  getCountdownTime() {
    const currentTime = new Date();
    const nextNoon = 
      new Date(Date.UTC(
        currentTime.getUTCFullYear(), 
        currentTime.getUTCMonth(), 
        currentTime.getUTCDate(), 
        12, 0, 0, 0
      ));
    if(currentTime.getUTCHours() >= 12) {
      nextNoon.setUTCDate(currentTime.getUTCDate()+1);
    }
    return Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
  }

  render() {
    const timeLeft = this.getCountdownTime();
    const {title, promoDescription} = this.props;
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{title}</h3>
        {(timeLeft > 23 * 60 * 60) ? //82800
          (<div className={styles.promoDescription}>{promoDescription}</div>) :
          (<div className={styles.promoDescription}>{formatTime(timeLeft)}</div>)}
      </div>
    );
  }
}

export default HappyHourAd;