# website 
http://joshuacox.github.io/roustabout

# Install

copy the wanted files somewhere into your path

alternatively if you want to install them all to `/usr/local/bin/` then
```
sudo make install
```
look at the included Makefile (as you should every Makefile for that matter before you `sudo make anything`)
it merely uses the install command to copy the scripts to `/usr/local/bin` with mode 0755

# Ultimands

This first set of commands works on the Last Container created:

## LastDocker

enter the last container that spawned

## LogDockerLast

feed it a container ID and get logs for that container
each of the commands are given a container ID as argument:

# Contaimands

This next set commands works on contianers and are given an argument which is the container ID of the container they are to work on

## CleanDocker

this will clean out images indiscriminately WARNING read that again before using

## EnterDocker

feed it a container ID and enter that container

## GetLatestDocker

should be used on ubuntu trusty and forward without issue, and I am currently using it in debian without issue, but no guarantees in any case

## KillDocker

feed it a container ID and kill that container

# OpenVPN docker specific

this command is given an argument of the user to be created

## createOpenVPNdockercreds

to be used with this:
https://github.com/kylemanna/docker-openvpn

