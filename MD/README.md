# I have an idea

So basically it's a free version of "Google Drive", but you can upload your own files to this service which has very generous size limits. This will free up egress, account storage, and allow reuse of assets (such as your favorite CSS template that you made).

**I've decided on this project because I don't think that this would be too difficult (starts to think about Idkwhttph's Pokemon Adventures)**

Here are the specs:

# How it works

People can create accounts (replit OR github) on this website to be able to upload files to the server under a generous quota (more then replit) to a server of their choice, namely Github or Replit (only if possible). Once the upload is complete, users will then be able to access their content through their account-name-based suffix, up to a certain limit. Users can increase this quota by donating cycles on a repl, which will be checked via GraphQL.

# Roadmap

|                       Task                       |                  Status                  |                                                                      Notes                                                                      |
| :----------------------------------------------: | :--------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------: |
|               Basic API for Github               | ![0%](https://geps.dev/progress/00?.png) | https://stackoverflow.com/questions/31563444/rename-a-file-with-github-api https://docs.github.com/en/rest/repos/contents?apiVersion=2022-11-28 |
|               Basic API for Replit               | ![0%](https://geps.dev/progress/00?.png) |                                                                    REDACTED                                                                     |
|   Express.js rudimentary UI to link basic API    | ![0%](https://geps.dev/progress/00?.png) |                           Just boilerplate HTML, match the basic structure of the finished product. Make it function.                           |
| No-auth prototype of finished website, minus CSS | ![0%](https://geps.dev/progress/00?.png) |                              Finish up the basic framework to work, and add text and labels. Basic CSS if needed,                               |
|                Clean up the code                 | ![0%](https://geps.dev/progress/00?.png) |                                                                 Very important                                                                  |
|           Add auth and session cookies           | ![0%](https://geps.dev/progress/00?.png) |                                                                                                                                                 |
|                    Add quota                     | ![0%](https://geps.dev/progress/00?.png) |                                                                See Prices chart                                                                 |
|                Clean up the code                 | ![0%](https://geps.dev/progress/00?.png) |                                                                 Very important                                                                  |
|                    Finish CSS                    | ![0%](https://geps.dev/progress/00?.png) |                                                                                                                                                 |

# Pricing

| **$0 Hobbyist**                          | **$2 Hacker {BEST DEAL}**                    | **$5 Programmer**                        |
| ---------------------------------------- | -------------------------------------------- | ---------------------------------------- |
| 1 GB storage                             | 4 GB storage                                 | 10 GB account storage                    |
| 24/7 uptime                              | 24/7 uptime                                  | 25K requests per day / 100K per month    |
| 1K requests per day / 10K per month      | 5K requests per day / 25K requests per month | 20K writes per month                     |
| 1K writes per month                      | 4K writes per month                          | Choice of Replit and Github as file host |
| Choice of Replit and Github as file host | Choice of Replit and Github as file host     | API access                               |
| Standard content delivery                | Fast content delivery                        | Teams?                                   |

# Aspects of this project

- API (Github and Replit file storage)
- Functional website design (Express.js, HTML, JS)
- Web-dev (HTML, CSS, JS)
- Code refactoring (Cleaning up code)
- Other (please comment)!
