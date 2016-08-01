import React, { Component } from 'react'
import { connect } from 'react-redux';
import Post from 'components/Post'
import * as actions from 'actions/creator-post-feed';


/* crappy styles */
const postFeedStyle = {
    maxWidth: '500px',
    marginLeft: 'auto',
    marginRight: 'auto'
}

const postSpacerStyle = {
    marginTop: '0px',
    marginBottom: '24px'
}

/* component */
class PostFeed extends Component {
    componentDidMount() {
      console.log(this.props);
      //this.props.fetchPosts();
    }

    renderPost(post) {
        return (
            <div key={post.id}
                 style={postSpacerStyle}>
                <Post post={post} />
            </div>
        )
    }

    render() {
      return (<div style={postFeedStyle}>
                { this.props.posts && this.props.posts.map(this.renderPost) }
            </div>)

        // return isLoading ?
        //     'Loading!' :
        //     (<div style={postFeedStyle}>
        //         { posts && posts.map(this.renderPost) }
        //     </div>)
    }
};

function mapStateToProps(state){
  return {
    posts: state.postFeed
  }
}
export default connect(mapStateToProps, actions)(PostFeed);
