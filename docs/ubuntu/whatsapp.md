# Separate Whatsapp Application

This is just a small tutorial on how to create your own kinda standalone WhatsApp in Ubuntu.

```conf title="whatsapp.desktop"
[Desktop Entry]
Name=WhatsApp
GenericName=WhatsApp
Comment=
Exec=google-chrome --app=https://web.whatsapp.com/
Icon=/usr/local/icons/whatsapp.png
Terminal=false
Type=Application
StartupNotify=true
MimeType=text/plain
X-Ubuntu-Gettext-Domain=Whatsapp
StartupWMClass=web.whatsapp.com
```
