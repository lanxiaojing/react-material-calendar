import { Component, PropTypes } from 'react';
import moment from 'moment';
import style from './CalendarFooter.less';

class CalendarFooter extends Component {
    constructor(props) {
        super()
    }
    render() {
        const {visible, onOk, onCancel} = this.props;
        return (
            <div className={ style.footer } style={ visible
                                        ? null
                                        : {
                                            display: 'none'
                                        } }>
              <button className={ style.btn } onClick={ onOk && onOk() }>
                <div>
                  <span className={ style.btnText }>CANCEL</span>
                </div>
              </button>
              <button className={ style.btn } onClick={ onCancel && onCancel() }>
                <div>
                  <span className={ style.btnText }>OK</span>
                </div>
              </button>
            </div>
        )
    }
}

export default CalendarFooter;
