#!/usr/bin/env bash
LOCAL=$(pwd)

CLIENT_PATH="$LOCAL/JavaScriptAvancado/client"
SERVER_PATH="$LOCAL/JavaScriptAvancado/server"

git submodule init
git submodule update
cd $JAVASCRIPT_AVANCADO_PATH

cd $CLIENT_PATH
pwd
bash install_npm_client_dependences.sh

cd $SERVER_PATH
pwd
bash install_npm_server_dependences.sh
