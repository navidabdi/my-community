import { useParams } from 'react-router-dom';
import { usePost } from '@tribeplatform/react-sdk/hooks';
import PostBox from './PostBox';

const PostPage = () => {
  const params = useParams();
  const postId = params.postId as string;
  const { data: post } = usePost({
    id: postId,
    fields: 'all',
    // fields: {
    //   replies: {
    //     variables: {
    //       limit: 100,
    //     },
    //     fields: {
    //       createdBy: {
    //         member: 'all',
    //       },
    //       authMemberProps: 'all',
    //     },
    //   },
    // },
  });

  return (
    <section className="container flex flex-col gap-6 mb-10">
      <PostBox post={post} />
    </section>
  );
};

export default PostPage;
