/**
 * TestStyleIconItem.jsx
 * Created by Kevin Li 1/3/17
 */

import React from 'react';

const propTypes = {
    icon: React.PropTypes.func,
    label: React.PropTypes.string
};

export default class TestStyleIconItem extends React.Component {
    render() {
        const Icon = this.props.icon;
        return (
            <li>
                <div className="icon-svg">
                    <Icon />
                </div>
                <div className="icon-label">
                    {this.props.label}
                </div>
            </li>
        );
    }
}

TestStyleIconItem.propTypes = propTypes;
