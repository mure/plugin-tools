import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`${siteConfig.title}`} description="Set up a Grafana plugin environment effortlessly.">
      <Head>
        <link rel="canonical" href="https://grafana.com/developers/plugin-tools" />
        <meta httpEquiv="refresh" content="0; url=https://grafana.com/developers/plugin-tools" />
      </Head>
      <main className="container">
        <p className="margin-top--xl text--center">
          This site has moved to{' '}
          <a href="https://grafana.com/developers/plugin-tools">https://grafana.com/developers/plugin-tools</a>
        </p>
      </main>
    </Layout>
  );
}
