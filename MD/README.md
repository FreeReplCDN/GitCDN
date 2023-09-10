[The original post on Ask](https://ask.replit.com/t/currently-debating-legalities-gitcdn-freereplcdn-a-free-cdn-hosting-service-using-the-power-of-github/48635?u=qwertyqwerty88)

# I have an idea

So basically it's a free version of "Google Drive", but you can upload your own files to this service which has very generous size limits. This will free up egress, account storage, and allow reuse of assets (such as your favorite CSS template that you made).

**I've decided on this project because I don't think that this would be too difficult (starts to think about Idkwhttph's Pokemon Adventures)**

Here are the specs:

## How it works

People can create accounts (replit OR github) on this website to be able to upload files to the server under a generous quota (more then replit) to a server of their choice, namely Github or Replit (only if possible). Once the upload is complete, users will then be able to access their content through their account-name-based suffix, up to a certain limit. Users can increase this quota by donating cycles on a repl, which will be checked via GraphQL.

# To Do

- [ ] **67%** - Basic API for GitHub
- [ ] **16%** - Basic API for PostgreSQL
- [ ] **00%** - Express.js basic UI to connect basic API with HTML, e.g. upload file, create repo if not exist, and modify files.
- [ ] **40%** - Add sign-in page at `/login` that mirrors the effect of signing in
- [ ] **50%** - Add text and labels, and make the prototype contain the basic structure of the finished product, with text, labels, etc.
- [ ] **00%** - Clean up the code
- [ ] **00%** - Add username creation w/ blacklist
- [ ] **00%** - Move login to upload page and send auth data to server, but still use the placeholder repo.
- [ ] **00%** - Clean up the code
- [ ] **00%** - Create a repo with the user's username when recieving user-uploaded files and use that instead
- [ ] **00%** - Functionality test
- [ ] **00%** - Clean up the code
- [ ] **00%** - Intuitivity test
- [ ] **06%** - Add CSS
- [ ] **00%** - Appearance test
- [ ] **00%** - Add basic quota system, and test it out by setting absurdly low values
- [ ] **00%** - Add cycle detection to the quota function
- [ ] **00%** - Perfect those little things that feel not-quite-right
- [ ] **00%** - PRODUCTION, SEO, AND PROMOTION

## OPTIONAL

- [ ] **00%** - Basic API for Replit
- [ ] **00%** - Add admin-only endpoint `/replit` to enable the "replit" flag in their account
- [ ] **00%** - Implement Replit API alongside of Github API.
- [ ] **00%** - Functionality test
- [ ] **00%** - Add HTML to choose Replit mode and Github mode instead of replit flag
- [ ] **00%** - Functionality test
- [ ] **00%** - Tweak CSS
- [ ] **00%** - Asthetics test


# Pricing

| **$0 Hobbyist**                          | **$2 Hacker {BEST DEAL}**                    | **$5 Programmer**                        |
|------------------------------------------|----------------------------------------------|------------------------------------------|
| 1 GB storage                             | 4 GB storage                                 | 10 GB account storage                    |
| 24/7 uptime                              | 24/7 uptime                                  | 25K requests per day / 100K per month    |
| 1K requests per day / 10K per month      | 5K requests per day / 25K requests per month | 20K writes per month                     |
| 1K writes per month                      | 4K writes per month                          | Choice of Replit and Github as file host |
| Choice of Replit and Github as file host | Choice of Replit and Github as file host     | API access                               |
| Standard content delivery                | Fast content delivery                        | Teams?                                   |
