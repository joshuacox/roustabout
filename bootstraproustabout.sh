#!/bin/sh
TMP_DIR=$(mktemp -d --suffix='.roustabout')

echo roustabout
cd $GIT_HOME
cd $TMP_DIR
git clone https://github.com/joshuacox/roustabout.git
cd roustabout
git pull
sudo make install

cd
rm -Rf $TMP_DIR
