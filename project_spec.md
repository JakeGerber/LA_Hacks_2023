## Table of Contents

1. [App Overview](#App-Overview)
1. [Product Spec](#Product-Spec)
1. [Wireframes](#Wireframes)
1. [Build Notes](#Build-Notes)

## App Overview

### Description 


### Website Evaluation

 -  **Web:** 
-   **Story:**
    - 
-   **Market:**
    - 
-   **Habit:**   
    
-   **Scope:** 
  

## Product Spec

### 1. User Features 

Required Features:
- Users can view aggregate information about the top 3 companies with layoff notices and states affected by data breaches
Layoff-Warn
- Users can view company information with layoff WARN notices ordered by newest/oldest effective data, number of employees affected, and aphabetically
-	Users can discover more company information along with a map displaying the address
Data breach
- Users can view a US map displaying state information about data breaches

### 2. Tech

- **Selenium** 
  - The application will automatically scrape the data information every Tuesday and Thursday for update WARN and data breach information 
- **Pandas**
  - The application will  parse the CVS file generated from the web scraper into a json object
- **Leaftet**
  - Users can view the address of a company using a map

## Build Notes

