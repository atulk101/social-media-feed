import React from "react";

export const Feeds = function(props) {
  return props.data.map((feed, index) => (
    <div key={index} className="card mb-3" style={{ maxWidth: "100%" }}>
      <div className="row no-gutters">
        <div className="col-md-2">
          <img
            src={feed.userinfo.picture}
            className="card-img rounded-circle"
            alt={"user" + index}
            style={{
              width: "100px",
              marginRight: "5px",
              marginTop: "10px"
            }}
          />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <h5 className="card-title">{feed.userinfo.username}</h5>
            <p className="card-text">
              <small className="text-muted">{feed.data.time} ago</small>
            </p>
            <p className="card-text">{feed.data.text}</p>

            <p className="card-text">
              <span className="ml-5">
                <i className="fa fa-comment-o" aria-hidden="true" />
              </span>
              <span className="ml-2">{feed.data.comments}</span>
              <span className="ml-5">
                <i className="fa fa-retweet" aria-hidden="true" />
              </span>
              <span className="ml-2">{feed.data.retweets}</span>
              <span className="ml-5">
                <i className="fa fa-heart-o" aria-hidden="true" />
              </span>
              <span className="ml-2">{feed.data.likes} </span>
              <span className="ml-5">
                <i className="fa fa-envelope-o" aria-hidden="true" />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  ));
};
