/**
 * CountryType.jsx
 * Created by Emily Gullo 11/28/2016
 **/

import React from 'react';

const propTypes = {
    toggleCountry: React.PropTypes.func,
    locationOption: React.PropTypes.string,
    countries: React.PropTypes.array
};

const defaultProps = {
    countries: [
        "All",
        "USA",
        "Foreign"
    ]
};

export default class CountryType extends React.Component {

    render() {
        const countries =
            this.props.countries.map((name) => {
                if (name === this.props.locationOption) {
                    return (<span key={`location-${name}`}>
                        <input
                            type="radio"
                            id={`location-${name}`}
                            name="location"
                            value={name}
                            defaultChecked
                            onClick={this.props.toggleCountry} />
                        <label htmlFor={`location-${name}`}>{name}</label>
                    </span>);
                }
                return (
                    <span key={`location-${name}`}>
                        <input
                            type="radio"
                            id={`location-${name}`}
                            name="location"
                            value={name}
                            onClick={this.props.toggleCountry} />
                        <label htmlFor={`location-${name}`}>{name}</label>
                    </span>);
            });

        return (
            <div className="location-radio">
                <p>Show Only:</p>
                { countries }
            </div>
        );
    }
}
CountryType.propTypes = propTypes;
CountryType.defaultProps = defaultProps;
