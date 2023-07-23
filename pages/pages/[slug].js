import { getPostBySlug, getAllPosts } from '../../lib/api';
import { useRouter } from 'next/router';
import BaseLayout from '../../layouts/base';
import ErrorPage from 'next/error';
import markdownToHtml from '../../lib/markdownToHtml';
import { Metadata } from 'next'

export const metadata = {
  title: 'asdf',
  description: 'fdsa',
}

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    // <Layout>
    //   <Base>{(title, excerpt)}</Base>
    // </Layout>
    <>
      {router.isFallback ? <span>Loading…</span> : <></>}
      <BaseLayout>
        {/* Image */}

        {/* Content */}

        {/* Container */}
        <div className="block bg-primary-1 text-white p-8 sm:mb-2">
          {post.heroUrl && post.heroUrl.length > 0 ? (
            <img className="w-full max-w-3xl mx-auto mb-20" src={post.heroUrl} alt={post.title + ' hero'} />
          ) : (
            ''
          )}
          {/* Content */}
          <div className="prose prose-white max-w-none" dangerouslySetInnerHTML={{ __html: post.content }}></div>

          <div>Meta description bs: {post.description}</div>
          <script>document.head.innerHTML += "<meta name="description" content="{post.description}"></meta>";</script>
        </div>

        {/* Button1 */}
        {/* Button2 */}
      </BaseLayout>
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'author', 'content', 'heroUrl', 'description']);
  const content = await markdownToHtml(post.content || '');
  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
