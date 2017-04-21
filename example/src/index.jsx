import React from 'react';

import MyComponent, { foo, bar } from '../../';

import { render } from 'react-dom';


var element = document.createElement("div");

document.body.appendChild(element);

render(<MyComponent name="myComponent" />, element);