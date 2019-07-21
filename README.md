# Single Page App
Single page app using NodeJs & EJS based on Bulma

# HOW TO - 5 STEPS

## I - Clone repo
```
git clone https://github.com/kkerchaoui/website.git && cd website
```

## II - Install package
```
npm install 
```

### III - Modify & Rename

*/config/config.Js*

**rename:** ```touch config/config_example.js config/config.js```

**description:** This file contain credentials needed to use nodemailer correctly but also the secret key used by recaptcha, the goal is to receive mail from a contact form  without being spammed by bots.

*/bin/www*

**description:** This file mainly contain server configuration, in this one you'll choose between using https / http . If you want to use HTTP, you only have to uncomment the right http lines and comment the https ones. However, to use HTTPS you have to modify path to your own ssl certificates.

### IV - Lauch the website
```
npm start
```

### V - Use it

Open a browser and go to localhost:3000
