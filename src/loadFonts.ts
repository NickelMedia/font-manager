import { applyActiveFont } from "./font-styles/declarations";

/**
 * Get the Google Fonts stylesheet for the specified font (in the specified scripts and variants),
 * add the necessary CSS declarations to apply it and add the font's stylesheet to the document head
 */
export async function loadActiveFont(
	font: string,
	previousFontFamily: string,
	): Promise<void> {
		applyActiveFont(font, previousFontFamily);
	}
