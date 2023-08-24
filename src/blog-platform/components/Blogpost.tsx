import { Box, Container } from "@chakra-ui/react";
import PostList from "./PostList";
import { posts } from "../data/posts";

const Blogpost = () => {
  return (
    <Box>
      <Container maxW="container.md" py={8}>
        <PostList posts={posts} />
      </Container>
    </Box>
  );
};

export default Blogpost;
