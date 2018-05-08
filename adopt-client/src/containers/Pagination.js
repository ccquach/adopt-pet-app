import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PageLink from '../components/PageLink';
import './Pagination.css';
import 'font-awesome/css/font-awesome.min.css';

const petsPerPage = 12;

class Pagination extends Component {
  static defaultProps = {
    onPageChange: () => {}
  };
  static propTypes = {
    currentPage: PropTypes.number.isRequired,
    petTotal: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      previous: undefined,
      next: undefined,
      last: undefined
    }
    this.handlePageChange = this.handlePageChange.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    const { previous, next, last } = this.state;
    const isUndefined = (
      previous === undefined && 
      next === undefined &&
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
  handlePageChange(id) {
    const page = +id.split("-")[1];
    if (page > 0 && page <= this.state.last) {
      this.props.onPageChange(page);
      this.setState({
        previous: page - 1,
        next: page + 1
      });
    }
  }
  render() {
    const { currentPage, petTotal } = this.props;
    const { previous, next } = this.state;
    const prevId = `PREV-${previous}`;
    const nextId = `NEXT-${next}`;
    const pageNumbers = [];

    // get page numbers
    for (let i = 1; i <= Math.ceil(petTotal / petsPerPage); i++) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
      const pageId = `CURR-${number}`;
      return (
        <PageLink
          key={number}
          onPageChange={this.handlePageChange.bind(this, pageId)}
          className={number === currentPage ? 'active' : null}
          path={`/pets/page/${number}`}
          text={number}
        />
      );
    });

    return (
      <ul id="pagination">
        {/* previous page */}
        <PageLink
          onPageChange={this.handlePageChange.bind(this, prevId)}
          className={previous < 1 ? 'disable-click' : null}
          path={`/pets/page/${previous}`}
          text={<i className="fa fa-angle-double-left" title="Previous page"></i>}
        />
        {/* page numbers */}
        {renderPageNumbers}
        {/* next page */}
        <PageLink
          onPageChange={this.handlePageChange.bind(this, nextId)}
          className={next > this.state.last ? 'disable-click' : null}
          path={`/pets/page/${next}`}
          text={<i className="fa fa-angle-double-right" title="Next page"></i>}
        />
      </ul>
    );
  }
}

export default Pagination;