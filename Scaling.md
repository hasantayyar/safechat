#Scaling with Elastic Beanstalk
.ebextensions/files.config is a necessary file for EB to use socket.io app with nignix revers proxy.

You can create and deploy your app to EB with these commands
```
$ eb init #you will be promted to select region and app
$ eb create socket-env
$ eb deploy # eb create may also deploy the app
```
![EB application and environment](https://raw.githubusercontent.com/hasantayyar/safechat/master/assets/images/eb-app-env.png)

After your environment turns to green you can change your scaling settings.
![EB scaling](https://raw.githubusercontent.com/hasantayyar/safechat/master/assets/images/eb-scaling.png)

![EB scaling](https://raw.githubusercontent.com/hasantayyar/safechat/master/assets/images/eb-scaling-settings.png)
