Task challenge
=========================================================================

**What is given**

- an array of JSON properties
- mock-ups with the layout of the properties for desktop, tablet and mobile
- Use https://github.com/angular/angular-seed as a base project or any other project using these technologies

**Requirements**
- use Angular.js `^1.5`
- Create a page called `immobilien` which renders given properties as a list of elements, responsive, with the given mock-ups.
- The `css` can be written in `sass` or `stylus` or plain css.
- Unit test coverage should be `100%`
- Show the `NEW` badge if the `meta.creation.date` is not older than 2 days.
- Show the `BALCONY` badge if `area.numberOfBalconies` is greater than 0.
- Show `primaryPrice` formatted properly
- Show `area.primaryArea` formatted properly
- Show logo if is defined in `meta.features.LOGO_ON_RESULTLIST.url`
- Show private badge if `meta.account.cwid` is not defined.
- Insert a blank div placeholder (`red` background) in the position `6` and `13` which could represent the adverts.
- Add a `collapsed/expand` button for every element (see right top `X` button in the mock-ups) which should collapse/expand any property in the list as can be seen in the `minimize_collapsed` / `minimized_expanded` attachments.

**Solution**
- npm install
- npm start
- npm test
- npm run protractor

Open: http://localhost:7777