#!/usr/bin/env bash
LOCAL=$(pwd)
JAVASCRIPT_AVANCADO_PATH="$LOCAL/JavaScriptAvancado/aula_1/aluraframe/"
CLIENT_PATH="$JAVASCRIPT_AVANCADO_PATH/client"
SERVER_PATH="$JAVASCRIPT_AVANCADO_PATH/server"

git submodule init
git submodule update
cd $JAVASCRIPT_AVANCADO_PATH

cd $CLIENT_PATH
pwd
bash install_npm_client_dependences.sh

cd $SERVER_PATH
pwd
bash install_npm_server_dependences.sh
