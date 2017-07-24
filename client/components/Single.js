import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
  render() {
    const { postId } = this.props.params;
    const i = this.props.posts.findIndex((post) => {
      return post.code === postId;
    });
    const post = this.props.posts[i];
    const postComments = this.props.comments[postId] || [];

    return (
      <div className="single-photo">
        <Photo i={i} post={post} key={i} {...this.props} />
        <Comments postComments={postComments} {...this.props}></Comments>
      </div>
    );
  }
});

export default Single;