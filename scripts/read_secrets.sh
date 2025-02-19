#!/bin/sh

read_secret() {
    local file_name=$1
    local env_var_name=$2
    local secret_path="/run/secrets/$file_name"

    if [ ! -f "$secret_path" ]; then
        echo "Error: Required secret '$file_name' is missing." >&2
        exit 1
    fi

    export "$env_var_name=$(cat "$secret_path")"
}

read_secret "db_app_user" "DB_APP_USER"
read_secret "db_app_password" "DB_APP_PASSWORD"
