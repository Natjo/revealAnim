
# Reveal Animation

![version](https://img.shields.io/github/manifest-json/v/Natjo/revealAnim)  

Add animation if item is on viewport.
For list of items, add a delay to display items in order.

## Parameters
| Parameter | Type | Default | Description |
| ------ | ------ | ------ | ------ |
| elements | htmlCollection/Nodelist | - | list of items to be animated |
| onreveal | function | - | fire when item in on viewport |
| offset | number | 0 | offset between 1 - 0  of element's height |
| delay | number | - | delay in ms between items showing |
| duration | number | - | duration of animation |
| animation | string | - | name of the keyframe animation |


## Usage
### Javascript
```javascript
import revealAnim from './modules/revealAnim/revealAnim';
const items = document.querySelectorAll('li');

revealAnim(items,{
    delay: 10,
    duration: 600,
    animation: 'fromBottom'
})
```
### Css
```css
@keyframes fromBottom {
    from {
        opacity: 0;
        transform: translateY(50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```
## Demo

[See codepen demo](https://codepen.io/natjo/pen/MWOgJBX)
