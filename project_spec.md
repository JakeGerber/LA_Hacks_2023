## Table of Contents

1. [App Overview](#App-Overview)
1. [Product Spec](#Product-Spec)
1. [Wireframes](#Wireframes)
1. [Build Notes](#Build-Notes)

## App Overview

Finding the answers may seem difficult, but it does exist: The California WARN Act legally requires employers to disclose to the government when they intend to let go of their employees. The U.S. Department of Health and Human Services (HHS) regularly posts records of large-scale data breaches across the country. 

However, both sources are typical of government websites: reliable, but out-of-date with current UI/UX standards. Our aim was to bring the data together into a modern package, to allow software devs to alleviate their concerns with the utmost ease.

## What it does
Breach WARNing shows up-to-date information on data breaches and job layoffs that may affect the target user. This information is displayed in a human-friendly format and also shows an infographic on data breaches by state.

## Product Spec

### 1. User Features 

Required Features:
- Users can view aggregate information about the top 3 companies with layoff notices and states affected by data breaches in Layoff-Warn.
- Users can view company information with layoff WARN notices ordered by newest/oldest effective date, number of employees affected, and alphabetically.
- Users can discover more company information along with a map displaying the address in Data breach.
- Users can view a US map displaying state information about data breaches.

### 2. Tech

- **Selenium** 
  - The application will automatically scrape the data information every Tuesday and Thursday for update WARN and data breach information 
- **Pandas**
  - The application will  parse the CVS file generated from the web scraper into a json object
- **Leaftet**
  - Users can view the address of a company using a map

