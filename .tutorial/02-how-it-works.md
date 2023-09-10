# How GitCDN works

How does GitCDN use the *“power of github”* to quickly and efficiently deliver files all over the globe?

## 1. GitHub API
GitCDN uses Github to store its files, so using Github's API would be a must. Whenever someone requests a file, we fetch it through the Github API.

## 2. Pingers
How can a server send files if the server is not awake? We use pingers, and *lots of them*. In fact, the [Pinger Log](other/pinger.log) is full of logged requests from our constant pingers, but only represents 1/4 of the actual amount of pings and pingers actively testing this website for any outages.

## 3. PostgreSQL
Want to use a database? Don't like Replit's built-in database? Use PostgreSQL instead! We use PostgreSQL to store all of our persistent data, while staying clear of the paid Replit PostgreSQL service, we managed to set one up completely free of charge.

## 4. Web Servers
To actually transfer the requested file through the internet, we need to *route* the requests, ensuring that requests for our homepage don't get mixed up with requests for a javascript file being hosted on our service.
