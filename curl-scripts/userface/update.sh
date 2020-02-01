curl "http://localhost:4741/drinks/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "drink": {
      "name": "'"${NAME}"'",
      "shop_name": "'"${SHOP}"'",
      "date": "'"${DATE}"'"
    }
  }'

echo
