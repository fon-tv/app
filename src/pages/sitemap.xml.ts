import { GetServerSideProps } from "next";

function generateSiteMap() {
	return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://jsonplaceholder.typicode.com</loc>
     </url>
     <url>
       <loc>https://jsonplaceholder.typicode.com/guide</loc>
     </url>
   </urlset>
 `;
}

function SiteMap() {
	// getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async function ({ res }) {
	// We make an API call to gather the URLs for our site
	// We generate the XML sitemap with the posts data
	const sitemap = generateSiteMap();

	res.setHeader("Content-Type", "text/xml");
	// we send the XML to the browser
	res.write(sitemap);
	res.end();

	return {
		props: {},
	};
};

export default SiteMap;
