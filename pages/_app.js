// import Home from '@/app/components/screens/home/Home';
// import axios from 'axios';
// import { API_URL } from '@/app/constants';
// // import '../app/assets/styles/globals.scss';
//
// export default function HomePage(props) {
// 	return (
// 		<>
// 			<Home {...props} />
// 			qwqwqw
// 		</>
// 	);
// }
//
// export const getStaticProps = async () => {
// 	const { data: links } = await axios.get(`${API_URL}/links`);
// 	const { data: me } = await axios.get(`${API_URL}/me`);
//
// 	return {
// 		props: {
// 			links,
// 			me
// 		},
// 		revalidate: 60
// 	};
// };

// import Head from 'next/head'
// import { QueryClient, QueryClientProvider } from 'react-query'
import '../app/assets/styles/globals.scss';

// const queryClient = new QueryClient({
// 	defaultOptions: {
// 		queries: {
// 			refetchOnWindowFocus: false
// 		}
// 	}
// })

function MyApp({ Component, pageProps }) {
	return (
		// <QueryClientProvider client={queryClient}>
		// 	<Head>
		// 		<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
		// 		<meta
		// 			name="viewport"
		// 			content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1"
		// 		/>
		// 	</Head>
		<Component {...pageProps} />
		// </QueryClientProvider>
	);
}

export default MyApp;
