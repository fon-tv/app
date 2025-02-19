#!/bin/sh

if ! . /usr/local/bin/scripts/read_secrets.sh; then
    echo "Failed to read secrets"
    exit 1
fi

exec node /app/server.js
