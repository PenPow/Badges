import type { APIRoute } from 'astro';
import { readFile } from "node:fs/promises";
import { badges, heights } from '../../../../utils/badges';
import { pathOverrides } from '../../../../utils/overrides';
import type { Slug, Category, Format, Size } from '../../../../utils/types';
import sharp from 'sharp';

const formats: Record<Format, `image/${string}`> = {
	png: "image/png",
	svg: "image/svg+xml",
	jpeg: "image/jpeg",
	jpg: "image/jpeg",
	avif: "image/avif",
	webp: "image/webp",
}

export const GET: APIRoute = async ({ params }) => {
	const format = params["format"] as Format;
	let category = params["category"] as Category;
	let slug = params["slug"] as Slug;
	const size = params["size"] as Size;

	if(size.endsWith("minimal")) {
		const override = pathOverrides[slug];
	
		if(override) {
			const [overrideCategory, overrideSlug] = override.split('/') as [Category, Slug];
	
			slug = overrideSlug
			category = overrideCategory;
		}
	}


	const img = await readFile(`src/assets/${category}/${slug}/${size}.svg`);

	const isSVG = format === "svg";
	if(!isSVG) {
		const formatted = sharp(img).resize({ height: heights[size] });

		// Set background to white if image doesn't support transparency
		if(["jpeg", "jpg"].includes(format)) formatted.flatten({ background: "#FFFFFF" })
		else formatted.ensureAlpha(1)

		return new Response(await formatted.toFormat(format).toBuffer(), { headers: { "Content-Type": formats[format] }});
	}

	return new Response(img, { headers: { "Content-Type": formats[format] }});
}

export const prerender = true;
export function getStaticPaths() {
	const paths = badges.map((path) => {
		return {
			params: path
		}
	});

	return paths;
}
