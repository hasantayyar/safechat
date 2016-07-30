#Safe Chat

##Deploying to Elastic Beanstalk

```
$ eb init
$ eb create socket-env
$ eb deploy
```

##Run
`$ docker-compose -f docker-compose.prod.yml up`

##Running locally

```
$ docker-compose build
$ docker-compose up
```

##Testing
You need mocha `$ npm install mocha -g`
The just run `mocha`

![preview 1](https://raw.githubusercontent.com/hasantayyar/safechat/master/assets/images/preview-1.png)
![preview 2](https://raw.githubusercontent.com/hasantayyar/safechat/master/assets/images/preview-2.png)

