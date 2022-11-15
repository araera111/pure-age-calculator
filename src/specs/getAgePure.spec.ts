import { getAgePure } from '../main';

describe('getAgePure', () => {
	it('case1: 1991-10-15 2022-11-15', () => {
		const from = new Date('1991-10-15');
		const to = new Date('2022-11-15');
		const result = {
			years: 31,
			months: 373,
			days: 11354
		};
		expect(getAgePure(from, to)).toStrictEqual(result);
	});

	it('case2: 1991-10-15 2022-11-15 format years', () => {
		const from = new Date('1991-10-15');
		const to = new Date('2022-11-15');
		const format = 'years';
		const result = 31;
		expect(getAgePure(from, to, format)).toStrictEqual(result);
	});
});
