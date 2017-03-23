/**
 * AccountRankVisualizationSection.jsx
 * Created by Kevin Li 3/22/17
 */

import React from 'react';
import _ from 'lodash';

import * as Icons from 'components/sharedComponents/icons/Icons';

import ComingSoonLabel from 'components/sharedComponents/ComingSoonLabel';
import RankVisualization from 'components/search/visualizations/rank/RankVisualization';
import RankVisualizationScopeButton from
    'components/search/visualizations/rank/RankVisualizationScopeButton';

const propTypes = {
    categoryScope: React.PropTypes.string,
    changeScope: React.PropTypes.func,
    nextPage: React.PropTypes.func,
    previousPage: React.PropTypes.func,
    total: React.PropTypes.number,
    page: React.PropTypes.number,
    loading: React.PropTypes.bool
};

export default class AccountRankVisualizationSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            windowWidth: 0,
            visualizationWidth: 0,
            labelWidth: 0
        };

        this.handleWindowResize = _.throttle(this.handleWindowResize.bind(this), 50);
        this.clickPrevious = this.clickPrevious.bind(this);
        this.clickNext = this.clickNext.bind(this);
    }

    componentDidMount() {
        this.handleWindowResize();
        window.addEventListener('resize', this.handleWindowResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize);
    }

    handleWindowResize() {
        // determine if the width changed
        const windowWidth = window.innerWidth;
        if (this.state.windowWidth !== windowWidth) {
            // width changed, update the visualization width
            this.setState({
                windowWidth,
                visualizationWidth: this.sectionHr.offsetWidth,
                labelWidth: _.min([this.sectionHr.offsetWidth / 3, 270])
            });
        }
    }

    clickPrevious() {
        this.props.previousPage();
    }

    clickNext() {
        this.props.nextPage();
    }

    render() {
        let disableNext = false;
        let disablePrev = false;
        let hidePager = '';

        if (this.props.total < this.props.page + 1) {
            disableNext = true;
        }

        if (this.props.page <= 1) {
            disablePrev = true;
        }

        if (this.props.total < 1 || this.props.loading) {
            hidePager = 'hide';
        }

        return (
            <div
                className="results-visualization-rank-section"
                id="results-section-rank">
                <h3>Spending by Category</h3>
                <hr
                    className="results-divider"
                    ref={(hr) => {
                        this.sectionHr = hr;
                    }} />

                <div className="visualization-top">
                    <div className="visualization-description">
                        <div className="content">
                            View a list of the top Program Activities from highest to lowest. Filter
                            your results more (at left) and watch this graph update automatically.
                             View your results in a bar graph or a tree map.
                        </div>
                    </div>
                    <div className="visualization-period">
                        <div className="content">
                            <ul>
                                <li>
                                    <RankVisualizationScopeButton
                                        value="program_activity"
                                        label="Program Activity"
                                        active={this.props.categoryScope === 'program_activity'}
                                        changeScope={this.props.changeScope} />
                                </li>
                                <li className="coming-soon">
                                    <RankVisualizationScopeButton
                                        value="object_class"
                                        label="Object Class"
                                        active={this.props.categoryScope === 'object_class'}
                                        changeScope={this.props.changeScope}
                                        disabled />
                                    <ComingSoonLabel />
                                </li>
                                <li className="coming-soon">
                                    <RankVisualizationScopeButton
                                        value="tas"
                                        label="Treasury Account Symbol (TAS)"
                                        active={this.props.categoryScope === 'tas'}
                                        changeScope={this.props.changeScope}
                                        disabled />
                                    <ComingSoonLabel />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <RankVisualization
                    {...this.props}
                    width={this.state.visualizationWidth}
                    labelWidth={this.state.labelWidth}
                    disableTooltip />

                <div className={`visualization-pager-container ${hidePager}`}>
                    <button
                        className="visualization-pager"
                        title="Show previous five"
                        aria-label="Show previous five"
                        disabled={disablePrev}
                        onClick={this.clickPrevious}>
                        <div className="pager-content">
                            <div className="icon">
                                <Icons.AngleLeft alt="Show previous five" />
                            </div>
                            <div className="pager-label">
                                Show previous five
                            </div>
                        </div>
                    </button>
                    <button
                        className="visualization-pager"
                        title="Show next five"
                        aria-label="Show next five"
                        disabled={disableNext}
                        onClick={this.clickNext}>
                        <div className="pager-content">
                            <div className="pager-label next">
                                Show next five
                            </div>
                            <div className="icon">
                                <Icons.AngleRight alt="Show next five" />
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        );
    }
}

AccountRankVisualizationSection.propTypes = propTypes;