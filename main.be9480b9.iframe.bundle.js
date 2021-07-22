(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{466:function(module,exports,__webpack_require__){__webpack_require__(467),__webpack_require__(622),__webpack_require__(623),__webpack_require__(824),__webpack_require__(825),__webpack_require__(830),__webpack_require__(831),__webpack_require__(829),__webpack_require__(826),__webpack_require__(832),__webpack_require__(827),__webpack_require__(828),__webpack_require__(833),module.exports=__webpack_require__(819)},534:function(module,exports){},623:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(328)},819:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(328).configure)([__webpack_require__(820),__webpack_require__(821)],module,!1)}).call(this,__webpack_require__(186)(module))},820:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=820},821:function(module,exports,__webpack_require__){var map={"./stories/Button/Button.stories.jsx":834};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=821},822:function(module,exports,__webpack_require__){},833:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));var client_api=__webpack_require__(842),types=__webpack_require__(840),esm=__webpack_require__(4),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(types.setGlobalRender)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))},834:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Main",(function(){return Main}));var objectSpread2=__webpack_require__(135),objectWithoutProperties=(__webpack_require__(0),__webpack_require__(446)),jsx_runtime=(__webpack_require__(822),__webpack_require__(205)),Button_Button=function Button(_ref){var primary=_ref.primary,disabled=_ref.disabled,type=_ref.type,progression=_ref.progression,size=_ref.size,label=_ref.label,props=Object(objectWithoutProperties.a)(_ref,["primary","disabled","type","progression","size","label"]),disabledMode=disabled?"--disabled":"",mode=primary?"storybook-button--primary".concat(disabledMode):"storybook-button--secondary".concat(disabledMode),progressionMode="normal"===progression?mode:progression;return Object(jsx_runtime.jsx)("button",Object(objectSpread2.a)(Object(objectSpread2.a)({type:type,className:["storybook-button","storybook-button--".concat(size),progressionMode].join(" "),disabled:disabled},props),{},{children:"loading"===progression?progression:label}))};Button_Button.defaultProps={primary:!1,type:"button",size:"medium",disabled:!1,progression:"normal"},Button_Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{primary:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},type:{defaultValue:{value:"'button'",computed:!1},type:{name:"enum",value:[{value:"'button'",computed:!1},{value:"'type'",computed:!1},{value:"'reset'",computed:!1}]},required:!1,description:""},size:{defaultValue:{value:"'medium'",computed:!1},type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1,description:""},disabled:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},progression:{defaultValue:{value:"'normal'",computed:!1},type:{name:"enum",value:[{value:"'normal'",computed:!1},{value:"'loading'",computed:!1},{value:"'success'",computed:!1},{value:"'failure'",computed:!1}]},required:!1,description:""},label:{type:{name:"string"},required:!0,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Button/Button.jsx"]={name:"Button",docgenInfo:Button_Button.__docgenInfo,path:"src/stories/Button/Button.jsx"});__webpack_exports__.default={title:"Button",component:Button_Button,argTypes:{label:{control:{type:"text"}},type:{control:{type:"select"}},progression:{control:{type:"select"}}}};var Main=function Template(args){return Object(jsx_runtime.jsx)(Button_Button,Object(objectSpread2.a)({},args))}.bind({});Main.args={primary:!0,label:"Button",type:"button",disabled:!1,size:"medium",progression:"normal"},Main.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Button {...args} />"}},Main.parameters)}},[[466,2,3]]]);