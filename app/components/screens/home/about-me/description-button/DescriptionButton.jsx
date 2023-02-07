import { useOutside } from '@/app/hooks/useOutside';
import parse from 'html-react-parser';
import cn from 'classnames';
import styles from './DescriptionButton.module.scss';

export const DescriptionButton = ({ description }) => {
	const { isShow, ref, setIsShow } = useOutside(false);

	return (
		<div className={styles.parent} ref={ref}>
			<button
				onClick={() => setIsShow(!isShow)}
				className={cn({
					[styles.active]: isShow
				})}
			>
				<span>Про мене</span>
			</button>
			{isShow && <article>{parse(description)}</article>}
		</div>
	);
};
