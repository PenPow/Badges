export function capitalizeEachWord(str: string) {
	return str.replaceAll('-', ' ').split(" ").map((word) => word[0]?.toUpperCase() + word.substring(1)).join(" ")
}
