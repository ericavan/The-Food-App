# Consultants-EAT-app

A Web App providing food options for business travelers, hosted by [GitHub Pages](https://pages.github.com/).

View live in production at https://getgrub-app.herokuapp.com.

## Prerequisites

  + Node.js, and NPM
  + Git

## Installation

Fork this repo to make a copy under your own control, then clone your forked copy (for example, downloading it onto your Desktop). Locate the directory you downloaded, and open it with your file finder.

Fork [this repository](https://github.com/ericavan/The-Food-App) on GitHub, then from your forked repo's homepage, click the green button to reveal its SSH address (e.g. `git@github.com:YOUR_USERNAME/my-first-node-app.git`). Use the SSH address to clone, or download, your forked repo onto your local machine, perhaps onto the Desktop:

```sh
cd ~/Desktop
git clone git@github.com:YOUR_USERNAME/my-first-nodejs-app.git
```
Before running any of the commands below, navigate into this directory from the command-line:
```sh
cd the-food-app
```
Install package dependencies:
```sh
npm install
```
> NOTE: this looks at the package dependencies defined in the "package.json" file and installs them locally into the "node_modules" directory.

Install Axios
```sh
npm install axios --save
```

## Setup
Obtain an [Yelp API Key](https://www.yelp.com/developers/documentation/v3/authentication) (i.e. `YELP_API_KEY`).
Create a new file called ".env" in the root directory of your local repo, and place inside the following contents, specifying your own values as applicable:
```sh
# this is the ".env" file...
YELP_API_KEY="______"
```

## Usage

Run the web app.

```sh
# Mac Terminal:
DEBUG=my_app_blah_blah:* npm start

# Windows Command Prompt:
set DEBUG=my_app_blah_blah:* & npm start
```

Examine the contents of each of the scripts below as you run them in order.

### Basic Scripts

The "index" script shows we can run and populate some pages like the Home page, the About page, a food search form, and a food results page:

```sh
node index.js
```

### Index, Food, & Food Results

These scripts demonstrate asynchronous requests using Axios.

Run the index.js script to fetch some yelp data, specifying a location and price range variables at runtime:

```sh
node app/index.js
```
Script will communicate with Yelp API and pull list of top restaurants matching search input criteria.

