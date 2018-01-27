[![Build Status](https://travis-ci.org/joshuacox/roustabout.svg?branch=master)](https://travis-ci.org/joshuacox/roustabout)

# website 
http://joshuacox.github.io/roustabout

# Install

### official oneliner

```
curl -fsSL https://get.docker.com/ | sh
```

##### oneliner (it’s how I install myself so I’m leaving this up top)

```
curl https://raw.githubusercontent.com/joshuacox/roustabout/master/bootstraproustabout.sh|bash
```

Full Ubuntu install:

```
curl https://raw.githubusercontent.com/joshuacox/roustabout/master/UbuntuDockerInstall|bash
```

Full Redhat install:

```
curl https://raw.githubusercontent.com/joshuacox/roustabout/master/RedhatDockerInstall|bash
```

Full Kubeadm install:

```
curl https://raw.githubusercontent.com/joshuacox/roustabout/master/KubadmNstall|bash
```
##### manual install

just copy the wanted files somewhere into your path

alternatively, if you want to install them all to `/usr/local/bin/`, then

```
sudo make install
```

##### Ansible install

or you can add hosts to a roustabout list in your ansible hosts file like so

```
examplehost1 ansible_ssh_port=2222 ansible_ssh_host=1.2.3.4 ansible_ssh_user=root
examplehost2 ansible_ssh_port=2222 ansible_ssh_host=1.2.3.5 ansible_ssh_user=root

[roustabout]
exampleHost1
exampleHost2
```
and use ansible to install to those hosts

```
make play
```

look at the included Makefile (as you should every Makefile for that matter before you `sudo make anything`)
it merely uses the install command to copy the scripts to `/usr/local/bin` with mode 0755

# Ultimands

This first set of commands works on the Last Container created, literally through the use of `docker ps -ql`
if that command outputs a different container than your intended target something is wrong. 
If you do not understand the output of that command in relation to the output of this command `docker ps -l`
then you should not be hiring roustabouts just yet,
you should continue to do the work yourself.

## LastDocker

enter the last container that spawned

```
LastDocker
```

## LogDockerLast

feed it a container ID and get logs for that container
each of the commands are given a container ID as argument:

```
LogDockerLast
```

## CleanDocker

this will clean out images indiscriminately WARNING read that again before using

```
CleanDocker
```

# Contaimands

This next set commands works on contianers and are given an argument which is the container ID of the container they are to work on

## EnterDocker

feed it a container ID and enter that container

```
EnterDocker 6b44e56c1826
```

## KillDocker

feed it a container ID and kill that container

```
KillDocker 6b44e56c1826
```

## KRMDocker

feed it a container ID then kill and remove that container

```
KRMDocker 6b44e56c1826
```

# OpenVPN docker specific

this command is given an argument of the user to be created

## createOpenVPNdockercreds

to be used with this:
https://github.com/kylemanna/docker-openvpn

