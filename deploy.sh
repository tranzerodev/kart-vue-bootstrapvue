#!/bin/sh     
set -e

host=$1
ssh -t -t ubuntu@$host <<EOF       
cd /opt/caravel-ui
git fetch --all
git reset --hard origin/master
npm install
npm run build
sudo service nginx restart
exit
EOF
