import { GET_FEEDS, ADD_TWEET } from "./types";

export const getFeeds = () => {
  let dummyPayload = {
    feeds: {
      userinfo: {
        email: "techm@yopmail.com",
        username: "Rayn",
        picture: "image/user1.jpeg"
      },
      data: {
        text:
          "The changing faces of South Indian cinema How digital media,an evolving audience and a new crop of writer-directors who want to stay true to their lived realities are changing the face of South cinema",
        media: "media1.jpg",
        time: "5 mins",
        likes: 20,
        comments: 10,
        retweets: 40
      }
    }
  };

  return {
    type: GET_FEEDS,
    payload: dummyPayload // ajax request or dummy payload
  };
};

export const addTweet = payload => {
  return {
    type: ADD_TWEET,
    payload: payload
  };
};
