#!/usr/bin/env bash
set -euo pipefail

username=$(sed -n "1 p" "test_account.txt")
password=$(sed -n "2 p" "test_account.txt")

cd "${E2E_ROOT}"
cat <<-EOF > cypress.env.json
{
	"baseUrl": "BASE_URL",
	"apiEnv": "development",
	"LOCALE": "GB",
	"username": "${username}",
	"password": "${password}"
}
EOF
${CYPRESS} --cwd "${E2E_ROOT}" run cypress run -c trashAssetsBeforeRuns=false --spec "${CYPRESS_SPEC}"
