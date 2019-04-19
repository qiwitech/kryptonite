[![Build Status](https://travis-ci.org/qiwitech/kryptonite.svg?branch=master)](https://travis-ci.org/qiwitech/kryptonite)

# QIWI Blockchain Technologies. Kryptonite.

## Getting Started

```bash
# Clone the repo
git clone git@github.com:qiwitech/kryptonite.git
# Go to the repo directory
cd kryptonite
# Install all dependencies
npm i
```

## Deployment

The sources are ready to be deployed to Google Firebas

#### Manual deployment

```bash
# Build an application into build/ directory
npm run build
firebase use default --token $FIREBASE_DEPLOY_TOKEN
firebase deploy --token $FIREBASE_DEPLOY_TOKEN
```
