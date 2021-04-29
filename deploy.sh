#!/usr/bin/env bash
npm run build
npm run export
rsync -avzP out/ root@real.nwerc.is:/var/www/2021.nwerc.is/
