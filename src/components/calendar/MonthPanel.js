import { Component, PropTypes } from 'react';
import moment from 'moment';

import ActiveButton from '../buttons';

import style from './Calendar.less';
import * as styles from './MonthPanel.less';
import { monthList, monthLongList, monthZhList } from './tools';


class MonthPanel extends Component {
    constructor() {
        super();
    }
    getStyles = (childProps, childState) => {
        const {selected, value, disabled} = childProps;
        const {hover} = childState;
        return {
            button: {
                boxSizing: 'border-box',
                color: hover || selected
                    ? 'rgb(0, 188, 212)'
                    : 'rgba(0, 0, 0, 0.870588)',
                fontSize: 14,
                margin: '0 auto',
                position: 'relative',
                textAlign: 'center',
                lineHeight: 'inherit',
                WebkitTapHighlightColor: 'rgba(0,0,0,0)',
                display: 'inline-block',
                width: '33.3%',
                fontFamily: 'Roboto, sans-serif',
                border: 'none',
                backgroundColor: '#fff',
                outline: 'none',
                height: '25%',
                cursor: hover
                    ? 'pointer'
                    : 'default'
            },
            label: {
                alignSelf: 'center',
                color: hover || selected
                    ? 'rgb(0, 188, 212)'
                    : disabled
                        ? '#eee'
                        : 'rgba(0, 0, 0, 0.870588)',
                fontSize: 17,
                fontWeight: hover
                    ? 450
                    : selected
                        ? 500
                        : 400,
                position: 'relative',
                top: -1,
                textAlign: 'justify',
                textJustify: 'inter-ideograph'
            }
        };
    }
    setupMonthButton = () => {
        const {currentSelected, type, onSelect, disabled} = this.props;
        let result = [];
        const list = type === 'en_long'
            ? monthLongList
            : type === 'en'
                ? monthList
                : monthZhList;
        const ActiveButtonProps = {
            btnStyle: styles.btn,
            defaultStyle: styles.label,
            selectedStyle: styles.btn_selected,
            disabledStyle: styles.btn_disabled
        }
        for (let i = 0; i < 12; i++) {
            result.push(<ActiveButton onClick={ onSelect } key={ i } value={ i } label={ list[i] } selected={ currentSelected === i ? true : false } disabled={ disabled(i) }
                          {...ActiveButtonProps}/>)
        }
        return result
    }
    render() {
        const {visible} = this.props;
        return (
            <div className={ style.selectPanelConstainer } style={ { display: visible ? 'block' : 'none', overflowY: 'hidden' } }>
              { this.setupMonthButton() }
            </div>
        )
    }
}


export default MonthPanel;
