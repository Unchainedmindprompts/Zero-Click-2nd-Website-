#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# IndexNow ping — the fastest recrawl signal for Bing/Yandex (and therefore for
# Copilot / ChatGPT's Bing-backed index).
#
# RUN THIS ONLY AFTER THE CHANGES ARE LIVE ON PRODUCTION. IndexNow tells the
# engines "recrawl these URLs now" — if you fire it before deploy, they'll
# recrawl and see the OLD content. The key file must also be live at:
#   https://www.kodecite.ai/98bef865f189b4ec29ce7c0d32c5d8a2.txt
#
# Usage:  bash scripts/indexnow-ping.sh
# ─────────────────────────────────────────────────────────────────────────────
set -euo pipefail

HOST="www.kodecite.ai"
KEY="98bef865f189b4ec29ce7c0d32c5d8a2"

curl -sS -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d "{
    \"host\": \"${HOST}\",
    \"key\": \"${KEY}\",
    \"keyLocation\": \"https://${HOST}/${KEY}.txt\",
    \"urlList\": [
      \"https://${HOST}/\",
      \"https://${HOST}/services\",
      \"https://${HOST}/pricing\",
      \"https://${HOST}/blog\",
      \"https://${HOST}/blog/google-reviews-wont-save-you-from-ai-search\"
    ]
  }" -w "\nHTTP %{http_code}\n"

# A 200 or 202 means accepted. (IndexNow returns no body.)
