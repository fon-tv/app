import MillionLint from "@million/lint";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "standalone",
	images: {
        deviceSizes: [
            480,
            640,
            768,
            1200,
        ],
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
				port: "9000",
				pathname: "/bucket/**",
				search: "",
			},
		],
	},
};

export default MillionLint.next({ rsc: true })(nextConfig);
