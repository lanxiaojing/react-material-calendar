import React from 'react';
import moment from 'moment';
import style from './style/CalendarFooter.less';

class CalendarFooter extends React.Component {
    constructor(props) {
        super()
    }
    render() {
        const { visible, onOk, onCancel } = this.props;
        return (
            <div style={ { display: visible ? 'block' : 'none' } }>
                <div className={ style.footer }>
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
            </div>
        )
    }
}

export default CalendarFooter;
