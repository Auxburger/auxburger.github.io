---
sidebar_position: 2
date: 2022-06-05T17:00
---

# Node Version Manager

[`nvm`](https://github.com/nvm-sh/nvm) is a very useful unix cli-tool when it's all about changing between different node versions. You are able to install the by your project required Node.js version and switch between them by picking a default. There is also a version developed for windows which is slightly different. We will focus on the unix tool in this tutorial (You can also install it in `wsl`).

## Installation

To install nvm on linux execute the following script:

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

 Next, check whether the following lines are contained in your `~/.bashrc` file, otherwise append them on the end of the file:

```sh
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

## Node Version Control

The next step is to install the node version you need. To see the list of installed and available versions (only the lts versions are displayed as available) type

```sh
nvm ls
```

Then, to install for example the newest version of lts `v16.*` type

```sh
nvm install lts/gallium
```

Furthermore, define your version as default to always use it when opening a new terminal with, in this case

```sh
nvm alias default lts/gallium
```

When you installed more versions you an switch between them by defining the required version as default.
