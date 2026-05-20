---
date: "2023-09-05T00:00:00Z"
title: Quick FTWs
tags : ["Tools", "Scripts"]
---

## For the Wins (FTW)

- Below will be a compilation of one-liners and other tricks to solve common issues that i come across



#### Installing Python2.7 on Kali Linux 

```bash 
sudo apt install python2.7 python2.7-dev -y && curl -O https://bootstrap.pypa.io/pip/2.7/get-pip.py && sudo python2.7 get-pip.py
```

#### Fixing the invalid "egg_info" command 

```bash 
'"'"'/tmp/pip-req-build-aSU9AP/setup.py'"'"'; __file__='"'"'/tmp/pip-req-build-aSU9AP/setup.py'"'"';f=getattr(tokenize, '"'"'open'"'"', open)(__file__);code=f.read().replace('"'"'\r\n'"'"', '"'"'\n'"'"');f.close();exec(compile(code, __file__, '"'"'exec'"'"'))' egg_info --egg-base /tmp/pip-pip-egg-info-GmrXHL
         cwd: /tmp/pip-req-build-aSU9AP/
    Complete output (10 lines):
    /usr/lib/python2.7/distutils/dist.py:267: UserWarning: Unknown distribution option: 'extras_require'
      warnings.warn(msg)
    /usr/lib/python2.7/distutils/dist.py:267: UserWarning: Unknown distribution option: 'install_requires'
      warnings.warn(msg)
    usage: setup.py [global_opts] cmd1 [cmd1_opts] [cmd2 [cmd2_opts] ...]
       or: setup.py --help [cmd1 cmd2 ...]
       or: setup.py --help-commands
       or: setup.py cmd --help
    
    error: invalid command 'egg_info'

```

Solution

```bash 
pip2 install --upgrade pip setuptools
```

or 

```bash 
pip2 install . --no-use-pep517
```

#### WGET Recursive Download

-
```bash
wget -r -np -nH --cut-dirs=1 -A . http://sites.com/dir/
```


#### Medium Paywall bypass 

```http://webcache.googleusercontent.com/search?q=cache:mediumlinkehere```

#### Fixing Elrepo mirror issues 

# how it starts 

```bash
sudo yum install elrepo-release epel-release
```
But from there the repo becomes unusable 

to fix that 

```sudo dnf clean all```
```dnf makecache --refresh```


To fix the mirror issue edit /etc/yum.repos.d/elrepo/elrepo.repo, 
comment out 
mirrorlist=http://mirrors.elrepo.org/mirrors-elrepo.el8

save and ```dnf makecache --refresh```
<More to come>

Easy ntfs files mount 

... 

Step 1: Identify the Image
First, you need to ensure that your system recognizes the NTFS filesystem within the .raw image. You can use the file command to confirm the file type and that it's a disk image.



```bash
file ntfs.raw
```

Step 2: Connect the Image as a Loop Device
Before mounting, you need to connect the raw image file as a loop device. This process makes the file accessible as if it were a physical disk. You might need root privileges for this.

```bash
sudo losetup -f --show ntfs.raw
```
This command will output something like /dev/loop0, indicating the loop device created for your image.

Step 3: Mount the Filesystem
Once you have your loop device, you can attempt to mount it. If you're dealing with a potentially damaged or non-standard filesystem, you might need to try mounting it read-only at first to prevent any damage.

```bash
sudo mkdir /mnt/ntfs
sudo mount -o ro,loop /dev/loop0 /mnt/ntfs
```
This sequence of commands creates a mount point at /mnt/ntfs and mounts the loop device there. The -o ro option mounts the filesystem read-only, which is safer for forensic analysis.

If Mounting Fails
If the standard mounting procedure fails due to filesystem errors or because the filesystem isn't recognized, it's a sign that the file system might be heavily damaged or deleted. In such cases, you'd need to revert to the file recovery and carving methods mentioned previously. Tools like testdisk can sometimes repair the filesystem enough to make it mountable.

Alternative: Using ntfs-3g
For NTFS filesystems, the ntfs-3g driver provides better compatibility and might offer improved performance and reliability over the kernel's built-in NTFS support.

```bash
sudo ntfs-3g /dev/loop0 /mnt/ntfs
```
This command uses ntfs-3g to mount the filesystem, potentially providing better support for NTFS features and improved read/write reliability.

Accessing the Data
Once mounted, navigate to the mount point (/mnt/ntfs) and explore the filesystem. You can use standard Linux commands to search for and investigate files, looking for the hidden flag.

```bash
cd /mnt/ntfs
ls -la
```
Safety and Cleanup
When you're done, remember to unmount the filesystem and detach the loop device to clean up your environment and prevent any accidental writes or modifications.

```bash
sudo umount /mnt/ntfs
sudo losetup -d /dev/loop0
```
