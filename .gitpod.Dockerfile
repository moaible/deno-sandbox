FROM gitpod/workspace-full

USER gitpod

RUN curl -fsSL https://deno.land/x/install/install.sh | sh
ENV DENO_INSTALL "/home/gitpod/.deno"
ENV PATH $PATH:$DENO_INSTALL/bin
