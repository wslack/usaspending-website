import React from 'react';
import * as Icons from '../icons/Icons';

export default class Header extends React.Component {
    render() {
        return (
            <div className="warning-banner-wrap">
                <div className="warning-banner">
                    <div className="top-alert-icon">
                        <i className="usa-da-icon"><Icons.ExclamationTriangle /></i>
                    </div>
                    <div className="top-alert-text">
                        <p>This site is in beta. To view the current production site, visit&nbsp;
                            <a
                                href="https://www.usaspending.gov"
                                target="_blank"
                                rel="noopener noreferrer">
                                USAspending.gov
                            </a>.
                            Data from the current&nbsp;
                            <a
                                href="https://www.usaspending.gov"
                                target="_blank"
                                rel="noopener noreferrer">
                                USAspending.gov
                            </a> will be transferred to the new site, along with additional functionality, throughout the summer on a rolling basis.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
