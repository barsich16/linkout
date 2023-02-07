import styles from './Grid.module.scss';
import { GridItem } from '@/app/components/screens/home/grid/GridItem';

export const Grid = ({ links }) => {
	if (!links) return 'Загрузка...';
	return (
		<div className={styles.grid}>
			{links.map(link => (
				<GridItem key={link._id} item={link} />
			))}
		</div>
	);
};
