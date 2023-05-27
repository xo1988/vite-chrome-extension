# coding=utf8

import pandas as pd
import os
import json

def write_json(target_path, target_file, data):
    if not os.path.exists(target_path):
        try:
            os.makedirs(target_path)
        except Exception as e:
            print(e)
            raise
    with open(os.path.join(target_path, target_file), 'w') as f:
        json.dump(data, f, indent=2)

local = pd.read_excel('local.xlsx')
localArr = local.to_numpy()
columns = local.columns
(rn, cn) = local.shape

local_jsons = []
for i in range(1, cn):
    local_json = {}
    for j in range(0, rn):
        local_json[localArr[j,0]] = {
            "message": localArr[j,i]
        }
    
    local_jsons.append(local_json)

print(local_jsons)

for j in range(1, cn):
    path = 'chrome/_locales/{}/messages.json'.format(columns[j])
    write_json('chrome/_locales/{}'.format(columns[j]), 'messages.json', local_jsons[j-1])
    