import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'The Company',
    Svg: require('../../static/img/vulpery.svg').default,
    description: (
      <>
        At <a className="my-link" href="https://www.vulpery.com">Vulpery UG</a> we focus on digitalization and innovation. Our goal is to lead the humankind into a smarter world.
      </>
    ),
  },
  {
    title: 'About Me',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        I am developing much stuff in my spare time.
        Thus, i try to document everything i think is also useful for others. May it be tutorials, projects or <i>how to</i> snippets on things i had to fight with.
      </>
    ),
  },
  {
    title: 'Smart Serving',
    Svg: require('../../static/img/obersmart.svg').default,
    description: (
      <>
        Our main product is <a className="my-link" href="https://www.obersmart.de">OberSmart</a> which fastens the ordering process and fights high workloads.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
