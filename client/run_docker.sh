#!/usr/bin/env bash

# Build 
docker build -t adrian1690/se3front .

#run 
docker run -p 8000:8000 --rm adrian1690/se3front

# docker run -p 3001:3000 --rm --name vanpre node:12.16.1