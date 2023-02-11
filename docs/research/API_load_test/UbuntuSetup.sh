#!/bin/sh

#Just a quick script I wrote of all the commands I used to properly set up our server/codebase so I can quickly create a new instance
#Note! This script will only work on ubuntu systems. It is possible to install ffmpeg and rhubarb manually on other OS's. 
#I recommend however using ubuntu as it is readily supports by rhubarb, ffmpeg, and can run nodejs version 19. (Unlike Amazon linux)

echo "Begin System Setup. WARNING: Current directory will be used for installation"
sudo -i
echo "Installing Git"
sudo apt update
sudo apt install git
git --version
echo "Downloading Repo"
git clone https://github.com/speaking-portal-project-team-a/The-Speaking-Portal-Project.git
echo "Installing Nodejs v.19"
sudo apt update
sudo apt install -y curl
curl -fsSL https://deb.nodesource.com/setup_19.x | sudo -E bash -
sudo apt install -y nodejs
node --version
echo "Installing ffmpeg"
sudo apt update && sudo apt upgrade
sudo apt install ffmpeg
ffmpeg -version
echo "Installing Rhubarb"
sudo apt update
sudo apt-get install unzip
curl -LO https://github.com/DanielSWolf/rhubarb-lip-sync/releases/download/v1.13.0/Rhubarb-Lip-Sync-1.13.0-Linux.zip
unzip Rhubarb-Lip-Sync-1.13.0-Linux.zip
mv Rhubarb-Lip-Sync-1.13.0-Linux rhubarb
rm Rhubarb-Lip-Sync-1.13.0-Linux.zip
echo "Install app dependencies"
npm install --production
echo "Run API"
npm start
