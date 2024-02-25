import { capitalizeEachWord } from "./strings";
import type { Asset, Size, Slug } from "./types";

export const pathOverrides: Partial<Record<Slug, Asset>> = {
	"bitbucket-pipelines": "available/bitbucket",
	"bitbucket-singular": "available/bitbucket",
	"buy-us-a-coffee": "donate/buy-me-a-coffee",
	"codeberg-singular": "available/codeberg",
	"deno-land-x": "supported/deno",
	"discord-bot": "social/discord-singular",
	"digitalocean-marketplace": "available/digitalocean",
	"docker": "built-with/docker",
	"docker-hub": "built-with/docker",
	"fabric-api": "supported/fabric",
	"github-codespaces": "available/github",
	"github-enhancements": "available/github",
	"github-issues": "available/github",
	"github-marketplace": "available/github",
	"github-singular": "available/github",
	"ios": "available/app-store",
	"jira-issues": "social/jira-enhancements",
	"github-pages": "available/github",
	"github-workflows": "available/github",
	"kofi-singular-alt": "donate/kofi-singular",
	"mac-app-store": "available/app-store",
	"macos": "available/app-store",
	"modrinth-gallery": "available/modrinth",
	"nextjs": "built-with/next",
	"nuxtjs": "built-with/nuxt",
	"ps3": "supported/ps5",
	"ps4": "supported/ps5",
	"quilted-fabric-api": "supported/quilt",
	"quilt-standard-libraries": "supported/quilt",
	"railway": "built-with/railway",
	"setup": "documentation/installation",
	"sveltekit": "built-with/svelte",
	"vuejs": "built-with/vue",
	"xbox-360": "supported/xbox-series",
	"xbox-one": "supported/xbox-series",
}

