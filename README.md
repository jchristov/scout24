# Task challenge

## What is given

*   an array of JSON properties
*   mock-ups with the layout of the properties for desktop, tablet and mobile
*   Use https://github.com/angular/angular-seed as a base project or any other project using these technologies

## Requirements

*   use Angular.js `^1.5` _→ **DONE** (Angular.js 1.5.11 used)_
*   Create a page called `immobilien` which renders given properties as a list of elements, responsive, with the given mock-ups. _→ **DONE**_
*   The `css` can be written in `sass` or `stylus` or plain css. _→ **DONE** (using Bootstrap 3.3.7 together with plain CSS)_
*   Unit test coverage should be `100%` _→ **NOT DONE** (there is not much to unit-test)_ 😊
*   Show the `NEW` badge if the `meta.creation.date` is not older than 2 days. _→ **DONE** (no tag was shown as all provided data is from 2017; had to modify some records to test!)_
*   Show the `BALCONY` badge if `area.numberOfBalconies` is greater than 0. _→ **DONE**_
*   Show `primaryPrice` formatted properly _→ **DONE** (using default |number formatter)_
*   Show `area.primaryArea` formatted properly _→ **DONE** (using default |number formatter; not clear which of the two area properties: primaryArea vs. totalArea should be bound, though!)_
*   Show logo if is defined in `meta.features.LOGO_ON_RESULTLIST.url` _→ **DONE** (strangely though the last logo link, for exposeId=59ae4af7f73fe2e854cf07e0 is crashing the remote server with 500 error!)_ 😊
*   Show private badge if `meta.account.cwid` is not defined. _→ **DONE** (this property is not defined for any of the provided records; had to replace it with `meta.privateInsertion` instead!)_
*   Insert a blank div placeholder (`red` background) in the position `6` and `13` which could represent the adverts. _→ **DONE**_
*   Add a `collapsed/expand` button for every element (see right top `X` button in the mock-ups) which should collapse/expand any property in the list as can be seen in the `minimize_collapsed` / `minimized_expanded` attachments. _→ **NOT DONE** (unfortunately didn't have enough time to implement)_ 😩

## Solution

*   npm install
*   npm start
*   Open http://localhost:7777

## Notes

Due to time constraints I have not completed the following requirements:

*   Mobile responsive layout - _the layout currently breaks in resolutions lower than ~550px_
*   Unit tests - _anyway currently there is nothing worth unit-testing_
*   Collapsing/expanding behaviour
