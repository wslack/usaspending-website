/**
 * DateRange.jsx
 * Created by Emily Gullo 11/03/2016
 **/

import React from 'react';
import DatePicker from 'components/sharedComponents/DatePicker';

const defaultProps = {
    startDate: '01/01/2016',
    endDate: '12/31/2016',
    startingTab: 1
};

const propTypes = {
    startingTab: React.PropTypes.number,
    onDateChange: React.PropTypes.func,
    startDate: React.PropTypes.object,
    endDate: React.PropTypes.object,
    showError: React.PropTypes.func,
    hideError: React.PropTypes.func
};

export default class DateRange extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showError: false,
            header: '',
            errorMessage: ''
        };
    }

    render() {
        return (
            <div className="date-range-option">
                <div className="date-range-wrapper">
                    <DatePicker
                        type="startDate"
                        title="Start Date"
                        tabIndex={this.props.startingTab}
                        onDateChange={this.props.onDateChange}
                        value={this.props.startDate}
                        opposite={this.props.endDate}
                        showError={this.props.showError}
                        hideError={this.props.hideError} />
                    <DatePicker
                        type="endDate"
                        title="End Date"
                        tabIndex={this.props.startingTab + 4}
                        onDateChange={this.props.onDateChange}
                        value={this.props.endDate}
                        opposite={this.props.startDate}
                        showError={this.props.showError}
                        hideError={this.props.hideError} />
                </div>
            </div>
        );
    }
}
DateRange.defaultProps = defaultProps;
DateRange.propTypes = propTypes;