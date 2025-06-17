#!/bin/bash
cd /home/tetardtek/github/xmassClick
git fetch origin main
LOCAL=$(git rev-parse HEAD)
REMOTE=$(git rev-parse origin/main)
if [ "$LOCAL" != "$REMOTE" ]; then
  git pull
  npm run build
fi
echo "Mise à jour auto exécutée le $(date)" >> /home/tetardtek/github/xmassClick/cron.log
