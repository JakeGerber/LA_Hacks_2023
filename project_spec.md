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

### 1. User Features (Required and Optional)

Required Features:

- Users can search for food of choice e.g bread, salt
- User can filter by preferred brand 
- Users can add expiration date 
- User can view price of food item 
- Users can save item to a list
- User can view total food cost

Stretch Features:

- Users can save item to a database (Room DB)
- Users can save frequent products unto a list
- User receive a reminder when food item is about to expire

### 2. Chosen API(s)

- **Kroger** 
  - https://developer.kroger.com/reference/#section/Introduction
  - Users can search for food of choice e.g bread, salt
  - User can filter by preferred brand 
- Room DataBase
    - https://developer.android.com/jetpack/androidx/releases/room
    - Users can save item to a database

### 3. User Interaction

Required Feature

- **Kroger**
    - **Users can search for food of choice**
      - => User type a search term ( for example bread, beer, etc)
      - => Results display based on the typed in term
    - **Users can add expiration date & price**
      - => User types a date in format MM/YY 
      - => Results display expiration date of items currently being searched
      - => User types in price in the format 9.00 for example
      - => Results display price of items currently being searched
    - **User can filter by preferred brand**
      - => User select from a dropdown menu
      - => Results filtered based on the selection
- **Room DataBase**
    - **Users can save item to a list**
      - => User chooses food itme from search results
      - => Food items, expiration date, and price is added to list
    - **Users can view total food cost**
      - => Total food cost is calcuated based on all items on list
      - => Users can view total cost on screeen


## Wireframes

### Low-Fidelity Wireframe - Sketch
<img src="" width=300 height=400>

### Digital Wireframes & Mockups
<img src="" width=600>

### Interactive Prototype

## Build Notes

Here's a place for any other notes on the app, it's creation 
process, or what you learned this unit!  

For Milestone 2, include **2+ GIFs** of the build process here
