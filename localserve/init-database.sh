#!/usr/bin/env bash

# =================================================================> VARS
INITIALDB="$1"
DBFILE="$2"

## ------- FROM HERE ON OUT, IT'S ALL BASH: YOU'VE BEEN WARNED -------
# =================================================================> FUNC
confirm() {
	if [[ -n $2 ]]; then
		echo "About to $2"
	else
		echo "About to do: $1"
	fi

	read -p "Are you sure? y or [n] => " -n 1 -r
	echo
	# REPLY is the default variable for read
	if [[ $REPLY =~ ^[Yy]$ ]]; then
		eval "$1"
	fi
}

# =================================================================> EXEC
mkdir -p api 

[[ -f $INITIALDB ]] || (echo "Can't find $INITIALDB" && exit 255)

if [ -f $DBFILE ]; then
	confirm "cat $INITIALDB > $DBFILE" "overwrite $DBFILE with contents of $INITIALDB"
else
	cat $INITIALDB > $DBFILE
fi

