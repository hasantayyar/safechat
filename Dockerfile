FROM node:4.3.2

RUN useradd --user-group --create-home --shell /bin/false app &&\
  npm install -g npm

EXPOSE 3000

CMD ["node", "index.js"]
