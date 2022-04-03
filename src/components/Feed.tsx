import { simplifyPaginatedResult } from '@tribeplatform/react-sdk/utils';
import { Post } from '@tribeplatform/gql-client/types';
import { useFeed } from '@tribeplatform/react-sdk/hooks';
import InfiniteScroll from 'react-infinite-scroller';
import AddPost from './AddPost';
import WelcomeBox from './WelcomeBox';
import SideMenu from './SideMenu';
import PostBox from './PostBox';
import ProfileBox from './ProfileBox';

const FeedBox = () => {
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
    <div className="main-container custom-grid grid gap-2 lg:gap-5 justify-center xl:gap-6">
      <SideMenu />
      <div className="col-span-3 xl:col-span-1">
        <AddPost />
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
      </div>
      {localStorage.accessToken ? <ProfileBox /> : <WelcomeBox />}
    </div>
  );
};

export default FeedBox;
