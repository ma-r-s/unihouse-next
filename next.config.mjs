/** @type {import('next').NextConfig} */
import Icons from "unplugin-icons/webpack";
const nextConfig = {
	reactStrictMode: true,
	webpack(config) {
		config.plugins.push(
			Icons({
				compiler: "jsx",
				jsx: "react",
				extension: "jsx",
			})
		);

		return config;
	},
};
export default nextConfig;
