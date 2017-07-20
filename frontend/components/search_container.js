import React from 'react';
import { connect } from 'react-redux';
import { updateFilter, resetFilter } from '../actions/filter_actions';

import { collisionsToArray } from '../reducers/selectors';

import FilterForm from './filter_form';
import MapContainer from './map_container';
import HighlightContainer from './highlight_container';

const mapStateToProps = state => ({
  collisions: collisionsToArray(state),
  filters: state.filters,
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filters) => dispatch(updateFilter(filters)),
  resetFilter: () => dispatch(resetFilter()),
});

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.updateFilter();
  }

  componentWillUnmount() {
    this.props.resetFilter();
  }

  render() {
    let { collisions, filters,
      updateFilter, resetFilter } = this.props;
    return(
      <div className='container'>
        <div className='main'>
          <aside>
            <div className='logo'>
              <img src={window.staticImages.logo} />
              <h1>CollisionViz</h1>
            </div>
            <h3>
            A visualization of motor vehicle collisions
            in NYC on 6/22/2017.<br />
            Click on markers for collision details.</h3>
            <div className='links'>
            <a href='https://github.com/davidfeng88' target="_blank">
            <i className="fa fa-github fa-2x" aria-hidden="true"></i>
            </a>
            <a href='https://www.linkedin.com/in/gfeng/' target="_blank">
            <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
            </a>
            <a href='https://angel.co/ge-david-feng' target="_blank">
            <i className="fa fa-angellist fa-2x" aria-hidden="true"></i>
            </a>
            <a href='https://davidfeng.us/' target="_blank">
            <i className="fa fa-user fa-2x" aria-hidden="true"></i>
            </a>
            </div>
            <FilterForm
              filters={filters}
              updateFilter={updateFilter}
              resetFilter={resetFilter}
              collisions={collisions}
            />
          </aside>
          <MapContainer />
        </div>
        <HighlightContainer />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
