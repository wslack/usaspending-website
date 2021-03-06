/**
 * FilterSidebar.jsx
 * Created by Kevin Li 3/20/17
 */

import React from 'react';

import FilterOption from './FilterOption';

const defaultProps = {
    options: [],
    components: []
};

const propTypes = {
    options: React.PropTypes.arrayOf(React.PropTypes.string),
    components: React.PropTypes.arrayOf(React.PropTypes.func)
};

export default class FilterSidebar extends React.Component {
    render() {
        const optionsList = this.props.options.map((name, i) => {
            const component = this.props.components[i];
            return (<FilterOption
                name={name}
                key={i}
                component={component}
                disabled={component === null} />);
        });

        return (
            <div className="search-sidebar">
                <h6 className="sidebar-header">Filter by:</h6>
                <div className="search-filters-wrapper">
                    {optionsList}
                </div>
            </div>
        );
    }
}

FilterSidebar.defaultProps = defaultProps;
FilterSidebar.propTypes = propTypes;
