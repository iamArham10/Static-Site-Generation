import { getPostData } from '../lib/posts';

export default function Home({ postData }) {
  return (
    <div>
      <h1>{postData.data.title}</h1>
      <p>Published on: {postData.data.date}</p>
      <div dangerouslySetInnerHTML={{ __html: postData.content }} />
    </div>
  );
}

export async function getStaticProps() {
  const postData = await getPostData();
  return {
    props: {
      postData
    }
  };
}