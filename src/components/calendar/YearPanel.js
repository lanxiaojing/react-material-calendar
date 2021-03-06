import React from 'react';
import moment from 'moment';

import ActiveButton from '../buttons';
import style from './style/Calendar.less';
import * as styles from './style/YearPanel.less';

export class YearPanel extends React.Component {
    constructor() {
        super();
    }
    setupYearButton = () => {
        const {yearRange, currentSelected, onSelect, yearBeginFrom} = this.props;
        const ActiveButtonProps = {
            btnStyle: styles.btn,
            // defaultStyle: styles.btn_label_default,
            // selectedStyle: styles.btn_selected,
            // disabledStyle: styles.btn_disabled,

            onClick: onSelect,
        }
        let result = [];
        for (let i = 0; i < yearRange; i++) {
            result.push(<ActiveButton value={ yearBeginFrom + i } label={ yearBeginFrom + i } selected={ yearBeginFrom + i === currentSelected ? true : false } key={ i } disabled={ false } {...ActiveButtonProps}/>)
        }
        return result

    }
    render() {
        const {visible} = this.props;
        return (
            <div className={ style.selectPanelConstainer } style={ { display: visible ? 'block' : 'none' } }>
              <div className={ style.panelContent }>
                { this.setupYearButton() }
              </div>
            </div>
        )
    }
}


export default YearPanel;
