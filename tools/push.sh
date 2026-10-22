#!/bin/bash
# Maintainer push (agent sandbox): clones repo, copies working tree src/ tools/ index.html, commits, pushes. Needs the vault PAT.
# usage: tools/push.sh "message"   (run from a working copy dir that contains src/ tools/ index.html)
set -e
O=plus-pro-max-ultra; R=Shinnigammi-vocab; W=$(cd "$(dirname "$0")/.." && pwd)
tools vault write-file --name "GitHub PAT Shinnigammi-vocab" --key password --return-channel imessage --json > /tmp/wf.json
P=$(jq -r .path /tmp/wf.json); T=$(cat $P); rm -f $P
rm -rf /tmp/clone; git clone -q --depth 1 https://x-access-token:$T@github.com/$O/$R.git /tmp/clone
rsync -a --delete --exclude node_modules --exclude .git "$W/src/" /tmp/clone/src/
rsync -a --delete --exclude node_modules "$W/tools/" /tmp/clone/tools/
[ -d "$W/data" ] && rsync -a --delete "$W/data/" /tmp/clone/data/
cp "$W/index.html" /tmp/clone/index.html; [ -f "$W/README.md" ] && cp "$W/README.md" /tmp/clone/README.md
cd /tmp/clone; git add -A; git -c user.name=maintainer -c user.email=maintainer@users.noreply.github.com commit -q -m "$1" || echo nochange
git push -q origin HEAD:main; git log --oneline -1; rm -f /tmp/wf.json; cd /; rm -rf /tmp/clone
