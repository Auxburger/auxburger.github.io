# Log in and boot screen color 
## Ubuntu < 20
<p>edit '/usr/share/plymouth/themes/ubuntu-logo/ubuntu-logo.script':</p>
<p><code>Window.SetBackgroundTopColor (0.11, 0.11, 0.11); </code>     # Nice colour on top of the screen fading to</p>
<p><code>Window.SetBackgroundBottomColor (0.11, 0.11, 0.11); </code>  # an equally nice colour on the bottom</p>

<p>There are also many lines containing "noise", remove     them.</p>
<p>then update with <code>sudo update-initramfs -u</code></p>

## Ubuntu 20
<p> In Ubuntu 20 it's `/usr/share/gnome-shell/theme/Yaru/gnome-shell-theme.gresource` </p>
<p>For loginscreen change '/usr/share/gnome-shell/theme/gdm3.css' noise-texture.png line of class lockDialogGroup. Should look like this:</p>

```css
#lockDialogGroup {<br>
background: #000000 url(file:///home/darius/Pictures/lockscreen.jpg);<br>
background-repeat: repeat;<br>
background-size: cover;<br>
background-position: center;<br>
}
```

<p>For grub change '/usr/share/plymouth/themes/default.grub' color. and update grub with <code>sudo update-grub</code></p>

```css
.login-dialog .modal-dialog-button {
padding: 4px 18px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
background-color: #6c757d;
border-color: #6c757d;
color: #f6f5f4;
}

.login-dialog .modal-dialog-button:hover, .login-dialog .modal-dialog-button:focus {
background-color: #5a6268;
border-color: #5a6268;
}

.login-dialog .modal-dialog-button:active {
box-shadow: none;
background-color: #43494e;
border-color: #43494e;
}

.login-dialog .modal-dialog-button:insensitive {
color: #9a9b9b;
border-color: #c5cbd0;
background-color: #fbfbfc;
box-shadow: none;
text-shadow: none;
icon-shadow: none;
border-color: #43494e;
background-color: #43494e;
color: rgba(246, 245, 244, 0.7);
}
```