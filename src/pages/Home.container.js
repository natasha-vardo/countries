import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from './Home';
import { loadCountries } from '../store/countries/actions';

const mapStateToProps = (state) => ({
  countries: state.countries.countriesData,
  isError: state.countries.isError,
});

const mapDispatchToProps = (dispatch) => ({
  loadCountries: bindActionCreators(loadCountries, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);