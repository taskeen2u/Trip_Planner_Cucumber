$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/tripOutline/TripFeature.feature");
formatter.feature({
  "line": 2,
  "name": "Plan a trip with Trip Planner",
  "description": "I want to be able to plan a Trip and view the results in Trip Planner Page",
  "id": "plan-a-trip-with-trip-planner",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smokeTest"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Trip Search",
  "description": "",
  "id": "plan-a-trip-with-trip-planner;trip-search",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Phileas is planning a trip",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "he executes a trip plan from \"\u003cSource\u003e\" to \"\u003cDestination\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "a list of trips should be provided",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "plan-a-trip-with-trip-planner;trip-search;",
  "rows": [
    {
      "cells": [
        "Source",
        "Destination"
      ],
      "line": 10,
      "id": "plan-a-trip-with-trip-planner;trip-search;;1"
    },
    {
      "cells": [
        "North Sydney",
        "Town Hall"
      ],
      "line": 11,
      "id": "plan-a-trip-with-trip-planner;trip-search;;2"
    },
    {
      "cells": [
        "Central",
        "Hornsby"
      ],
      "line": 12,
      "id": "plan-a-trip-with-trip-planner;trip-search;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Trip Search",
  "description": "",
  "id": "plan-a-trip-with-trip-planner;trip-search;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Phileas is planning a trip",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "he executes a trip plan from \"North Sydney\" to \"Town Hall\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "a list of trips should be provided",
  "keyword": "Then "
});
formatter.match({
  "location": "TripPlannerStepDef.phileas_is_planning_a_trip()"
});
formatter.result({
  "duration": 9627832704,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "North Sydney",
      "offset": 30
    },
    {
      "val": "Town Hall",
      "offset": 48
    }
  ],
  "location": "TripPlannerStepDef.he_executes_a_trip_plan_from_to(String,String)"
});
formatter.result({
  "duration": 2623232453,
  "status": "passed"
});
formatter.match({
  "location": "TripPlannerStepDef.a_list_of_trips_should_be_provided()"
});
formatter.result({
  "duration": 1514770391,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Trip Search",
  "description": "",
  "id": "plan-a-trip-with-trip-planner;trip-search;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Phileas is planning a trip",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "he executes a trip plan from \"Central\" to \"Hornsby\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "a list of trips should be provided",
  "keyword": "Then "
});
formatter.match({
  "location": "TripPlannerStepDef.phileas_is_planning_a_trip()"
});
formatter.result({
  "duration": 7237391298,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Central",
      "offset": 30
    },
    {
      "val": "Hornsby",
      "offset": 43
    }
  ],
  "location": "TripPlannerStepDef.he_executes_a_trip_plan_from_to(String,String)"
});
formatter.result({
  "duration": 2041317815,
  "status": "passed"
});
formatter.match({
  "location": "TripPlannerStepDef.a_list_of_trips_should_be_provided()"
});
formatter.result({
  "duration": 953532853,
  "status": "passed"
});
});