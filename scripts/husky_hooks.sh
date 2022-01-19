#!/usr/bin/env bash

_check_exit_status() {
  EXIT_CODE=$1
  if [[ $EXIT_CODE != 0 ]]; then
    echo "test failed"
    exit 1
  fi
}

CHANGED_PACKAGES=$(yarn changed)
APP_PACKAGES=(rust-recipes shared-ui)

if [[ -z "${CHANGED_PACKAGES}" ]]; then
  echo "No changes are detected in packages..."
else
  echo "--- Changed packages ---"
  echo "${CHANGED_PACKAGES}"

  # Run tests only in changed packages
  IFS=$'\n' read -rd '' -a array <<<"$CHANGED_PACKAGES"
  for PACKAGE in "${array[@]}"; do
    if [[ " ${APP_PACKAGES[@]} " =~ " ${PACKAGE} " ]]; then
      echo "Unit test: ${PACKAGE}"
      yarn test:"${PACKAGE}"
      _check_exit_status $?
    fi
  done || exit 1

  echo "You can rest assured and push your changes now."
fi
