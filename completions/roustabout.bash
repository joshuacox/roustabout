# bash completion for roustabout

_roustabout() {
    local cur prev words cword
    if declare -F _init_completion >/dev/null 2>&1; then
        _init_completion || return
    else
        cur="${COMP_WORDS[COMP_CWORD]}"
        prev="${COMP_WORDS[COMP_CWORD-1]}"
        words=("${COMP_WORDS[@]}")
        cword=$COMP_CWORD
    fi

    local commands="last enter logs kill krm clean clean-volumes stale openvpn-creds version help"
    local clean_opts="--all --volumes --stale --images --containers"
    local last_opts="enter logs id"

    if [[ $cword -eq 1 ]]; then
        mapfile -t COMPREPLY < <(compgen -W "$commands" -- "$cur")
        return 0
    fi

    case "${words[1]}" in
        clean)
            mapfile -t COMPREPLY < <(compgen -W "$clean_opts" -- "$cur")
            ;;
        last)
            mapfile -t COMPREPLY < <(compgen -W "$last_opts" -- "$cur")
            ;;
        enter|log|logs|kill|krm|rm)
            if command -v docker >/dev/null 2>&1; then
                local containers
                containers="$(docker ps -a --format '{{.ID}}' 2>/dev/null || true)"
                mapfile -t COMPREPLY < <(compgen -W "$containers" -- "$cur")
            fi
            ;;
    esac
}

complete -F _roustabout roustabout
