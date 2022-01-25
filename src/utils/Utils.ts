const tail = ([a, b, ...rest]) => rest;

/**
 * (Adapted from)
 * Human readable elapsed or remaining time (example: 3 minutes ago)
 * @param  {Date|Number|String} date A Date object, timestamp or string parsable with Date.parse()
 * @param  {Date|Number|String} [nowDate] A Date object, timestamp or string parsable with Date.parse()
 * @param  {Intl.RelativeTimeFormat} [trf] A Intl formater
 * @return {string} Human readable elapsed or remaining time
 * @author github.com/victornpb
 * @see https://stackoverflow.com/a/67338038/938822
 */
export function fromNow(
	date: Date | string,
	rft = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })
): string {
	const SECOND = 1000;
	const MINUTE = 60 * SECOND;
	const HOUR = 60 * MINUTE;
	const DAY = 24 * HOUR;
	const WEEK = 7 * DAY;
	const MONTH = 30 * DAY;
	const YEAR = 365 * DAY;
	const intervals = [
		{ ge: YEAR, divisor: YEAR, unit: 'year' },
		{ ge: MONTH, divisor: MONTH, unit: 'month' },
		{ ge: WEEK, divisor: WEEK, unit: 'week' },
		{ ge: DAY, divisor: DAY, unit: 'day' },
		{ ge: HOUR, divisor: HOUR, unit: 'hour' },
		{ ge: MINUTE, divisor: MINUTE, unit: 'minute' },
		{ ge: 30 * SECOND, divisor: SECOND, unit: 'seconds' },
		{ ge: 0, divisor: 1, text: 'Just now' }
	];

	const now = new Date(Date.now()).getTime();
	const diff = now - (typeof date === 'object' ? date : new Date(date)).getTime();
	const diffAbs = Math.abs(diff);

	for (const interval of intervals) {
		if (diffAbs >= interval.ge) {
			const x = Math.round(Math.abs(diff) / interval.divisor);
			const isFuture = diff < 0;
			return interval.unit ? rft.format(isFuture ? x : -x, interval.unit) : interval.text;
		}
	}
}

export function reformatArticle(article) {
	if (article.body_markdown.substring(0, 3) === '---') {
		article.body_markdown = tail(article.body_markdown.split('---')).join('');
	}

	article.body_markdown = article.body_markdown.replace(/]\(#/g, `](${article.slug}#`);

	const twitterRegex = /{% twitter ([0-9]{15,}) %}/g;
	let twitterId = twitterRegex.exec(article.body_markdown);
	if (twitterId != null && twitterId.length > 1) twitterId = twitterId[1];
	article.body_markdown = article.body_markdown.replace(
		twitterRegex,
		`<iframe align='center' border=0 frameborder=0 src='https://twitframe.com/show?url=https://twitter.com/yafkari2000/status/${twitterId}'></iframe>`
	);

	article.body_markdown = article.body_markdown
		.trim()
		.replace(/\\n/g, '\n')
		.replace(/\\\\/g, '\\')
		.replace(/\\u003c/g, '\u003c')
		.replace(/\\u003e/g, '\u003e')
		.replace(/\\u0026/g, '\u0026');

	return article;
}
