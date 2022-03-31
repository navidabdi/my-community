import { simplifyPaginatedResult } from '@tribeplatform/react-sdk/utils';
import { Post } from '@tribeplatform/gql-client/types';
import { useFeed } from '@tribeplatform/react-sdk/hooks';

function App() {
  const { data } = useFeed({
    fields: {
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
    <div className="lg:w-3/4 m-auto flex flex-col">
      {posts.map((post, i) => (
        <div className="flex gap-2 bg-hacker-body p-2" key={post?.id}>
          <div className="flex flex-col justify-center">{i + 1}.</div>
          <div className="flex flex-col flex-grow">
            <div>{post.title}</div>
            <div className="flex gap-2 text-xs text-gray-500">
              <div>By {post.createdBy?.member?.name}</div>|
              <div>{post.reactionsCount} upvotes</div>|
              <div>{post.repliesCount} comments</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
