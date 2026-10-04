#!/usr/bin/env bash
# bootstraproustabout.sh - Install roustabout from GitHub master
set -euo pipefail

TMP_DIR="$(mktemp -d 2>/dev/null || mktemp -d -t 'roustabout')"
trap 'rm -rf "$TMP_DIR"' EXIT

echo "==> Cloning roustabout into temporary directory..."
git clone --depth=1 https://github.com/joshuacox/roustabout.git "$TMP_DIR/roustabout"
cd "$TMP_DIR/roustabout"

echo "==> Installing roustabout..."
sudo make install

echo "==> Roustabout installed successfully!"
