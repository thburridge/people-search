import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { Post } from "../data/posts";

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <Box borderWidth="1px" borderRadius="md" p={4} marginBottom={4}>
      <Heading size="md">{post.title}</Heading>
      <Text mt={2}>{post.content}</Text>
      <Button colorScheme="blue" mt={4}>
        Read More
      </Button>
    </Box>
  );
};

export default PostCard;
