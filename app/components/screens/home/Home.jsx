import axios from 'axios';
import styles from './Home.module.scss';
import { MetaTitle } from '@/app/components/ui/MetaTitle';
import { AboutMe } from '@/app/components/screens/home/about-me/AboutMe';
import { Grid } from '@/app/components/screens/home/grid/Grid';
import { Circles } from '@/app/components/ui/circles/Circles';

const Home = ({ links, me }) => {
	console.log(links);
	console.log(me);
	return (
		<section className={styles.section}>
			<MetaTitle title="Всі посилання тут"></MetaTitle>
			<div className={styles.container}>
				<AboutMe me={me} />
				<Grid links={links} />
			</div>
			<Circles />
		</section>
	);
};

export default Home;
