# LA_Hacks_2023- BreachWARNing

Submitted by:
- Gabriela Liera
- Jake Gerber
- Saamarth Sethi
- Tyrus Tracey

## Overview

No two questions have ever been more relevant in the software dev world than:
**1. "Is my data secure?" **
**2. "Is my job secure?" **

Finding the answers may seem difficult, but it does exist: The California WARN Act legally requires employers to disclose to the government when they intend to let go of their employees. The U.S. Department of Health and Human Services (HHS) regularly posts records of large-scale data breaches across the country. 

However, both sources are typical of government websites: reliable, but out-of-date with current UI/UX standards. Our aim was to bring the data together into a modern package, to allow software devs to alleviate their concerns with the utmost ease.

## What it does
Breach WARNing shows up-to-date information on data breaches and job layoffs that may affect the target user. This information is displayed in a human-friendly format and also shows an infographic on data breaches by state.

## How we built it
Data scraping and wrangling was performed using Python, where we converted the original Excel files into .JSON where it could be sorted or aggregated. The website was developed using React, where data retrieval was conducted locally on-disk.

## Application Features
- Automatic web scraper grabs WARN data and data breach data every Tuesday and Thursday
- Scripts parse the data into varios json objects used in the website
- Users can view aggregate information about the top 3 companies with layoff notices and states affected by data breaches in Layoff-Warn.
- Users can view company information with layoff WARN notices ordered by newest/oldest effective date, number of employees affected, and alphabetically.
- Users can discover more company information along with a map displaying the address in Data breach.
- Users can view a US map displaying state information about data breaches.

## Project Demo

🌐 [See the project deployed here!](https://breachwarning.netlify.app/)

## Setup

### Dependencies

* [React](https://www.npmjs.com/package/react)
* [React-DOM](https://www.npmjs.com/package/react-dom)
* [React Router DOM](https://www.npmjs.com/package/react-router-dom) (v.6)
* [React0usa-map](https://www.npmjs.com/package/react-usa-map)
* [LeaftJS](https://leafletjs.com/index.html)
* [Pandas](https://www.npmjs.com/package/pandas-js)
* [Selenium](https://www.npmjs.com/package/selenium-webdriver)
* [Schedule](https://www.npmjs.com/package/node-schedule)

---

### Install Dependencies

Before installing dependiencies, you will need `node` and `npm` installed globally on your machine by installing [NodeJS](https://nodejs.org/en/download/) onto your machine.

To install the dependencies, run:

```sh
npm install
```

### Run App

In the repo directory, run the following in your terminal:

```sh
npm run start
```

Visit the web application in the browser

```console
http://localhost:3000/
```

### Deploy BreachWARNing

To deploy this application on Netlify, run the following in the repo directory:

```sh
npm install
npm run build
```

Upload the generated `build` folder to Netlify at:

```html
https://app.netlify.com/drop
```

<br/>

## Challenges we ran into

## Accomplishments that we're proud of
We've developed a functional, informative website that surpasses our MVP. 

## What we learned
It was interesting to learn how easy developing a website can be with today's tools. We certainly had many obstacles to overcome in developing our product, but these obstacles were not as daunting as they may have been 5-10 years ago.
Another take-away is that casting away the chase for perfection really lets creativity fly. Because of the nature of hackathons, we couldn't afford to worry about the little things that typically cause ruts in software development. We simply generated ideas and got to work on implementing them.
Finally, we've learned the importance of collaboration, as every team member has uniquely contributed valuable ideas and effort to the project. 

## What's next for BreachWARNing
To make it in-line with how most websites operate, we would like to have the data properly hosted on a database. This will make data retrieval more straightforward, and allow for more complex uses of the data. 




---

*Last Updated: April 2023*
