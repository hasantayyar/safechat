FROM node:4.3.2

RUN useradd --user-group --create-home --shell /bin/false app &&\
  npm install -g npm

ENV HOME=/home/app

COPY package.json npm-shrinkwrap.json $HOME/chatapp/
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/chatapp
RUN npm install

USER root
COPY . $HOME/chatapp
RUN chown -R app:app $HOME/*
USER app

EXPOSE 3000

CMD ["node", "index.js"]
