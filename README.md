# image-before-after

> Sometimes you want to be able to compare two images, showing the _before_ and _after_ version of the image.
>
> Say you have spend 30 minutes in Snapseed producing a beautifully manipulated version of the original raw image, you would like to show the world the result (after) image and the original (before image on top of each other, letting the visitor drag over the image and instantly see the difference.

# Demo

![Alt text](./examples/example.png?raw=true 'Example from Codepen')

You can try out the javascript class version at [codepen](https://codepen.io/netsi1964/full/yLogqGQ).

# Installation

Using NPM: `npm install image-before-after`

# Documentation

There will be these versions of the component:

- Javacript Class based
- TODO: _Webcomponent_

Using it can be seen here

## Vanilla JS

To use it you should `new` the class `ImageBeforeAfter` with these parameters:

| Parameter | required | Type                | Description                                                        |
| --------- | -------- | ------------------- | ------------------------------------------------------------------ |
| selector  | yes      | CSS selector string | A CSS selector to an element you want to add the functionallity to |
| before    | no       | string              | URL to the before image                                            |
| after     | no       | string              | URL to the after image                                             |
| text      | no       | string              | A text to show on top of the images                                |

Simply import the component and inserting it into the html element with the class `IBA`:

### HTML

```
<div class="IBA"></div>
```

### Javascript

```
<script type="text/javascript">
const before = 'https://dummyimage.com/600x400/000/fff.png';
const after = 'https://dummyimage.com/600x400/ffffff/000.png';

const myIBA = new ImageBeforeAfter('.IBA', before, after, 'Inverted example');
</script>
```

## Angular

Add the package to your project: `npm install image-before-after`

# Contributing

TODO

# License

Image-before-after is [ISC licenced](https://en.wikipedia.org/wiki/ISC_license)
