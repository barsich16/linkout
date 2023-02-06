import Home from '@/app/components/screens/home/Home';
import axios from 'axios';
import { API_URL } from '@/app/constants';

export default function HomePage(props) {
	return (
		<>
			<Home {...props} />
			qwqwqw
		</>
	);
}

export const getStaticProps = async () => {
	const { data: links } = await axios.get(`${API_URL}/links`);
	const { data: me } = await axios.get(`${API_URL}/me`);

	return {
		props: {
			links,
			me
		},
		revalidate: 60
	};
};
