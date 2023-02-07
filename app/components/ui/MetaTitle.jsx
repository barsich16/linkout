import Head from 'next/head';

export const MetaTitle = ({ title }) => {
	return (
		<Head>
			<title>{title}</title>
		</Head>
	);
};
