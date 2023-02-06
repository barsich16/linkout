/** @type {import('next').NextConfig} */
//добавити в images домен який буде на продакшені
const nextConfig = {
	images: { domains: ['localhost', 'i.ytimq.com'] },
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV
	}
};

module.exports = nextConfig;
