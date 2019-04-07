import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { addTweet } from "../../actions/feedsAction";
class Tweet extends Component {
  constructor(props) {
    super(props);
    this.state = { tweet: "", error: false, textLength: 0 };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: [e.target.value] });
    let textLength = e.target.value.trim().length;
    let rangeError = textLength > 255 || textLength === 0 ? true : false;
    this.setState({ textLength: textLength, error: rangeError });
  };

  addTweet = () => {
    let tweetData = {
      feeds: {
        userinfo: {
          email: "atul.k@valuelabs.com",
          username: "Atulk",
          picture: "image/user.png"
        },
        data: {
          text: this.state.tweet,
          media: "media1.jpg",
          time: new Date().toUTCString(),
          likes: 0,
          comments: 0,
          retweets: 0
        }
      }
    };
    if (this.state.error === false && this.state.tweet !== "") {
      this.props.addTweet(tweetData);
      this.setState({ tweet: "", textLength: 0 });
    }
  };
  render() {
    return (
      <div
        className="card mb-3"
        style={{ maxWidth: "100%", backgroundColor: "#EBF2FC" }}
      >
        <div className="row no-gutters">
          <div className="col-md-2">
            <img
              src="image/user.png"
              className="card-img rounded-circle"
              alt="user0"
              style={{ width: "80px", marginRight: "5px", marginTop: "10px" }}
            />
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <textarea
                placeholder="  What is happening?"
                onChange={this.handleChange}
                name="tweet"
                value={this.state.tweet}
                className={this.state.error ? "error" : ""}
              />

              <span
                class="badge badge-secondary text-badge"
                style={{
                  float: "right",
                  backgroundColor: this.state.error ? "red" : "green",
                  display: this.state.textLength > 0 ? "block" : "none"
                }}
              >
                {this.state.textLength}
              </span>
              <p className="card-text mt-1">
                <a href="javascript:void(0)" className="tweet-options">
                  <span>
                    <i
                      className="fa fa-file-image-o"
                      aria-hidden="true"
                      style={{ color: "#ABBFEF" }}
                    />
                  </span>
                </a>
                <span className="ml-5">
                  <i
                    className="fa fa-picture-o"
                    style={{ color: "#ABBFEF" }}
                    aria-hidden="true"
                  />
                </span>
                <span className="ml-5">
                  <i
                    className="fa fa-id-card-o"
                    aria-hidden="true"
                    style={{ color: "#ABBFEF" }}
                  />
                </span>
                <span className="ml-5">
                  <i
                    className="fa fa-map-marker"
                    aria-hidden="true"
                    style={{ color: "#ABBFEF" }}
                  />
                </span>
                <span className="ml-5">
                  <button
                    className="btn btn-primary tweet-btn"
                    style={{ marginBottom: "20px", float: "right" }}
                    onClick={this.addTweet}
                  >
                    Tweet
                  </button>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Tweet.propTypes = {
  addTweet: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  feeds: state.feeds.feeds
});

export default connect(
  mapStateToProps,
  { addTweet }
)(Tweet);
