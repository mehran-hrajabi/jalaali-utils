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

export const ConverUtcToFullTextJalali = (utc: string) => {
	const parsedDate = new Date(utc);
	const localizedDate = new Date(parsedDate.getTime() - parsedDate.getTimezoneOffset() * 60000);

	return ConvertDateToFullTextJalali(localizedDate);
};

export const ConvertUtcToJalali = (utc: string) => {
	const parsedDate = new Date(utc);
	const localizedDate = new Date(parsedDate.getTime() - parsedDate.getTimezoneOffset() * 60000);
	let jalaliDate = localizedDate.toLocaleDateString('fa-IR');
	let jalaliTime = localizedDate.toLocaleTimeString('fa-IR');
	return jalaliDate + ' ' + jalaliTime;
};

export const ConvertDateToUtc = (date: Date) => {
	return new Date(date).toISOString().slice(0, -1);
};
