import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am a 3rd year college student studying Information Technology. My hobbies include gaming, reading, and listening to music. I especially enjoy video game soundtracks because they help me focus and relax.

My favorite food is fried chicken, which I always enjoy as a comfort meal.

In the next five years, I see myself working in a job that may not be connected to my current course, but I am open to learning new skills and finding the right path for me.</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      </section>
    </Layout>
  );
}

