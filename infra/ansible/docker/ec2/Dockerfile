FROM amazonlinux:2017.03

RUN yum install -y passwd openssh openssh-server openssh-clients sudo

RUN useradd ec2-user
RUN passwd -f -u ec2-user

RUN mkdir -p /home/ec2-user/.ssh; \
    chown ec2-user /home/ec2-user/.ssh; \
    chmod 700 /home/ec2-user/.ssh

RUN echo "ec2-user ALL=NOPASSWD: ALL" >> /etc/sudoers.d/ec2-user

COPY keys/authorized_keys /home/ec2-user/.ssh/authorized_keys
RUN chown ec2-user /home/ec2-user/.ssh/authorized_keys; \
    chmod 600 /home/ec2-user/.ssh/authorized_keys

RUN sed -ri 's/#PermitRootLogin yes/PermitRootLogin yes/g' /etc/ssh/sshd_config; \
    sed -ri 's/UsePAM yes/#UsePAM yes/g' /etc/ssh/sshd_config; \
    sed -ri 's/#UsePAM no/UsePAM no/g' /etc/ssh/sshd_config

RUN /etc/init.d/sshd start

EXPOSE 22
CMD ["/sbin/init"]
