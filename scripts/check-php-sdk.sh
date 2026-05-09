#!/usr/bin/env bash
set -euo pipefail

cd sdks/php
composer validate
composer install --no-interaction --no-progress --prefer-dist
composer exec phpunit -- test/Extras
composer exec phpstan -- analyse lib/Extras test/Extras --level=5
