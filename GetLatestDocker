#!/bin/bash
echo -n "overwriting /usr/local/bin/docker Ctrl-C now to exit"
for i in {1..5};do sleep 1; echo -n '!'; done
echo '!'
cd /tmp
wget https://get.docker.com/builds/Linux/x86_64/docker-latest
chmod +x docker-latest
sudo mv docker-latest /usr/local/bin/docker
curl -L https://github.com/docker/compose/releases/download/1.2.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
