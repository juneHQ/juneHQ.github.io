export const formatPostHtml = (html: string) => {

	// Find any <a> tags with hrefs and add target="_blank"
	// strip the rel="noreferrer" from the <a> tags of june.so links (as they're added by ghost)
	const htmlWithoutNoreferrer = html.replace(/<a\s+(href="https:\/\/www\.june\.so\/")\s+rel="noreferrer"/g, '<a target="_blank" $1');

	// Add rel="noopener noreferrer nofollow" to all external links
	const processedHtml = htmlWithoutNoreferrer.replace(/<a(.*?)href="(?!https:\/\/june.so)(.*?)"/g, (match, p1, p2) => {
		if (p2 && !p2.includes('june.so') && !/^[/#]/.test(p2)) {
			return `<a${p1}rel="noopener nofollow" target="_blank" href="${p2}"`;
		} else {
			return match;
		}
	});

	// Images already point at local copies (see blog/lib/assets.ts).
	return processedHtml;
}
