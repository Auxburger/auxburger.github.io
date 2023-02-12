# Swift on Ubuntu

This tutorial will help you with setting up a development environment for Swift with VSCode. In this tutorial i will consider Ubuntu since this is my common distribution. Basic knowledge of working with Linux and the shell is helpful 😊

## Install the Required Dependencies

To start, make sure your system is up-to-date. Open a terminal and run the following command:

```shell
sudo apt update && sudo apt upgrade
```

Furthermore, Swift requires a number of libraries to be installed on the system. You can install all the [required dependencies](https://www.swift.org/download/#installation-1) by running the following command:

```shell
sudo apt install \
          binutils \
          git \
          gnupg2 \
          libc6-dev \
          libcurl4-openssl-dev \
          libedit2 \
          libgcc-9-dev \
          libpython3.8 \
          libsqlite3-0 \
          libstdc++-9-dev \
          libxml2-dev \
          libz3-dev \
          pkg-config \
          tzdata \
          unzip \
          zlib1g-dev
```

## Download Swift

Next, download the latest stable release of Swift from the official [Swift website](https://swift.org/download/#releases). You can download the tar file by running the following command in the terminal:

```shell
wget https://download.swift.org/swift-5.7.3-release/ubuntu2204/swift-5.7.3-RELEASE/swift-5.7.3-RELEASE-ubuntu22.04.tar.gz
```

After downloading the tar file, extract it into the `~/swift` folder by running the following command:

```shell
mkdir ~/swift && tar -xvzf swift-5.7.3-RELEASE-ubuntu22.04.tar.gz -C ~/swift
```

## Set Up Swift Environment Variables

To use Swift from the terminal, you need to set up environment variables. To do this, add the following line to the `~/.bashrc` file:

```shell
export PATH="$PATH:~/swift/swift-5.7.3-RELEASE-ubuntu22.04/usr/bin"
```

Finally, to update the environment variables, run the following command:

```shell
source ~/.bashrc
```

To test the installation, run the following command in the terminal:

```shell
swift --version
```

This should output the version of Swift that you have installed on your system. If everything has been set up correctly, you should now be able to start developing applications with Swift on Ubuntu 22.04 😊🎉
