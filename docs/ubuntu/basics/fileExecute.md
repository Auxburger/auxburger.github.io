# Executing Files

In Linux, you can execute a file by making it executable and then running it in the terminal.
You can make a file executable by using the "chmod" command. For example, if the file is named "script.sh", you can make it executable with the following command:

```shell
chmod +x script.sh
```

To run the file, simply type the name of the file in the terminal and press enter. For example:

```shell
./script.sh
```

Note that the "./" is necessary because it tells the terminal to look for the file in the current directory. If the file is in a different directory, you'll need to specify the full path to the file.

You can for example write your scripts with any text editor, mark it with #!/bin/bash and run it with those commands.


If the file has a different extension (e.g. .py for Python scripts), you'll need to specify the appropriate interpreter to run the file. For example, to run a Python script named "script.py", you would use the following command:

```shell
python script.py
```
