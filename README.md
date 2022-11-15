# Introduction

JavaScript Library to calculate age
年齢計算を行うJavaScriptのライブラリです

## Installation

```sh
npm i pure-age-calculator
or
yarn add pure-age-calculator
or
pnpm add pure-age-calculator
```

## Usage

example1

```TypeScript
const from = new Date('1991-10-15');
const to = new Date('2022-11-15');

const result = getAgePure(from,to);
/*
result = {
  years: 31,
  months: 373,
  days: 11354
}
*/
```

example2

```TypeScript
const from = new Date('1991-10-15');
const to = new Date('2022-11-15');
const format:UnitType = 'years';
const result = getAgePureFormat(from,to, format);
/*
  result = 31
*/
```
