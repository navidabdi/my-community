import { simplifyPaginatedResult } from '@tribeplatform/react-sdk/utils';
import { Post } from '@tribeplatform/gql-client/types';
import { useFeed } from '@tribeplatform/react-sdk/hooks';
import InfiniteScroll from 'react-infinite-scroller';
import PostBox from '../PostBox/PostBox';
import ShareBox from '../PostBox/ShareBox';
import { useState } from 'react';
import Loading from '../Loading';

const Feed = () => {
  const [trigerShareBox, setTrigerShareBox] = useState<boolean>(false);

  const [shareLink, setShareLink] = useState<string>('');

  const { data, fetchNextPage, hasNextPage, isLoading } = useFeed({
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
      {isLoading ? (
        <Loading />
      ) : (
        <InfiniteScroll
          pageStart={0}
          loadMore={fetchNextPage}
          hasMore={hasNextPage}
        >
          {posts.map((post) => (
            <PostBox
              post={post}
              setShareLink={setShareLink}
              setTrigerShareBox={setTrigerShareBox}
              trigerShareBox={trigerShareBox}
              key={post.id}
            />
          ))}
        </InfiniteScroll>
      )}
      {trigerShareBox && (
        <ShareBox setTrigerShareBox={setTrigerShareBox} shareLink={shareLink} />
      )}
    </section>
  );
};

export default Feed;
