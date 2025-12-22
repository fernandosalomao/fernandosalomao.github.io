# Use a base image with Ruby pre-installed
FROM ruby:3.2

# Install dependencies
RUN apt-get update && apt-get install -y \
  build-essential \
  zlib1g-dev \
  libffi-dev \
  libxml2-dev \
  libxslt1-dev \
  git \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

# Set up a non-root user
ARG USERNAME=vscode
ARG USER_UID=1000
ARG USER_GID=1000

RUN groupadd --gid $USER_GID $USERNAME \
  && useradd --uid $USER_UID --gid $USER_GID -m $USERNAME \
  && apt-get update \
  && apt-get install -y sudo \
  && echo "$USERNAME ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/$USERNAME \
  && chmod 0440 /etc/sudoers.d/$USERNAME

# Set the default user
USER $USERNAME

# Install Bundler and Jekyll
RUN gem install bundler jekyll

# Set the working directory
WORKDIR /workspace
