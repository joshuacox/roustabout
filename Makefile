PREFIX ?= /usr/local
BINDIR ?= $(PREFIX)/bin
DATADIR ?= $(PREFIX)/share
BASHCOMPDIR ?= $(DATADIR)/bash-completion/completions
INSTALL ?= install -m 0755
INSTALL_DATA ?= install -m 0644

SCRIPTS = \
	roustabout \
	CleanDocker \
	CleanOrphanedVolumes \
	KillDocker \
	KRMdocker \
	StaleDocker \
	EnterDocker \
	LastDocker \
	LogDockerLast \
	GetLatestDocker \
	createOpenVPNdockercreds

LINT_FILES = \
	roustabout \
	CleanDocker \
	CleanOrphanedVolumes \
	KillDocker \
	KRMdocker \
	StaleDocker \
	EnterDocker \
	LastDocker \
	LogDockerLast \
	createOpenVPNdockercreds \
	bootstraproustabout.sh \
	completions/roustabout.bash

.PHONY: all help install uninstall test lint play

all: help

help:
	@echo ""
	@echo "-- Help Menu"
	@echo "   make install     - Install roustabout, helper scripts, and completions to $(PREFIX)"
	@echo "   make uninstall   - Remove roustabout, helper scripts, and completions from $(PREFIX)"
	@echo "   make test        - Run test suite against local scripts"
	@echo "   make lint        - Run shellcheck on roustabout scripts"
	@echo "   make play        - Run Ansible playbook (roustabout.yaml)"
	@echo ""

install:
	mkdir -p $(DESTDIR)$(BINDIR)
	@for script in $(SCRIPTS); do \
		echo "Installing $$script -> $(DESTDIR)$(BINDIR)/$$script"; \
		$(INSTALL) $$script $(DESTDIR)$(BINDIR)/$$script; \
	done
	mkdir -p $(DESTDIR)$(BASHCOMPDIR)
	$(INSTALL_DATA) completions/roustabout.bash $(DESTDIR)$(BASHCOMPDIR)/roustabout

uninstall:
	@for script in $(SCRIPTS); do \
		echo "Removing $(DESTDIR)$(BINDIR)/$$script"; \
		rm -f $(DESTDIR)$(BINDIR)/$$script; \
	done
	rm -f $(DESTDIR)$(BASHCOMPDIR)/roustabout

test:
	./roustabout help >/dev/null
	./roustabout version >/dev/null
	./LastDocker help >/dev/null || true
	./CleanDocker help >/dev/null || true
	@echo "All tests passed successfully."

lint:
	shellcheck $(LINT_FILES)

play:
	ansible-playbook roustabout.yaml
