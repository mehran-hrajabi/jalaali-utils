const jalaliMonths: { [key: string]: string } = {
	'۱': 'فروردین',
	'۲': 'اردیبهشت',
	'۳': 'خرداد',
	'۴': 'تیر',
	'۵': 'مرداد',
	'۶': 'شهریور',
	'۷': 'مهر',
	'۸': 'آبان',
	'۹': 'آذر',
	'۱۰': 'دی',
	'۱۱': 'بهمن',
	'۱۲': 'اسفند',
};
const jalaliWeekday = ['یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنج شنبه', 'جمعه', 'شنبه'];

const ConvertDateToFullTextJalali = (date: Date) => {
    // standard input is something like this : Thu Jul 14 2022 17:32:14 GMT+0430 (Iran Daylight Time)
	const jalaliDate = date.toLocaleDateString('fa-IR');
	const jalaliTime = date.toLocaleTimeString('fa-IR');

	const jalaliYear = jalaliDate.split('/')[0];
	const jalaliMonth = jalaliMonths[jalaliDate.split('/')[1]];
	const jalaliDay = jalaliDate.split('/')[2];
	const jalaliWeekDay = jalaliWeekday[date.getDay()];

	return (
		jalaliWeekDay +
		'،' +
		' ' +
		jalaliDay +
		' ' +
		jalaliMonth +
		' ' +
		jalaliYear +
		' ' +
		'ساعت' +
		' ' +
		jalaliTime
	);
};

export const ConvertUtcToFullTextJalali = (utc: string) => {
    // standard input is something like this : 2022-07-14T13:02:14.217Z
	const parsedDate = new Date(utc.includes('Z') ? utc : utc + 'Z');

	return ConvertDateToFullTextJalali(parsedDate);
};

export const ConvertUtcToJalali = (utc: string) => {
    // standard input is something like this : 2022-07-14T13:02:14.217Z
	const parsedDate = new Date(utc.includes('Z') ? utc : utc + 'Z');
	let jalaliDate = parsedDate.toLocaleDateString('fa-IR');
	let jalaliTime = parsedDate.toLocaleTimeString('fa-IR');
	return jalaliDate + ' ' + jalaliTime;
};

export const ConvertDateToUtc = (date: Date) => {
    // standard input is something like this : Thu Jul 14 2022 17:32:14 GMT+0430 (Iran Daylight Time)
	return date.toISOString();
};

export const ConvertUtcToDate = (utc: string) => {
    // standard input is something like this : 2022-07-14T13:02:14.217Z
    return new Date(utc);
};
