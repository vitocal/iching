![icon](./extra/icon_128x128.png) # I Ching React App

[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/barrabinfc/react-iching)
![gluten](https://img.shields.io/badge/gluten-free-brightgreen.svg?style=flat-square
)

I-ching oracle with interpretation of Richard Wilheim.
Built with React, redux and ES6.

Features:
  - Full interpretation with the moving lines.
  - Great text from the classic book of `Richard Wilhelm`
  - Beautiful Tarot images by [Ma Deva Padma](http://thetaooracle.com)
  - No bullshit & ads.
  - Offline, no need for internet.

![alt tag](https://raw.githubusercontent.com/barrabinfc/react-iching/master/src/constants/screenshots/iching-main.png)
![alt tag](https://raw.githubusercontent.com/barrabinfc/react-iching/master/src/constants/screenshots/all.png)
![alt tag](https://raw.githubusercontent.com/barrabinfc/react-iching/master/src/constants/screenshots/detail.png)

## Demo/App

https://barrabinfc.github.io/react-iching/

## Author

* Vitor Calejuri  <barrabin.fc@gmail.com>

## LICENSE

MIT License

## For developers

`npm install` to install dependencies
`gulp serve` to start a development server.
`gulp build:dist` to compile for distribution ( dist/ )

Change to branch `phonegap` to compile for ios/android

```
$ git checkout phonegap
$ gulp bundle:phonegap
$ cd phonegap
$ cordova run
```

## Todo

- [ ] Update to material-ui @2.0 
- [ ] Add options(layout) over querystring 

- [ ] Add Localization (i18n) to portuguese.
- [ ] Implement 'iching of the day' based on chinese calendar
- [ ] Implement the 'moving lines' interpretation

### Phonegap
- [x] Add deviceready event
- [ ] Implement mobile packages for ios/android

### Done:
- [x] Fix touchTap not firing
- [x] Fix DetailPage => Tarot layout in some mobile devices (< 320px)
- [x] Fix Header/Footer links
- [x] Fix css BG bug when load complete
- [x] Minimize lodash/react and extra size optimizations
- [x] Revert to old style single tarot images.
- [x] Minor Layout fixes for emojis in linux (firefox/chrome)
- [X] Fix ReactCSSTransitionGroup over PageTransition working.
- [X] Use CSS Sprites for tarot images
- [X] Embed Open Sans font.
- [X] Change bell to a synthesis bell.

- [X] Implement the old method of Yarrow-stalks
- [X] Implement the 3 coin method
- [X] Add Header/Content/Footer in mobile format
- [X] Get the 64 Hexagrams interpretation from Richard Wilhelm
- [X] Get Portuguese hexagram interpretation
- [X] Create a Page using ListView where ListItem = hexagram (listPage)
- [X] Create a Page for showing each hexagram  (detailPage)
- [X] Fix iChing Image rendering (correct = kuas from bottom to up)
- [X] Fix Layout for Smartphones (width: 320px)

## Credits & info

- Built by Vitor Calejuri, with javascript ES6, React and Redux.
- Interpretation by `Richard Wilheim` and
Tarot art by [Ma Deva Padma](http://thetaooracle.com)
