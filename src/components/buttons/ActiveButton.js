import React from 'react';
import PropTypes from 'prop-types';

class ActiveButton extends React.Component {
    constructor() {
        super();
    }

    state = {
        hover: false,
        selectedStatus: false
    }

    static propTypes = {
        value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object]).isRequired,
        label: PropTypes
            .oneOfType([PropTypes.number, PropTypes.string])
            .isRequired,
        onClick: PropTypes.func,
        selected: PropTypes.bool,
        disabled: PropTypes.bool,
        selectedStyle: PropTypes.string.isRequired, // 传入Button的state和props，需要返回一个style对象，其中必须有button和label字段
        defaultStyle: PropTypes.string.isRequired, // 传入Button的state和props，需要返回一个style对象，其中必须有button和label字段
        disabledStyle: PropTypes.string.isRequired, // 传入Button的state和props，需要返回一个style对象，其中必须有button和label字段
        btnStyle: PropTypes.string.isRequired, // 传入Button的state和props，需要返回一个style对象，其中必须有button和label字段
    }

    componentDidMount() {
        this.setState({
            selectedStatus: this.props.selected
        })
    }

    handleMouseEnter = () => {
        if (this.props.disabled)
            return
        this.setState({
            hover: true
        });
    };

    handleMouseLeave = () => {
        if (this.props.disabled)
            return
        this.setState({
            hover: false
        });
    };

    handleClick = () => {
        this.setState({
            selectedStatus: !this.state.selectedStatus
        }, function() {
            this.props.onClick && this.props.onClick(this.props.value, this.state.selectedStatus)
        })
    }

    render() {
        const {value, onClick, disabled, selected, label, btnStyle, selectedStyle, defaultStyle, disabledStyle, disabledSelctedStyle} = this.props;
        const {hover, selectedStatus} = this.state;
        // const styles = getStyles && getStyles(this.props, this.state);
        
        return <button className={ btnStyle } onClick={ this.handleClick } disabled={ typeof disabled === 'undefined' || !disabled ? false : true }>
                 <span className={ disabled && selected ? `${disabledStyle} ${disabledSelctedStyle}` : disabled ? `${defaultStyle} ${disabledStyle}` : selected ? `${defaultStyle} ${selectedStyle}` : `${defaultStyle}` } disabled={disabled} selected={selected}>{ label }</span>
               </button>
    }
}

export default ActiveButton;
