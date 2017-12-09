#!/usr/bin/env bash
docker build -t elasticsearch . &&
docker run -d -p 9200:9200 -p 9300:9300 -v /usr/share/elasticsearch/data --name elastic elasticsearch