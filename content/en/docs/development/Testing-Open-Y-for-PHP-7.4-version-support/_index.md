---
title: Testing YMCA Website Services for PHP 7.4 version support
aliases:
  - /docs/wiki/testing-open-y-for-php-7.4-version-support/
---

## Requirements

* php-cli 7.4 ( memory_limit value should be large ( 2000M ) or unlimiter ( -1 ) in order to not fail
* composer 2

## Steps

1. Obtain latest development code of YMCA Website Services

```sh
composer create-project ycloudyusa/yusaopeny-project:10.2.x-development-dev openy7.4
```

2. Add phpcompatibility to require-dev section

```
cd open7.4
composer require --dev phpcompatibility/php-compatibility
./vendor/bin/phpcs -p . --standard=PHPCompatibility --runtime-set testVersion 7.4 --config-set installed_paths vendor/phpcompatibility/php-compatibility
```

3. Generate report

```
./vendor/bin/phpcs -p . --standard=PHPCompatibility --runtime-set testVersion 7.4 --report-file=report.txt
```

or if you need to skip warnings

```
./vendor/bin/phpcs -p . --standard=PHPCompatibility --runtime-set testVersion 7.4 --report-file=report.txt -n
```

In report.txt you'd find a full list of findings to be resolved in order to pass compatibility
