@smokeTest
Feature: Plan a trip with Trip Planner
I want to be able to plan a Trip and view the results in Trip Planner Page

Scenario Outline: Trip Search
Given Phileas is planning a trip
When he executes a trip plan from "<Source>" to "<Destination>"  
Then a list of trips should be provided   
Examples: 
|Source|Destination|
|North Sydney|Town Hall|
|Central|Hornsby|  