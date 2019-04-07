import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { getFeeds } from "../../actions/feedsAction";
import Tweet from "../Timeline/Tweet";
import { Feeds } from "../Timeline/Feeds";
class Timeline extends Component {
  state = {};
  componentDidMount() {
    this.props.getFeeds(this.props);
  }
  render() {
    const { feeds } = this.props;

    return (
      <div>
        <Tweet />
        <div className="mb-3" />
        <Feeds data={feeds} />
      </div>
    );
  }
}
Timeline.propTypes = {
  getFeeds: PropTypes.func.isRequired,
  feeds: PropTypes.array.isRequired
};
const mapStateToProps = state => ({
  feeds: state.feeds.feeds
});
export default connect(
  mapStateToProps,
  { getFeeds }
)(Timeline);
