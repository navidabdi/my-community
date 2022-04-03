import { simplifyPaginatedResult } from '@tribeplatform/react-sdk/utils';
import { Post } from '@tribeplatform/gql-client/types';
import { useFeed } from '@tribeplatform/react-sdk/hooks';
import InfiniteScroll from 'react-infinite-scroller';
import PostBox from '../PostBox/PostBox';

const Feed = () => {
  const { data, fetchNextPage, hasNextPage } = useFeed({
    fields: {
      reactions: {
        fields: 'all',
        variables: {
          limit: 10,
        },
      },
      authMemberProps: 'all',
      createdBy: {
        member: 'basic',
      },
    },
    variables: {
      limit: 10,
    },
  });
  const { nodes: posts } = simplifyPaginatedResult<Post>(data);

  return (
    <section className="flex flex-col gap-6 mb-10 ">
      <InfiniteScroll
        pageStart={0}
        loadMore={fetchNextPage}
        hasMore={hasNextPage}
      >
        {posts.map((post) => (
          <PostBox post={post} key={post.id} />
        ))}
      </InfiniteScroll>
    </section>
  );
};

export default Feed;
