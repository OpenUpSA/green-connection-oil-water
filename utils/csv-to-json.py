# Script to convert CSV with Content ID to properly structured JSON for Next-Intl I18n
# CSV comes from the Google Sheet
import csv
import json
import re

csv_file_path = "../messages/en.csv"
json_file_path = "../messages/en.json"

json_data = {}


def set_nested_value(d, keys, value):
    for i, key in enumerate(keys[:-1]):
        match = re.match(r"([a-zA-Z0-9_-]+)\[([0-9]+)\]", key)
        if match:
            key_name = match.group(1)
            index = int(match.group(2))

            if key_name not in d:
                d[key_name] = []

            while len(d[key_name]) <= index:
                d[key_name].append({})

            d = d[key_name][index]
        else:
            if key not in d:
                d[key] = {}
            d = d[key]

    last_key = keys[-1]
    match = re.match(r"([a-zA-Z0-9_-]+)\[([0-9]+)\]", last_key)
    if match:
        key_name = match.group(1)
        index = int(match.group(2))
        if key_name not in d:
            d[key_name] = []
        while len(d[key_name]) <= index:
            d[key_name].append({})
        d[key_name][index] = value
    else:
        d[last_key] = value


with open(csv_file_path, mode="r", encoding="utf-8") as csv_file:
    csv_reader = csv.DictReader(csv_file)

    for row in csv_reader:
        content_id = row["Content ID"]
        english_value = row["English"]

        keys = content_id.split(".")

        set_nested_value(json_data, keys, english_value)

with open(json_file_path, mode="w", encoding="utf-8") as json_file:
    json.dump(json_data, json_file, indent=4, ensure_ascii=False)

print(f"CSV file converted to nested JSON with arrays and saved as {json_file_path}")
