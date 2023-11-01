# DateTime for convert timestamp and reverse

Converting date and time to timestamp and reverse converting

[![npm](https://img.shields.io/npm/v/%40garrigarrison%2Fdatetime?color=blue)](https://www.npmjs.com/package/@garrigarrison/datetime)
[![npm](https://img.shields.io/npm/dm/%40garrigarrison%2Fdatetime?color=green)](https://www.npmjs.com/package/@garrigarrison/datetime)
[![Coverage Status](https://coveralls.io/repos/github/GarriGarrison/datetime/badge.svg?branch=main&rand=123)](https://coveralls.io/github/GarriGarrison/datetime?branch=mainr)
![Build Status](https://github.com/GarriGarrison/datetime/actions/workflows/ci.yml/badge.svg)
[![Minified Size](https://img.shields.io/bundlephobia/minzip/%40garrigarrison%2Fdatetime)](https://bundlephobia.com/result?p=@garrigarrison/datetime)

<!-- [![License: MIT](https://img.shields.io/github/license/GarriGarrison/datetime)](https://opensource.org/licenses/MIT) -->

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## function toTimestamp

input date format: YYYY-MM-DD, DD.MM.YYYY, hh:mm, YYYY-MM-DDThh:mm, YYYY-MM-DD hh:mm, DD.MM.YYYYThh:mm, DD.MM.YYYY hh:mm
output result timestamp with timezone

## toDateString

input timestamp
output date format DD.MM.YYYY or null

## toISODateString

input timestamp
output date format YYYY-MM-DD or null

## toDateLongString

input timestamp
output date format DD month YYYY or null

## toISOString

input timestamp, withSeconds = true
withSeconds = true (default): output date format YYYY-MM-DDThh:mm:ss or null
withSeconds = false: output date format YYYY-MM-DDThh:mm or null

## toDateTimeString

input timestamp, withSeconds = true
withSeconds = true (default): output date format DD.MM.YYYY hh:mm:ss or null
withSeconds = false: output date format DD.MM.YYYY hh:mm or null

## toTimeString

input timestamp, withSeconds = true
withSeconds = true (default): output date format hh:mm:ss or null
withSeconds = false: output date format hh:mm or null
