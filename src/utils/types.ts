import { assets, format, size } from "./badges";

export type Format = (typeof format)[number];
export type Size = (typeof size)[number];

export type Asset = (typeof assets)[number];

export type Category = Asset extends `${infer U}/${string}` ? U : never;
export type Slug = Asset extends `${string}/${infer U}` ? U : never;

export type BadgeDescriptor = {
	category: Category,
	slug: Slug,
	size: Size,
	format: Format
}