export function getBadgeName(slug: Slug, size: Size): string {
	let badgeName: string;

    // god save the never-ending switch statement
	// unfortunately, for performance reasons this is the best approach
	//
	// I hate it so much along with the other arrays however programming it to build it dynamically adds a lot of fs overhead
	// which means the builds take even longer than they already take to index and run through a couple thousand paths
	switch(slug) {
		case "alternativeto": {
			badgeName = "AltTo" // alt gets replaced with alternative later
			break;
		}
		case "builtbybit": {
			badgeName = "BuiltByBit"
			break;
		}
		case "codemc": {
			badgeName = "CodeMC";
			break;
		}
		case "codesandbox": {
			badgeName = "CodeSandbox";
			break;
		}
		case "crates-io": {
			badgeName = "crates.io"
			break;
		}
		case "curseforge": {
			badgeName = "CurseForge";
			break;
		}
		case "deno-land-x": {
			badgeName = "deno.land/x"
			break;
		}
		case "digitalocean": {
			badgeName = "DigitalOcean";
			break;
		}
		case "digitalocean-marketplace": {
			badgeName = "DigitalOcean Marketplace";
			break;
		}
		case "f-droid": {
			badgeName = "F-Droid";
			break;
		}
		case "github": {
			badgeName = "GitHub";
			break;
		}
		case "github-container-registry": {
			badgeName = "GitHub Container Registry";
			break;
		}
		case "github-marketplace": {
			badgeName = "GitHub Marketplace";
			break;
		}
		case "gitlab": {
			badgeName = "GitLab";
			break;
		}
		case "itch-io": {
			badgeName = "itch.io";
			break;
		}
		case "jitpack": {
			badgeName = "JitPack";
			break;
		}
		case "jwpepper": {
			badgeName = "JWPepper";
			break;
		}
		case "nexusmods": {
			badgeName = "NexusMods";
			break;
		}
		case "npm": {
			badgeName = "npm";
			break;
		}
		case "nuget": {
			badgeName = "NuGet";
			break;
		}
		case "pypi": {
			badgeName = "PyPI";
			break;
		}
		case "rubygems": {
			badgeName = "RubyGems";
			break;
		}
		case "soundcloud": {
			badgeName = "SoundCloud";
			break;
		}
		case "sourceforge": {
			badgeName = "SourceForge";
			break;
		}
		case "stackblitz": {
			badgeName = "StackBlitz";
			break;
		}
		case "advent-of-code": {
			badgeName = "Advent of Code";
			break;
		}
		case "appveyor": {
			badgeName = "AppVeyor";
			break;
		}
		case "assemblyscript": {
			badgeName = "AssemblyScript";
			break;
		}
		case "autohotkey": {
			badgeName = "AutoHotkey";
			break;
		}
		case "azure-devops": {
			badgeName = "Azure DevOps";
			break;
		}
		case "bepinhacks": {
			badgeName = "BepinHacks";
			break;
		}
		case "chatgpt": {
			badgeName = "ChatGPT";
			break;
		}
		case "chakra-ui": {
			badgeName = "Chakra UI";
			break;
		}
		case "chartjs": {
			badgeName = "Chart.js";
			break;
		}
		case "cmake": {
			badgeName = "CMake";
			break;
		}
		case "cpp": {
			badgeName = "C++";
			break;
		}
		case "csharp": {
			badgeName = "C#";
			break;
		}
		case "discord-js": {
			badgeName = "discord.js";
			break;
		}
		case "esbuild": {
			badgeName = "ESBuild";
			break;
		}
		case "javascript": {
			badgeName = "JavaScript";
			break;
		}
		case "mkdocs": {
			badgeName = "MkDocs";
			break;
		}
		case "nativescript": {
			badgeName = "NativeScript";
			break;
		}
		case "nextjs": {
			badgeName = "Next.js";
			break;
		}
		case "nuxtjs": {
			badgeName = "Nuxt.js";
			break;
		}
		case "php": {
			badgeName = "PHP";
			break;
		}
		case "ruby-on-rails": {
			badgeName = "Ruby on Rails";
			break;
		}
		case "sveltekit": {
			badgeName = "SvelteKit";
			break;
		}
		case "tailwindcss": {
			badgeName = "TailwindCSS";
			break;
		}
		case "typescript": {
			badgeName = "TypeScript";
			break;
		}
		case "vuejs": {
			badgeName = "Vue.js";
			break;
		}
		case "webassembly": {
			badgeName = "WebAssembly";
			break;
		}
		case "wordpress": {
			badgeName = "WordPress";
			break;
		}
		case "docs-rs": {
			badgeName = "docs.rs";
			break;
		}
		case "installation": {
			badgeName = "Installation Guide";
			break;
		}
		case "github-pages-docs": {
			badgeName = "GitHub Pages";
			break;
		}
		case "gitbook": {
			badgeName = "GitBook";
			break;
		}
		case "setup": {
			badgeName = "Setup Guide";
			break;
		}
		case "buy-me-a-coffee": {
			badgeName = "Buy Me a Coffee";
			break;
		}
		case "buy-us-a-coffee": {
			badgeName = "Buy Us a Coffee";
			break;
		}
		case "github-sponsors-plural": {
			badgeName = "GitHub Sponsors Plural";
			break;
		}
		case "github-sponsors-singular": {
			badgeName = "GitHub Sponsors Singular";
			break;
		}
		case "kofi-plural": {
			badgeName = "Ko-Fi Plural";
			break;
		}
		case "kofi-singular": {
			badgeName = "Ko-Fi Singular";
			break;
		}
		case "kofi-plural-alt": {
			badgeName = "Ko-Fi Plural Alt";
			break;
		}
		case "kofi-singular-alt": {
			badgeName = "Ko-Fi Singular Alt";
			break;
		}
		case "paypal-plural": {
			badgeName = "PayPal Plural";
			break;
		}
		case "paypal-singular": {
			badgeName = "PayPal Singular";
			break;
		}
		case "geckolib": {
			badgeName = "GeckoLib";
			break;
		}
		case "optifine": {
			badgeName = "OptiFine";
			break;
		}
		case "origins-classes": {
			badgeName = "Origins: Classes";
			break;
		}
		case "protocollib": {
			badgeName = "ProtocolLib";
			break;
		}
		case "dev-to-plural": {
			badgeName = "dev.to Plural";
			break;
		}
		case "dev-to-singular": {
			badgeName = "dev.to Singular";
			break;
		}
		case "github-enhancements": {
			badgeName = "GitHub (Enhancements)";
			break;
		}
		case "github-issues": {
			badgeName = "GitHub (Issues)";
			break;
		}
		case "github-plural": {
			badgeName = "GitHub Plural";
			break;
		}
		case "github-singular": {
			badgeName = "GitHub Singular";
			break;
		}
		case "gitlab-plural": {
			badgeName = "GitLab Plural";
			break;
		}
		case "gitlab-singular": {
			badgeName = "GitLab Singular";
			break;
		}
		case "hackerone": {
			badgeName = "HackerOne";
			break;
		}
		case "jira-enhancements": {
			badgeName = "Jira (Enhancements)";
			break;
		}
		case "jira-issues": {
			badgeName = "Jira (Issues)";
			break;
		}
		case "youtube-plural": {
			badgeName = "YouTube Plural";
			break;
		}
		case "youtube-singular": {
			badgeName = "YouTube Singular";
			break;
		}
		case "bungeecord": {
			badgeName = "BungeeCord"
			break;
		}
		case "editorconfig": {
			badgeName = "EditorConfig";
			break;
		}
		case "ios": {
			badgeName = "iOS";
			break;
		}
		case "macos": {
			badgeName = "macOS";
			break;
		}
		case "liteloader": {
			badgeName = "LiteLoader"
			break;
		}
		case "node-js": {
			badgeName = "Node.js";
			break;
		}
		case "opensuse": {
			badgeName = "openSUSE";
			break;
		}
		case "pc": {
			badgeName = "PC";
			break;
		}
		case "ps3": {
			badgeName = "PS3";
			break;
		}
		case "ps4": {
			badgeName = "PS4";
			break;
		}
		case "ps5": {
			badgeName = "PS5";
			break;
		}
		case "risugamis-modloader": {
			badgeName = "Rigusami's Modloader"
			break;
		}
		default: {
			badgeName = capitalizeEachWord(slug);
			break;
		}
	}

	if(size === "compact-minimal" || size === "cozy-minimal") {
		badgeName = badgeName.replace("Singular", "");

		if(slug === "ps5") badgeName = "Playstation"
		if(slug === "xbox-series") badgeName = "Xbox"

	}

	return badgeName
		.replace("Plural", "(Plural)")
		.replace("Singular", "(Singular)")
		.replace("Alt", "Alternative")
		.replace("Api", "API");
}
