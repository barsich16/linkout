import styles from './AboutMe.module.scss';
import Image from 'next/image';
import { EmailButton } from '@/app/components/screens/home/about-me/email-button/EmailButton';
import { DescriptionButton } from '@/app/components/screens/home/about-me/description-button/DescriptionButton';
import { APP_URL } from '@/app/constants';

export const AboutMe = ({ me }) => {
	if (!me) return 'Загрузка...';
	return (
		<div className={styles.me}>
			<div className={styles['image-wrapper']}>
				<Image
					src={`${APP_URL}${me.avatar}`}
					width={190}
					height={190}
					className={styles.image}
					alt={me.siteName}
					quality={100}
				/>
			</div>
			<div className={styles.heading}>
				<span>Bohdan</span>
				<Image
					src={`${APP_URL}/icons/verified.svg`}
					alt=""
					height={16}
					width={16}
				/>
			</div>
			<EmailButton />
			<DescriptionButton description={me.description} />
		</div>
	);
};
