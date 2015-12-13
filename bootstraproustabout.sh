#!/bin/sh
GIT_HOME=~/git

echo roustabout
cd $GIT_HOME
git clone https://github.com/joshuacox/roustabout.git
cd roustabout
git pull
make install
