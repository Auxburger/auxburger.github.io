import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero', styles.heroBanner)}>
            <div className="container">
                <img className={styles.heroImage} src="img/baby-yoda.png"></img>
                <h1 className={clsx('hero__title', styles.heroTitle)}>{siteConfig.title}</h1>
                <p className={clsx('hero__subtitle', styles.heroSubtitle)}>{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/projects/intro">
                        More about the Projects
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`Blog and Projects of Darius Augsburger`}
            description="This is the blog of Darius Augsburger. It is about helpful cool stuff, different technologies and projects.">
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
