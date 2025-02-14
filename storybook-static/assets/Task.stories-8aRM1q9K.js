import{j as s}from"./jsx-runtime-j_jdvEMj.js";import"./index-B-o1Wr-g.js";import{g as P}from"./_commonjsHelpers-Cpj98o6Y.js";var v={exports:{}},R="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",A=R,E=A;function b(){}function x(){}x.resetWarningCache=b;var N=function(){function e(p,l,D,C,q,S){if(S!==E){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:x,resetWarningCache:b};return a.PropTypes=a,a};v.exports=N();var j=v.exports;const n=P(j);function c({task:{id:e,title:t,state:a},onArchiveTask:p,onPinTask:l}){return s.jsxs("div",{className:`list-item ${a}`,children:[s.jsxs("label",{htmlFor:"checked","aria-label":`archiveTask-${e}`,className:"checkbox",children:[s.jsx("input",{type:"checkbox",disabled:!0,name:"checked",id:`archiveTask-${e}`,checked:a==="TASK_ARCHIVED"}),s.jsx("span",{className:"checkbox-custom",onClick:()=>p(e)})]}),s.jsx("label",{htmlFor:"title","aria-label":t,className:"title",children:s.jsx("input",{type:"text",value:t,readOnly:!0,name:"title",placeholder:"Input title"})}),a!=="TASK_ARCHIVED"&&s.jsx("button",{className:"pin-button",onClick:()=>l(e),id:`pinTask-${e}`,"aria-label":`pinTask-${e}`,children:s.jsx("span",{className:"icon-star"})},`pinTask-${e}`)]})}c.propTypes={task:n.shape({id:n.string.isRequired,title:n.string.isRequired,state:n.string.isRequired}),onArchiveTask:n.func,onPinTask:n.func};c.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{description:"Composition of the task",type:{name:"shape",value:{id:{name:"string",description:"Id of the task",required:!0},title:{name:"string",description:"Title of the task",required:!0},state:{name:"string",description:"Current state of the task",required:!0}}},required:!1},onArchiveTask:{description:"Event to change the task to archived",type:{name:"func"},required:!1},onPinTask:{description:"Event to change the task to pinned",type:{name:"func"},required:!1}}};const I={component:c,title:"Task",tags:["autodocs"]},r={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},o={args:{task:{...r.args.task,state:"TASK_PINNED"}}},i={args:{task:{...r.args.task,state:"TASK_ARCHIVED"}}};var m,d,T;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX'
    }
  }
}`,...(T=(d=r.parameters)==null?void 0:d.docs)==null?void 0:T.source}}};var h,k,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED'
    }
  }
}`,...(f=(k=o.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var g,y,_;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED'
    }
  }
}`,...(_=(y=i.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};const O=["Default","Pinned","Archived"],H=Object.freeze(Object.defineProperty({__proto__:null,Archived:i,Default:r,Pinned:o,__namedExportsOrder:O,default:I},Symbol.toStringTag,{value:"Module"}));export{r as D,c as T,H as a};
