#!/usr/bin/env bash

# Build 
docker build -t adrian1690/se3front .

# Push to docker hub 
docker push adrian1690/se3front

# Delete existing pods
kubectl delete pod -l tier=client-app-pod

# Check new pods
kubectl get pods

