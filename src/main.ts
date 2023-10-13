import dayjs, { UnitType } from 'dayjs';
import * as E from 'fp-ts/Either';

const calcDiff = (from: Date, to: Date) => {
	const dayjsFrom = dayjs(from);
	const dayjsTo = dayjs(to);
	const years = dayjsTo.diff(dayjsFrom, 'year');
	const months = dayjsTo.diff(dayjsFrom, 'months');
	const days = dayjsTo.diff(dayjsFrom, 'days');
	return { years, months, days };
};

const calcDiffFormat = (from: Date, to: Date, format: UnitType) => {
	const dayjsFrom = dayjs(from);
	const dayjsTo = dayjs(to);
	return dayjsTo.diff(dayjsFrom, format);
};

export const getAgePure = (fromDate: Date, toDate: Date) => {
	if (!(fromDate instanceof Date)) throw new Error('fromDate is Invalid date.');
	if (!(toDate instanceof Date)) throw new Error('toDate is Invalid date.');
	if (dayjs(fromDate).isAfter(toDate)) throw new Error('toDate is dated earlier than fromDate.');
	return calcDiff(fromDate, toDate);
};

export const getAgePureFormat = (fromDate: Date, toDate: Date, format: UnitType) => {
	if (!(fromDate instanceof Date)) throw new Error('fromDate is Invalid date.');
	if (!(toDate instanceof Date)) throw new Error('toDate is Invalid date.');
	if (dayjs(fromDate).isAfter(toDate)) throw new Error('toDate is dated earlier than fromDate.');
	return calcDiffFormat(fromDate, toDate, format);
};
export const getAgePureEither = (fromDate: Date, toDate: Date) => {
	if (!(fromDate instanceof Date)) return E.left('fromDate is Invalid date.');
	if (!(toDate instanceof Date)) return E.left('toDate is Invalid date.');
	if (dayjs(fromDate).isAfter(toDate)) return E.left('toDate is dated earlier than fromDate.');
	return E.right(calcDiff(fromDate, toDate));
};
