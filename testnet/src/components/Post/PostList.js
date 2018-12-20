import React from "react";
import { Header, Comment, Segment } from "semantic-ui-react";

const PostList = ({ posts, history, user }) => {
  console.log(user, posts);
  return (
    <Segment>
      {posts.map((post, index) => (
        <Segment
          key={index}
          style={{ cursor: "pointer" }}
          onClick={() => history.push(`/posts/${post.id}`)}
        >
          <Header
            as="h2"
            dividing
            block
            color={post.author === user.username ? "violet" : "black"}
          >
            {post.title}
            <Header.Subheader content={post.author} />
          </Header>
          <Comment>
            {post.body}
            <Comment.Metadata>{post.created_at}</Comment.Metadata>
          </Comment>
        </Segment>
      ))}
    </Segment>
  );
};

export default PostList;
