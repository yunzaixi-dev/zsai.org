import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '平等',
    Svg: require('@site/static/img/balance.svg').default,
    description: (
      <>
        人人平等是我们社区的基础。无论您的背景、经验或专业水平如何，
        每一位成员的声音都被同等重视，每一种观点都值得被倾听。
      </>
    ),
  },
  {
    title: '开放',
    Svg: require('@site/static/img/door_open.svg').default,
    description: (
      <>
        我们拥抱开放的理念和透明的协作。知识没有边界，社区没有门槛，
        开源精神引领我们共同探索未知的可能。
      </>
    ),
  },
  {
    title: '共享',
    Svg: require('@site/static/img/share.svg').default,
    description: (
      <>
        分享是创造价值的核心。通过共享经验、代码和智慧，
        我们建立起紧密连接的网络，让每个贡献都能产生更大的影响。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
