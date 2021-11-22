import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import markdownToHtml from '../lib/markdownToHtml';

export default function About({ aboutSection }) {
  console.log(aboutSection);
  return (
    <section>
      <div dangerouslySetInnerHTML={{ __html: aboutSection.htmlContent }} />
    </section>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const aboutFile = join(process.cwd(), '_nav/about.md');
  const fileContents = fs.readFileSync(aboutFile, 'utf8');
  const { content } = matter(fileContents);
  const htmlContent = await markdownToHtml(content || '');

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      aboutSection: {
        htmlContent,
      },
    },
  };
}
