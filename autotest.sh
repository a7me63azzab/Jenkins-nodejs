#!/bin/bash

echo 'Testing apis with newman and jenkins .... '

EnvironmentFile="Demo-OpenWeatherMap.postman_environment.json"

export PATH="/usr/bin/newman:$PATH"

cd postman-tests/

pwd  

for file in `find . -type f -name '*.postman_collection.json' -exec basename {} \;`; do
    echo "the next file is $file"
    newman run $file -e $EnvironmentFile
done