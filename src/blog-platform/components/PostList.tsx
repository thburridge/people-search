import { Box, Heading } from "@chakra-ui/react";
import { Post } from "../data/posts";
import PostCard from "./PostCard";

interface PostListProps {
  posts: Post[];
}

const PostList = ({ posts }: PostListProps) => {
  return (
    <Box>
      <Heading size="lg" mb={4}>
        Recent Posts
      </Heading>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </Box>
  );
};

export default PostList;
