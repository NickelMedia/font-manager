/**
 * Create/find and return the apply-font stylesheet for the provided selectorSuffix
 */
function getActiveFontStylesheet(): HTMLStyleElement {
	const stylesheetId = `active-font`;
	let activeFontStylesheet = document.getElementById(stylesheetId) as HTMLStyleElement;
	if (!activeFontStylesheet) {
		activeFontStylesheet = document.createElement("style");
		activeFontStylesheet.id = stylesheetId;
		document.head.appendChild(activeFontStylesheet);
	}
	return activeFontStylesheet;
}

/**
 * Add/update declaration for applying the current active font
 */
 export function applyActiveFont(
	activeFont: string,
	previousFontFamily: string,
): void {
	const style = `
		.apply-font {
			font-family: "${activeFont}"${previousFontFamily ? `, "${previousFontFamily}"` : ""};
		}
	`;
	const activeFontStylesheet = getActiveFontStylesheet();
	activeFontStylesheet.innerHTML = style;
}
