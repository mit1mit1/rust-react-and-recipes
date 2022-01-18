# Use some sensible default shell settings
SHELL := /bin/bash
.ONESHELL:
.SILENT:

# Load env for local use if it exists
USING_ENV_LOCAL=false
ifneq ("$(wildcard env-local.mk)","")
  include env-local.mk
  USING_ENV_LOCAL=true
endif

export RED=\033[1;31m
export GREEN=\033[1;32m
export CYAN=\033[0;36m
export NC=\033[0m
export BOLD=\033[1m
export REGULAR=\e[0m

# Set default package for now
export PACKAGE=rust-recipes

# Common
export CI_BASE=./ci
export OUTPUT_BASE=./output
export SCRIPTS_ROOT=./scripts
export BUILD_DIR=build
export COVERAGE_PATH=coverage/lcov.info
export DEPLOY_BASE_DIR=./packages/@${PACKAGE}/infra
export ARTIFACT_PATH_LOCAL=$(OUTPUT_BASE)/artifacts
export VERSION_FILE=$(OUTPUT_BASE)/version.txt
export REMOTE_STATE_NAME=-

# Package
export PACKAGE_ROOT=./packages/@${PACKAGE}
export UI_ROOT=$(PACKAGE_ROOT)/ui
export REQUEST_EDGE_ROOT=$(PACKAGE_ROOT)/request-edge
export BFF_ROOT=$(PACKAGE_ROOT)/bff
export E2E_ROOT=$(PACKAGE_ROOT)/e2e
export INFRA_ROOT=$(PACKAGE_ROOT)/infra

ifneq ("$(wildcard $(VERSION_FILE))","")
  export VERSION=$(shell cat "${VERSION_FILE}")
else
  export VERSION=dev
endif

CYPRESS=yarn run cypress
YARN=yarn
USING_LOCAL_YARN=true

export YARN
export CYPRESS

# Default pipeline for local deployment
all: install build package plan deploy


.PHONY: plan deploy install build package output ci_unit_test destroy publish promote get-staging-artifacts get-production-artifacts ci_ui_verification_test

build: output
	echo -e "--- ${GREEN}Building $(PACKAGE) to '$(ARTIFACT_PATH_LOCAL)' ...${NC}"
	$(YARN) run build:$(PACKAGE)

install:
	echo -e "--- ${GREEN}Running Install ...${NC}"
	$(YARN) bootstrap --force-local
	$(YARN) link
	$(YARN) build:shared-ui

changed_packages:
ifeq ($(USE_LOCAL_YARN),true)
	$(YARN) run --silent changed > changed.txt || true
else
# Use bash inside docker for better output format
	docker-compose run node bash -c "lerna changed --include-merged-tags > changed.txt || true"
endif

#: Display help on common tasks
help:
	# https://stackoverflow.com/questions/4219255/how-do-you-get-the-list-of-targets-in-a-makefile/59087509#59087509
	@grep -B1 -E "^[a-zA-Z0-9_-]+\:([^\=]|$$)" Makefile \
	| grep -v -- -- \
	| sed 'N;s/\n/###/' \
	| sed -n 's/^#: \(.*\)###\(.*\):.*/\2###\1/p' \
	| column -t  -s '###'

#: Display information about application and environment
info:
	echo -e "${GREEN}Application name	: ${NC}${BOLD}${APP_NAME}${REGULAR}"
	echo -e "${GREEN}Application version	: ${NC}${BOLD}${VERSION}${REGULAR}"
	echo -e "${GREEN}Using 'env-local.mk'?	: ${NC}${BOLD}${USING_ENV_LOCAL}${REGULAR}"
	echo -e "${GREEN}Using local Yarn?	: ${NC}${BOLD}${USING_LOCAL_YARN}${REGULAR}"
