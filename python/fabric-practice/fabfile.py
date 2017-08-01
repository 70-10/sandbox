from fabric.api import sudo, cd, env, local

def app1():
  env.hosts = ["192.168.1.10"]
  env.user = "vagrant"
  env.key_filename = "./.vagrant/machines/app1/virtualbox/private_key"

def app2():
  env.hosts = ["192.168.1.20"]
  env.user = "vagrant"
  env.key_filename = "./.vagrant/machines/app2/virtualbox/private_key"

def deploy():
  sudo("yum -y install git")
  sudo("git clone https://github.com/70-10/node-boilerplate /tmp/node-boilerplate")
