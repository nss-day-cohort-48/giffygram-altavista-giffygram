#!/usr/bin/env bash

# ========================================================================> VARS
JSRV_LOGFILE="./json-server.log"
SRV_LOGFILE="./serve.log"

## ------- FROM HERE ON OUT, IT'S ALL BASH: YOU'VE BEEN WARNED -------
# ========================================================================> ARGS
JSRV_PORT="$1"
JSRV_DBFILE="$2"
SRV_PORT="$3"
SRV_SRCDIR="$4"

# ========================================================================> FUNC
pid_of() {
    RESULT=$(ps | grep -v 'grep' | grep "$1" | cut -d ' ' -f 2)
}

# ========================================================================> EXEC
## no errors aloud!!1!
set -e

# init stuff
echo "Clearing the json-server log file: $JSRV_LOGFILE"     && echo "" > $JSRV_LOGFILE
echo "Clearing the serve log file: $SRV_LOGFILE"            && echo "" > $SRV_LOGFILE
echo

# clear out stuck processes that might interfere with serving
SERVE8081=$(pid_of "serve.*-l 8081")
[[ -n $SERVE8081 ]] && pkill $SERVE8081

# serve it up and alert user of ports
serve -n -l $SRV_PORT $SRV_SRCDIR > $SRV_LOGFILE 2>&1 & 
echo "Started 'serve' on port $SRV_PORT -- see $SRV_LOGFILE for more details"
json-server -p $JSRV_PORT --watch $JSRV_DBFILE > $JSRV_LOGFILE 2>&1 & 
echo "Started 'json-server' on port $JSRV_PORT -- see $JSRV_LOGFILE for more details"

# go time!!!
echo
echo "Press ctrl+c to exit!" && wait
