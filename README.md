# react-anchor-without-hash
A anchor react component use url search string without hash.
This component solves the problem that hash anchors cannot be used when using the hash router. 

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
## install
```sh
$ npm i react-anchor-without-hash
```
## usage
### scrollIntoView(default)
The effect is the same as [scrollIntoView]((https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)).
```js
import Anchor from 'react-anchor-without-hash'

......

<Anchor name="section1">
  <div className="section section1">
    <h2>This is section1</h2>
    <div>There are some text...</div>
  </div>
</Anchor>
<Anchor name="section2">
  <div className="section section2">
    <h2>This is section2</h2>
    <div>There are some text...</div>
  </div>
</Anchor>
```
When url search includes '_to=section1', the section1 will scroll into view.
You can go to the [example](https://github.com/kwzm/react-anchor-without-hash/blob/master/example/App.js) for details.
### scrollTop
The effect is the same as [scrollTop]((https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTop)).
```js
import Anchor from 'react-anchor-without-hash'

......

const anchorProps = {
  type: 'scrollTop',
  container: '#container',
  interval: 50
}

<div style={{position: 'relative'}}>
  <Anchor name="section1" {...anchorProps}>
    <div className="section section1">
      <h2>This is section1</h2>
      <div>There are some text...</div>
    </div>
  </Anchor>
  <Anchor name="section2" {...anchorProps}>
    <div className="section section2">
      <h2>This is section2</h2>
      <div>There are some text...</div>
    </div>
  </Anchor>
</div>
```
When url search includes '_to=section1', the section1 will scroll into view with 50px offset.
You can go to the [example](https://github.com/kwzm/react-anchor-without-hash/blob/master/example/App.js) for details.
> note: Because offsetTop is used internally to get the height of the scroll, you need to make sure that one parent sets the position attribute(relative, absolute or fixed), otherwise the entire document will be benchmarked.
## options
### common options
#### `type` PropTypes.string
Specifies the mechanism for internal execution.
- scrollIntoView: use [element.scrollIntoView](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView) api
- scrollTop: use [element.scrollTop](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTop) api
#### `anchorKey` PropTypes.string
Url search key for the anchor, default is '_to'.
### scrollIntoView options
#### `scrollIntoViewOption` PropTypes.oneOfType([PropTypes.bool,PropTypes.object])
Options passed when [scrollIntoView](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView) is used. 
### scrollTop options
#### `container` PropTypes.string
Specifies which element performs scrollTop, default value is html.
> note: This option is the parameter for the [document.querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
#### `interval` PropTypes.number
Specifies the departure height, default value is 0.
The actual scrollTop equals:
```js
document.querySelector(container).scrollTop = document.getElementById(anchor).offsetTop + interval
```
## License
MIT
