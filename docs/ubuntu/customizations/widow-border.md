---
sidebar_position: 4
---

# Change the window border size

To change the size edit the file `~.config/gtk-3.0/gtk.css`.

```css
.header-bar.default-decoration {
	padding-top: 3px;
	padding-bottom: 3px;
	font-size: 0.8em;
}

.header-bar.default-decoration .button.titlebutton {
	padding: 0px;
}

window.ssd headerbar.titlebar {
	padding-top: 0px;
	padding-bottom: 0px;
	min-height: 0;
}

window.ssd headerbar.titlebar button.titlebutton {
	padding: 5px;
	min-height: 0;
	min-width: 0;
}
```
