# sidebar-nav v1.0.8
Collapsible Sidebar Navigation

## Installation
Using npm:

`$ npm i --save sidebar-nav`

Using yarn:

`$ yarn add sidebar-nav`

## Usage
in app.js:

`Vue.component('sidebar-nav', require('sidebar-nav'));`

To use this component add a menu array to your root vue component:

e.g.

```
menu: [{
    icon: 'fas-comment',
    name: 'Messaging',
    menu: [{link: '/', name: 'Dashboard'}],
}, {
    icon: 'fas-users',
    name: 'Families',
    menu: [{link: '/families', name: 'Manage'}],
}, {
    icon: 'fas-user',
    name: 'Contacts',
    menu: [{link: '/contacts', name: 'Manage'}],         
}]
```


Then use the component like this:

`<sidebar-nav :menu="menu" title="My Sidebar" />`
