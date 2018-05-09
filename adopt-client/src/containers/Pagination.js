import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Pagination.css';
import 'font-awesome/css/font-awesome.min.css';

const petsPerPage = 12;

class Pagination extends Component {
  static propTypes = {
    currentPage: PropTypes.number.isRequired,
    petTotal: PropTypes.number.isRequired,
  };
  constructor(props) {
    super(props);
    const { petTotal, currentPage } = this.props;
    this.state = {
      previous: currentPage - 1 || undefined,
      next: currentPage + 1 || undefined,
      last: Math.ceil(petTotal / petsPerPage) || undefined
    }
  }
  componentWillReceiveProps(nextProps) {
    const { previous, next, last } = this.state;
    const isUndefined = (
      previous === undefined || 
      next === undefined ||
      last === undefined
    );
    const isDiffCurrent = (this.props.currentPage !== nextProps.currentPage);
    if (isUndefined || isDiffCurrent) {
      const { currentPage, petTotal } = nextProps;
      this.setState({
        previous: currentPage - 1,
        next: currentPage + 1,
        last: Math.ceil(petTotal / petsPerPage)
      });
    }
  }
  render() {
    const { currentPage, petTotal } = this.props;
    const { previous, next } = this.state;
    const pageNumbers = [];

    // get page numbers
    for (let i = 1; i <= Math.ceil(petTotal / petsPerPage); i++) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <Link
          key={number}
          to={`/pets/page/${number}`}
          id={`CURR-${number}`}
          className={number === currentPage ? 'active' : ''}
        >
          {number}
        </Link>
      );
    });

    return (
      <div id="pagination">
        {/* previous page */}
        <Link
          to={`/pets/page/${previous}`}
          id={`PREV-${previous}`}
          className={previous < 1 || !previous ? 'disable-click' : ''}
        >
          <i className="fa fa-angle-double-left" title="Previous page"></i>
        </Link>

        {/* page numbers */}
        {renderPageNumbers}

        {/* next page */}
        <Link
          to={`/pets/page/${next}`}
          id={`NEXT-${next}`}
          className={next > this.state.last ? 'disable-click' : null}
        >
          {/* &raquo; */}
          <i className="fa fa-angle-double-right" title="Next page"></i>
        </Link>
      </div>
    );
  }
}

export default Pagination;