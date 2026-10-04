[![CI](https://github.com/joshuacox/roustabout/actions/workflows/ci.yml/badge.svg)](https://github.com/joshuacox/roustabout/actions/workflows/ci.yml)

# Website (GitHub Pages)

[https://joshuacox.github.io/roustabout/](https://joshuacox.github.io/roustabout/)

# Install

### Official Docker oneliner

```bash
curl -fsSL https://get.docker.com/ | sh
```

### Roustabout oneliner

```bash
curl -fsSL https://raw.githubusercontent.com/joshuacox/roustabout/master/bootstraproustabout.sh | bash
```

Full Ubuntu install:

```bash
curl -fsSL https://raw.githubusercontent.com/joshuacox/roustabout/master/UbuntuDockerInstall | bash
```

Full Redhat install:

```bash
curl -fsSL https://raw.githubusercontent.com/joshuacox/roustabout/master/RedhatDockerInstall | bash
```

Full Kubeadm install:

```bash
curl -fsSL https://raw.githubusercontent.com/joshuacox/roustabout/master/KubadmNstall | bash
```

Full Redhat Kubeadm install:

```bash
curl -fsSL https://raw.githubusercontent.com/joshuacox/roustabout/master/RHkubeNstall | bash
```

### Manual install

Clone the repository and run:

```bash
sudo make install
```

By default, scripts install to `/usr/local/bin`. You can customize the install directory with `PREFIX`:

```bash
make install PREFIX=$HOME/.local
```

To remove installed scripts:

```bash
sudo make uninstall
```

### Ansible install

Add hosts to a `roustabout` group in your Ansible inventory:

```ini
examplehost1 ansible_ssh_port=2222 ansible_ssh_host=1.2.3.4 ansible_ssh_user=root
examplehost2 ansible_ssh_port=2222 ansible_ssh_host=1.2.3.5 ansible_ssh_user=root

[roustabout]
examplehost1
examplehost2
```

And run:

```bash
make play
```

---

# Unified CLI (`roustabout`)

Roustabout is consolidated into a single command dispatcher, `roustabout`:

```
Usage:
  roustabout <command> [arguments]

Commands:
  last [enter|logs|id]   Operate on the last spawned container (default: enter)
  enter [container_id]   Enter container with /bin/bash (fallback: /bin/sh)
  logs [container_id]    Follow logs of container (default: last spawned)
  kill [--all | id...]   Kill specified container(s), or all running with --all
  krm <id...>            Kill and remove container(s)
  clean [options]        Clean Docker resources:
                           --all         Remove stopped containers and dangling images (default)
                           --volumes     Remove dangling volumes
                           --stale       Prune unused images older than 24h
                           --images      Prune all unused images
                           --containers  Prune stopped containers
  clean-volumes          Remove dangling volumes
  stale                  Prune unused images older than 24h
  openvpn-creds <client> Generate OpenVPN client credentials using kylemanna/openvpn
  version                Show version information
  help                   Show this help message
```

---

# Legacy Command Aliases (100% Backward Compatible)

All original standalone commands are retained and function both as standalone wrapper scripts and as symlinks to `roustabout`:

### Last Container Commands

These commands operate on the last container created (via `docker ps -ql`):

* **`LastDocker`** (or `roustabout last`): Enter the last container that spawned.
* **`LogDockerLast`** (or `roustabout logs`): Follow the logs of the last spawned container.

### Container Management

* **`EnterDocker [container_id]`** (or `roustabout enter <id>`): Enter a container with `/bin/bash` (falling back cleanly to `/bin/sh`).
* **`KillDocker [container_id...]`** (or `roustabout kill [--all]`): Kill running containers safely.
* **`KRMdocker <container_id...>`** (or `roustabout krm <id>`): Kill and remove container(s).

### Cleaning & Pruning

* **`CleanDocker`** (or `roustabout clean`): Prune stopped containers and dangling images safely.
* **`CleanOrphanedVolumes`** (or `roustabout clean-volumes`): Prune dangling volumes.
* **`StaleDocker`** (or `roustabout stale`): Prune unused images older than 24h.

### OpenVPN Docker Credentials

* **`createOpenVPNdockercreds <CLIENTNAME>`** (or `roustabout openvpn-creds <CLIENTNAME>`):
  Used with [kylemanna/docker-openvpn](https://github.com/kylemanna/docker-openvpn) to generate client configuration files.
