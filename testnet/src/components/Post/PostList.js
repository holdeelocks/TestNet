import React from "react";
import { Header, Comment, Segment } from "semantic-ui-react";

const PostList = ({ posts, history, user }) => {
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
            color={post.author !== user.username ? "teal" : null}
          >
            {post.title}
            <Header.Subheader>
              {post.author}
              {post.author === user.username && " (you)"}
            </Header.Subheader>
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
