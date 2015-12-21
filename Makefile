all: help

help:
	@echo ""
	@echo "-- Help Menu"
	@echo ""   1. make install       - install the scripts in /usr/local/bin/

install: usrlocalbin

usrlocalbin:
	install --mode=0755 CleanDocker /usr/local/bin/CleanDocker
	install --mode=0755 KillDocker /usr/local/bin/KillDocker
	install --mode=0755 KRMdocker /usr/local/bin/KRMdocker
	install --mode=0755 StaleDocker /usr/local/bin/StaleDocker
	install --mode=0755 EnterDocker /usr/local/bin/EnterDocker
	install --mode=0755 LastDocker /usr/local/bin/LastDocker
	install --mode=0755 LogDockerLast /usr/local/bin/LogDockerLast
	install --mode=0755 GetLatestDocker /usr/local/bin/GetLatestDocker
	install --mode=0755 DebianInstall /usr/local/bin/DebianInstall
	install --mode=0755 createOpenVPNdockercreds /usr/local/bin/createOpenVPNdockercreds

play:
	ansible-playbook roustabout.yaml
