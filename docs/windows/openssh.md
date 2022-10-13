# SSH with OpenSSh agent in windows powershell

I struggled so long with this issue, that windows did not natively support ssh with the openssh agent.
But after years of waiting and trying out stuff it was finally time, such that one can do it:

#

First add openssh client
Add-WindowsCapability -Online -Name OpenSSH.Client~~~~0.0.1.0

generate your key
ssh-keygen -t ed25519 -c your.mail@here.com

Set the necessary services to automatic startup
Get-Service -Name sshd | Set-Service -StartupType Automatic
Get-Service ssh-agent | Set-Service -StartupType Automatic

start the ssh agent
Start-Service ssh-agent

check whether it is running
Get-Service ssh-agent

add the key to the agent
ssh-add ~\.ssh\id_ed25519

often you have to define git to use the right agent:
