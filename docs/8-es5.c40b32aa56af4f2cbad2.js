function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,r){if(t){if("string"==typeof t)return _arrayLikeToArray(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?_arrayLikeToArray(t,r):void 0}}function _iterableToArray(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function _classCallCheck(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,r,e){return r&&_defineProperties(t.prototype,r),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{R3Jx:function(t,r,e){"use strict";e.r(r),e.d(r,"TagsModule",(function(){return k}));var n=e("ofXK"),a=e("sbAP"),i=e("tyNb"),o=e("lJxs"),c=e("fXoL"),s=e("889F"),b=e("qp5k"),l=function(t){return["/tags",t]};function u(t,r){if(1&t&&(c.Ib(0,"article",5),c.Ib(1,"header",6),c.Ib(2,"h3",7),c.Ib(3,"a",8),c.Ib(4,"span",9),c.fc(5),c.Hb(),c.Hb(),c.Hb(),c.Hb(),c.Hb()),2&t){var e=r.$implicit;c.wb(3),c.Wb("routerLink",c.Yb(2,l,e)),c.wb(2),c.gc(e)}}var f,p=((f=function(){function t(r,e){_classCallCheck(this,t),this.route=r,this.scully=e,this.tags$=this.scully.available$.pipe(Object(o.a)((function(t){var r=new Set;return t.filter((function(t){return null!=t.tags})).map((function(t){return t.tags})).map((function(t){return t.forEach((function(t){return r.add(t)}))})),_toConsumableArray(r).sort((function(t,r){return t.localeCompare(r)}))})))}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||f)(c.Fb(i.a),c.Fb(a.c))},f.\u0275cmp=c.zb({type:f,selectors:[["app-tags"]],decls:8,vars:4,consts:[["id","wrapper"],["id","main"],[1,"mini-posts"],["class","mini-post",4,"ngFor","ngForOf"],[3,"showArticles"],[1,"mini-post"],[2,"display","flex","align-items","center"],[2,"margin-bottom","0"],[3,"routerLink"],[1,"icon","solid","fa-tag"]],template:function(t,r){1&t&&(c.Ib(0,"div",0),c.Gb(1,"app-header"),c.Ib(2,"div",1),c.Ib(3,"section"),c.Ib(4,"div",2),c.dc(5,u,6,4,"article",3),c.Rb(6,"async"),c.Hb(),c.Hb(),c.Hb(),c.Gb(7,"app-sidebar",4),c.Hb()),2&t&&(c.wb(5),c.Wb("ngForOf",c.Sb(6,2,r.tags$)),c.wb(2),c.Wb("showArticles",!0))},directives:[s.a,n.j,b.a,i.e],pipes:[n.b],styles:["a[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:before{margin-right:.75em}"]}),f),d=e("EY2u"),y=function(t){return["/tags",t]};function g(t,r){if(1&t&&(c.Ib(0,"li"),c.Ib(1,"a",6),c.Ib(2,"span",11),c.fc(3),c.Hb(),c.Hb(),c.Hb()),2&t){var e=r.$implicit;c.wb(1),c.Wb("routerLink",c.Yb(2,y,e)),c.wb(2),c.gc(e)}}var m=function(t){return[t]};function h(t,r){if(1&t&&(c.Ib(0,"article",5),c.Ib(1,"header"),c.Ib(2,"h3"),c.Ib(3,"a",6),c.fc(4),c.Hb(),c.Hb(),c.Ib(5,"div",7),c.Ib(6,"ul",8),c.dc(7,g,4,4,"li",9),c.Hb(),c.Hb(),c.Ib(8,"time",10),c.fc(9),c.Rb(10,"date"),c.Hb(),c.Hb(),c.Hb()),2&t){var e=r.$implicit;c.wb(3),c.Wb("routerLink",c.Yb(8,m,e.route)),c.wb(1),c.gc(e.title),c.wb(3),c.Wb("ngForOf",e.tags),c.wb(1),c.xb("datetime",e.date),c.wb(1),c.gc(c.Tb(10,5,e.date,"longDate"))}}var w,v,I,_=[{path:"",component:p},{path:":tag",component:(w=function(){function t(r,e){_classCallCheck(this,t),this.route=r,this.scully=e}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.route.paramMap.pipe().subscribe((function(r){var e=r.get("tag");t.tagLinks$=null!=e?t.scully.available$.pipe(Object(o.a)((function(t){return t.filter((function(t){return null!=t.tags})).filter((function(t){return t.tags.indexOf(e)>=0})).filter((function(t){return null!=t.published&&t.published})).sort((function(t,r){return r.date.localeCompare(t.date)}))}))):d.a}))}}]),t}(),w.\u0275fac=function(t){return new(t||w)(c.Fb(i.a),c.Fb(a.c))},w.\u0275cmp=c.zb({type:w,selectors:[["app-tag"]],decls:8,vars:4,consts:[["id","wrapper"],["id","main"],[1,"mini-posts"],["class","mini-post",4,"ngFor","ngForOf"],[3,"showArticles"],[1,"mini-post"],[3,"routerLink"],[1,"tags"],[1,"stats"],[4,"ngFor","ngForOf"],[1,"published"],[1,"icon","solid","fa-tag"]],template:function(t,r){1&t&&(c.Ib(0,"div",0),c.Gb(1,"app-header"),c.Ib(2,"div",1),c.Ib(3,"section"),c.Ib(4,"div",2),c.dc(5,h,11,10,"article",3),c.Rb(6,"async"),c.Hb(),c.Hb(),c.Hb(),c.Gb(7,"app-sidebar",4),c.Hb()),2&t&&(c.wb(5),c.Wb("ngForOf",c.Sb(6,2,r.tagLinks$)),c.wb(2),c.Wb("showArticles",!0))},directives:[s.a,n.j,b.a,i.e],pipes:[n.b,n.e],styles:[""]}),w)},{path:"**",component:p}],H=((v=function t(){_classCallCheck(this,t)}).\u0275mod=c.Db({type:v}),v.\u0275inj=c.Cb({factory:function(t){return new(t||v)},imports:[[i.f.forChild(_)],i.f]}),v),C=e("SpbO"),k=((I=function t(){_classCallCheck(this,t)}).\u0275mod=c.Db({type:I}),I.\u0275inj=c.Cb({factory:function(t){return new(t||I)},imports:[[n.c,H,a.b,C.a]]}),I)}}]);