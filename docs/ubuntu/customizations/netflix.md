---
sidebar_position: 1
---

# Separate Netflix Application

This is just a small tutorial on how to create your own kinda standalone WhatsApp in Ubuntu.

```conf title="netflix.desktop"
[Desktop Entry]
Name=Netflix
GenericName=Netflix
Comment=
Exec=google-chrome --app=https://netflix.com/
Icon=/usr/local/icons/netflix.png
Terminal=false
Type=Application
StartupNotify=true
X-Ubuntu-Gettext-Domain=Netflix
StartupWMClass=netflix.com
```
