import { useParams } from 'react-router-dom';
import { usePost } from '@tribeplatform/react-sdk/hooks';
import PostBox from './PostBox/PostBox';
import Loading from './Loading';

const PostPage = () => {
  const params = useParams();
  const postId = params.postId as string;
  const { data: post, isLoading } = usePost({
    id: postId,
    fields: {
      reactions: {
        fields: 'all',
        variables: {
          limit: 10,
        },
      },
      replies: {
        variables: {
          limit: 100,
        },
        fields: {
          createdBy: {
            member: 'basic',
          },
          authMemberProps: 'all',
        },
      },
      authMemberProps: 'all',
      createdBy: {
        member: 'basic',
      },
    },
  });

  return (
    <section className="container flex flex-col gap-6 mb-10">
      {isLoading ? <Loading /> : <PostBox post={post} />}
    </section>
  );
};

export default PostPage;
