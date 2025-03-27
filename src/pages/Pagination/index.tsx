import React, {useState, useEffect} from 'react';

import { CodeBlock, Heading, Tabs, Pagination } from '@fightclub/components';

import Code from './code.mdx';


interface Post {
  id: number;
  title: string;
  body: string;
}

const PaginationExample = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState<Post[]>([]);
  const [totalPosts, setTotalPosts] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    async function fetchPosts() {
      // Fetch data from JSONPlaceholder with pagination
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${itemsPerPage}`
      );
      const data = await res.json();
      const totalCount = res.headers.get("X-Total-Count"); // Total items count for pagination
      setPosts(data);
      setTotalPosts(Number(totalCount));
    }

    fetchPosts();
  }, [currentPage]);

  const preview = <>
  <div>
      <h2>Paginated List from JSONPlaceholder</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      <Pagination
        totalItems={totalPosts}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
    </>;

  return (
    <div>
      <Heading variation="h1" size="level1" data-observable="true">
        Pagination
      </Heading>

      <Tabs>
        <Tabs.TriggerGroup>
          <Tabs.Trigger data-tab="0">PREVIEW</Tabs.Trigger>
          <Tabs.Trigger data-tab="1">CODE</Tabs.Trigger>
        </Tabs.TriggerGroup>
        <Tabs.ContentGroup>
          <Tabs.Content data-tab="0">{preview}</Tabs.Content>
          <Tabs.Content data-tab="1">
            <CodeBlock><Code/></CodeBlock>
          </Tabs.Content>
        </Tabs.ContentGroup>
      </Tabs>
    </div>
  );
};

export default PaginationExample;
