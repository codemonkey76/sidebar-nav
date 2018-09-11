(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.SidebarNav = {})));
}(this, (function (exports) { 'use strict';

    (function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .nav .open > a, .nav .open > a:hover, .nav .open > a:focus { background-color: transparent; } /*-------------------------------*/ /* Wrappers */ /*-------------------------------*/ #wrapper { padding-left: 0; -webkit-transition: all 0.5s ease; -moz-transition: all 0.5s ease; -o-transition: all 0.5s ease; transition: all 0.5s ease; } #wrapper.toggled { padding-left: 220px; } #sidebar-wrapper { z-index: 1000; left: 220px; width: 0; height: 100%; margin-left: -220px; overflow-y: auto; overflow-x: hidden; background: #1a1a1a; -webkit-transition: all 0.5s ease; -moz-transition: all 0.5s ease; -o-transition: all 0.5s ease; transition: all 0.5s ease; } #sidebar-wrapper::-webkit-scrollbar { display: none; } #wrapper.toggled #sidebar-wrapper { width: 220px; } #page-content-wrapper { width: 100%; padding-top: 70px; } #wrapper.toggled #page-content-wrapper { position: absolute; margin-right: -220px; } /*-------------------------------*/ /* Sidebar nav styles */ /*-------------------------------*/ .navbar { padding: 0; } .sidebar-nav { position: absolute; top: 0; width: 220px; margin: 0; padding: 0; list-style: none; } .sidebar-nav li { position: relative; line-height: 20px; display: inline-block; width: 100%; } .sidebar-nav li:before { content: ''; position: absolute; top: 0; left: 0; z-index: -1; height: 100%; width: 3px; background-color: #1c1c1c; -webkit-transition: width .2s ease-in; -moz-transition: width .2s ease-in; -ms-transition: width .2s ease-in; transition: width .2s ease-in; } .sidebar-nav li:first-child a { color: #fff; background-color: #1a1a1a; } .sidebar-nav li:nth-child(5n+1):before { background-color: #ec1b5a; } .sidebar-nav li:nth-child(5n+2):before { background-color: #79aefe; } .sidebar-nav li:nth-child(5n+3):before { background-color: #314190; } .sidebar-nav li:nth-child(5n+4):before { background-color: #279636; } .sidebar-nav li:nth-child(5n+5):before { background-color: #7d5d81; } .sidebar-nav li:hover:before, .sidebar-nav li.open:hover:before { width: 100%; -webkit-transition: width .2s ease-in; -moz-transition: width .2s ease-in; -ms-transition: width .2s ease-in; transition: width .2s ease-in; } .sidebar-nav li a { display: block; color: #ddd; text-decoration: none; padding: 10px 15px 10px 30px; } .sidebar-nav li a:hover, .sidebar-nav li a:active, .sidebar-nav li a:focus, .sidebar-nav li.open a:hover, .sidebar-nav li.open a:active, .sidebar-nav li.open a:focus { color: #fff; text-decoration: none; background-color: transparent; } .sidebar-header { text-align: center; font-size: 20px; position: relative; width: 100%; display: inline-block; } .sidebar-brand { height: 65px; position: relative; background: #212531; background: linear-gradient(to right bottom, #2f3441 50%, #212531 50%); padding-top: 1em; } .sidebar-brand a { color: #ddd; } .sidebar-brand a:hover { color: #fff; text-decoration: none; } .dropdown-header { text-align: center; font-size: 1em; color: #ddd; background: #212531; background: linear-gradient(to right bottom, #2f3441 50%, #212531 50%); } .sidebar-nav .dropdown-menu { position: relative; width: 100%; padding: 0; margin: 0; border-radius: 0; border: none; background-color: #222; box-shadow: none; } .dropdown-menu.show { top: 0; } /*Fontawesome icons*/ .nav.sidebar-nav li a::before { vertical-align: baseline; display: inline-block; padding-right: 5px; } /*-------------------------------*/ /* Hamburger-Cross */ /*-------------------------------*/ .hamburger { position: fixed; top: 4px; z-index: 999; display: block; width: 32px; height: 32px; margin-left: 15px; background: transparent; border: none; } .hamburger:hover, .hamburger:focus, .hamburger:active { outline: none; } .hamburger.is-closed:before { content: ''; display: block; width: 100px; font-size: 14px; color: #fff; line-height: 32px; text-align: center; opacity: 0; -webkit-transform: translate3d(0, 0, 0); -webkit-transition: all .35s ease-in-out; } .hamburger.is-closed:hover:before { opacity: 1; display: block; -webkit-transform: translate3d(-100px, 0, 0); -webkit-transition: all .35s ease-in-out; } .hamburger.is-closed .hamb-top, .hamburger.is-closed .hamb-middle, .hamburger.is-closed .hamb-bottom, .hamburger.is-open .hamb-top, .hamburger.is-open .hamb-middle, .hamburger.is-open .hamb-bottom { position: absolute; left: 0; height: 4px; width: 100%; } .hamburger.is-closed .hamb-top, .hamburger.is-closed .hamb-middle, .hamburger.is-closed .hamb-bottom { background-color: #1a1a1a; } .hamburger.is-closed .hamb-top { top: 5px; -webkit-transition: all .35s ease-in-out; } .hamburger.is-closed .hamb-middle { top: 50%; margin-top: -2px; } .hamburger.is-closed .hamb-bottom { bottom: 5px; -webkit-transition: all .35s ease-in-out; } .hamburger.is-closed:hover .hamb-top { top: 0; -webkit-transition: all .35s ease-in-out; } .hamburger.is-closed:hover .hamb-bottom { bottom: 0; -webkit-transition: all .35s ease-in-out; } .hamburger.is-open .hamb-top, .hamburger.is-open .hamb-middle, .hamburger.is-open .hamb-bottom { background-color: #1a1a1a; } .hamburger.is-open .hamb-top, .hamburger.is-open .hamb-bottom { top: 50%; margin-top: -2px; } .hamburger.is-open .hamb-top { -webkit-transform: rotate(45deg); -webkit-transition: -webkit-transform .2s cubic-bezier(.73, 1, .28, .08); } .hamburger.is-open .hamb-middle { display: none; } .hamburger.is-open .hamb-bottom { -webkit-transform: rotate(-45deg); -webkit-transition: -webkit-transform .2s cubic-bezier(.73, 1, .28, .08); } .hamburger.is-open:before { content: ''; display: block; width: 100px; font-size: 14px; color: #fff; line-height: 32px; text-align: center; opacity: 0; -webkit-transform: translate3d(0, 0, 0); -webkit-transition: all .35s ease-in-out; } .hamburger.is-open:hover:before { opacity: 1; display: block; -webkit-transform: translate3d(-100px, 0, 0); -webkit-transition: all .35s ease-in-out; } /*-------------------------------*/ /* Overlay */ /*-------------------------------*/ .overlay { position: fixed; width: 100%; height: 100%; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(250, 250, 250, .8); z-index: 1; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();





























    var component = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.wrapperClass,attrs:{"id":"wrapper"}},[(_vm.show)?_c('div',{staticClass:"overlay"}):_vm._e(),_vm._v(" "),_c('nav',{staticClass:"navbar navbar-inverse fixed-top",attrs:{"id":"sidebar-wrapper","role":"navigation"}},[_c('ul',{staticClass:"nav sidebar-nav"},[_c('div',{staticClass:"sidebar-header"},[_c('div',{staticClass:"sidebar-brand"},[_c('a',{attrs:{"href":"#"},domProps:{"textContent":_vm._s(_vm.title)}})])]),_vm._v(" "),_vm._l((_vm.menu),function(item){return _c('li',{staticClass:"dropdown"},[_c('a',{staticClass:"dropdown-toggle",attrs:{"href":"#","data-toggle":"dropdown"}},[_c('span',{staticClass:"fas",class:item.icon}),_vm._v(" "),_c('span',{domProps:{"textContent":_vm._s(item.name)}}),_vm._v(" "),_c('span',{staticClass:"caret"})]),_vm._v(" "),_c('ul',{staticClass:"dropdown-menu animated fadeInLeft",attrs:{"role":"menu"}},_vm._l((item.menu),function(submenu){return _c('li',[_c('a',{attrs:{"href":submenu.link},domProps:{"textContent":_vm._s(submenu.name)}})])}))])})],2)]),_vm._v(" "),_c('button',{staticClass:"hamburger animated fadeInLeft",class:_vm.hamburgerClass,attrs:{"type":"button"},on:{"click":_vm.toggleMenu}},[_c('span',{staticClass:"hamb-top"}),_vm._v(" "),_c('span',{staticClass:"hamb-middle"}),_vm._v(" "),_c('span',{staticClass:"hamb-bottom"})])])},staticRenderFns: [],
        props: ['title', 'menu'],

        data: function data() {
            return {
                show: false,
            }
        },
        methods: {
            toggleMenu: function toggleMenu() {
                this.show = !this.show;
            },
        },
        computed: {
            wrapperClass: function wrapperClass() {
                return {'toggled': this.show};
            },
            hamburgerClass: function hamburgerClass() {
                return {
                    'is-closed': !this.show,
                    'is-open': this.show
                }
            }
        }
    }

    // Import vue component

    // Declare install function executed by Vue.use()
    function install(Vue) {
    	if (install.installed) { return; }

    	install.installed = true;
    	Vue.component('SidebarNav', component);
    }

    // Create module definition for Vue.use()
    var plugin = {
    	install: install,
    };

    // Auto-install when vue is found (eg. in browser via <script> tag)
    var GlobalVue = null;

    if (typeof window !== 'undefined') {
    	GlobalVue = window.Vue;
    } else if (typeof global !== 'undefined') {
    	GlobalVue = global.Vue;
    }

    if (GlobalVue) {
    	GlobalVue.use(plugin);
    }

    exports.install = install;
    exports.default = component;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
