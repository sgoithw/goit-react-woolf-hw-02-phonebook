#!/bin/bash

docker run -v -rm $(pwd):/app -w /app  node bash -it -c "npm install"