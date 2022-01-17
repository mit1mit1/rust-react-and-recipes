#!/usr/bin/env bash
set -euo pipefail

case "${PACKAGE}" in
	retirement)
		BASEURL="https://portal-robo-primary.aws-technet-dev-au.iress.online"
		CYPRESS_SPEC="cypress/integration/e2e/gb/*"
	;;
	goals)
		BASEURL="https://goals-primary.aws-technet-dev-au.iress.online"
		CYPRESS_SPEC="cypress/integration/e2e/*"
	;;
	risk-profiler)
		BASEURL="https://risk-profiler-primary.aws-technet-dev-au.iress.online"
		CYPRESS_SPEC="cypress/integration/e2e/*"
	;;
esac

username=$(sed -n "1 p" "test_account.txt")
password=$(sed -n "2 p" "test_account.txt")

cd "${E2E_ROOT}"
cat <<-EOF > cypress.env.json
{
	"baseUrl": "${BASEURL}",
	"apiEnv": "development",
	"LOCALE": "GB",
	"username": "${username}",
	"password": "${password}"
}
EOF
${CYPRESS} --cwd "${E2E_ROOT}" run cypress run -c trashAssetsBeforeRuns=false --spec "${CYPRESS_SPEC}"
