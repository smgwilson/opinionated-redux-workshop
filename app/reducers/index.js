import { FETCH_CREATOR_POST_FEED_START, FETCH_CREATOR_POST_FEED_SUCCESS } from 'actions/creator-post-feed'

const initialState = {};
export const postFeed = (state = initialState, action) => {
  return [{
    title: 'Something'
  }];
}
