(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{168:function(e,t,a){e.exports=a.p+"static/media/login.b46939c2.png"},172:function(e,t,a){e.exports=a.p+"static/media/login.b46939c2.png"},200:function(e,t,a){e.exports=a(416)},205:function(e,t,a){},226:function(e,t,a){},250:function(e,t,a){},389:function(e,t,a){},401:function(e,t,a){},403:function(e,t,a){},414:function(e,t,a){},416:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(4),o=a.n(s),r=(a(205),a(422)),i=a(41),c=Object(i.a)(),d=a(49),u=a(8),m=a(14),h=a(15),p=a(27),b=a(17),f=a(16),E=a(418),g=a(419),v=a(426),y=a(36),S=a(37),C=a.n(S),w=(a(226),a(168)),N=a.n(w),O=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleClick=function(e){var t={name:n.state.name,pass:n.state.pass};console.log(t),n.props.setUser(t.name),C.a.post("/auth/login",t).then((function(e){console.log(e),200===e.data.status&&(n.props.setUser(t.name,e.data._id,e.data.label),console.log("Login Successful",t.name,e.data._id,e.data.label),c.push("/home"))})).catch((function(e){console.error(e)}))},n.handleChange=function(e){var t=e.target.id;n.setState(Object(u.a)({},t,e.target.value))},n.handleRedirect=function(e){c.push("/signup")},n.handleClick=n.handleClick.bind(Object(p.a)(n)),n.handleChange=n.handleChange.bind(Object(p.a)(n)),n.state={name:"",pass:""},n}return Object(h.a)(a,[{key:"render",value:function(){var e;return(l.a.createElement(E.a,(e={justify:"space-around",align:"middle",className:"login-wrapper"},Object(u.a)(e,"justify","space-around"),Object(u.a)(e,"align","middle"),e),l.a.createElement(g.a,{span:3}),l.a.createElement(g.a,{className:"login",span:6},l.a.createElement("div",{className:"title"},"TASK MANAGER"),l.a.createElement(v.a,{size:"large",value:this.state.name,onChange:this.handleChange,id:"name",placeholder:"Username"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(v.a.Password,{size:"large",value:this.state.pass,onChange:this.handleChange,id:"pass",placeholder:"Password"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(y.a,{className:"login-btn",size:"large",onClick:this.handleClick,type:"primary"},"LOGIN"),l.a.createElement(y.a,{onClick:this.handleRedirect,type:"link"},"New to this App? Signup")),l.a.createElement(g.a,{className:"svg",span:8},l.a.createElement("img",{src:N.a})),l.a.createElement(g.a,{span:5})))}}]),a}(l.a.Component),k=Object(d.b)((function(e){return{username:e.username}}),(function(e){return{setUser:function(t,a,n){console.log("login cont",t,a,n),e({_id:a,name:t,label:n,type:"SET_USER"}),console.log("container reached!!")}}}))(O),D=a(428),T=(a(250),a(172)),j=a.n(T),L=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleClick=function(e){if(n.state.pass==n.state.confirmPass){var t={name:n.state.name,pass:n.state.pass};console.log(t),C.a.post("/auth/signup",t).then((function(e){console.log(e),200===e.data.status?(c.push("/"),D.a.info("Please Login")):D.a.error("User with this name already exist !!!")})).catch((function(e){console.error(e)}))}else D.a.error("Password does not match!!!")},n.handleChange=function(e){var t=e.target.id;n.setState(Object(u.a)({},t,e.target.value))},n.handleRedirect=function(e){c.push("/")},n.handleClick=n.handleClick.bind(Object(p.a)(n)),n.handleChange=n.handleChange.bind(Object(p.a)(n)),n.state={name:"",pass:"",confirmPass:""},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e;return(l.a.createElement(E.a,(e={justify:"space-around",align:"middle",className:"login-wrapper"},Object(u.a)(e,"justify","space-around"),Object(u.a)(e,"align","middle"),e),l.a.createElement(g.a,{span:3}),l.a.createElement(g.a,{className:"login",span:6},l.a.createElement("div",{className:"title"},"TASK MANAGER"),l.a.createElement(v.a,{size:"large",value:this.state.name,onChange:this.handleChange,id:"name",placeholder:"Username"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(v.a.Password,{size:"large",value:this.state.pass,onChange:this.handleChange,id:"pass",placeholder:"Password"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(v.a.Password,{size:"large",value:this.state.confirmPass,onChange:this.handleChange,id:"confirmPass",placeholder:"Confirm Password"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(y.a,{className:"login-btn",size:"large",onClick:this.handleClick,type:"primary"},"SIGN UP"),l.a.createElement(y.a,{onClick:this.handleRedirect,type:"link"},"Already have an account? Login")),l.a.createElement(g.a,{className:"svg",span:8},l.a.createElement("img",{src:j.a})),l.a.createElement(g.a,{span:5})))}}]),a}(l.a.Component),M=Object(d.b)((function(e){return{username:e.username}}),(function(e){return{setUser:function(t,a){e({id:t,username:a,type:"SET_USER"}),console.log("container reached!!")}}}))(L),P=a(194),x=a(429),A=a(430),Y=a(421),_=a(52),z=a(435),I=a(423),V=a(427),R=a(420),F=a(425),U=a(197),W=a(193),B=a(13),J=a.n(B),H=a(434),G=a(126),K=a(433),q=V.a.Option,$=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).showModal=function(){n.setState({visible:!0})},n.handleOk=function(e){n.props.handleAddTodo({name:n.state.name,desc:n.state.desc,status:n.state.status,priority:n.state.priority,label:n.state.labels,due:J()(n.state.date).format("YYYY-MM-DD")}),n.setState({visible:!1,name:"",desc:"",status:void 0,priority:void 0,date:void 0,labels:[]})},n.handleCancel=function(e){n.setState({visible:!1,name:"",desc:"",status:void 0,priority:void 0})},n.handleDate=function(e,t){n.setState({date:e})},n.handleSelect=function(e,t){n.setState(Object(u.a)({},t,e))},n.handleChange=function(e){var t=e.target.name;n.setState(Object(u.a)({},t,e.target.value))},n.state={visible:!1,name:"",desc:"",date:null,status:void 0,priority:void 0,labels:[]},n}return Object(h.a)(a,[{key:"render",value:function(){var e,t=this;return(l.a.createElement("div",{className:"add-todo-wra\ufffcpper"},l.a.createElement(y.a,{size:"large",type:"primary",onClick:this.showModal},"Add Todo"),l.a.createElement(F.a,{title:"Add Todo",visible:this.state.visible,onOk:this.handleOk,onCancel:this.handleCancel,handleAddTodo:this.props.handleAddTodo},l.a.createElement(v.a,{name:"name",onChange:this.handleChange,value:this.state.name,placeholder:"Name"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(v.a.TextArea,{name:"desc",onChange:this.handleChange,value:this.state.desc,placeholder:"Description"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},l.a.createElement(I.a,{value:this.state.date,name:"date",style:{width:"45%"},onChange:this.handleDate,placeholder:"Select due date"}),l.a.createElement(V.a,{value:this.state.status,style:{width:"45%"},onChange:function(e){return t.handleSelect(e,"status")},placeholder:"Select Status"},l.a.createElement(q,{value:"new"},"New"),l.a.createElement(q,{value:"inprogress"},"In Progress"),l.a.createElement(q,{value:"completed"},"Completed"))),l.a.createElement("br",null),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},l.a.createElement(V.a,{value:this.state.priority,style:{width:"35%"},onChange:function(e){return t.handleSelect(e,"priority")},placeholder:"Select Priority"},l.a.createElement(q,{value:"high"},"High"),l.a.createElement(q,{value:"normal"},"Normal"),l.a.createElement(q,{value:"low"},"Low")),l.a.createElement(V.a,(e={value:this.state.labels,mode:"multiple",style:{width:"55%"},placeholder:"Please select label"},Object(u.a)(e,"value",this.state.labels),Object(u.a)(e,"onChange",(function(e){return t.handleSelect(e,"labels")})),e),this.props.labels.map((function(e,t){return l.a.createElement(q,{key:e},e)})))))))}}]),a}(l.a.Component),Q=a(424),X=a(431),Z=a(432),ee={labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:20}}},te={wrapperCol:{xs:{span:24,offset:0},sm:{span:20,offset:4}}},ae=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).onFinish=function(e){n.props.handleEditLabel(e.names)},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){document.getElementById("loadBtn").click()}},{key:"render",value:function(){var e=this;return(l.a.createElement(Q.a,Object.assign({initialValues:["personal"],name:"dynamic_form_item"},te,{onFinish:this.onFinish}),l.a.createElement(Q.a.List,{name:"names"},(function(t,a){var n=a.add,s=a.remove;return(l.a.createElement("div",null,t.map((function(e,a){return l.a.createElement(Q.a.Item,Object.assign({},0===a?ee:te,{label:0===a?"Passengers":"",required:!1,key:e.key}),l.a.createElement(Q.a.Item,Object.assign({},e,{validateTrigger:["onChange","onBlur"],rules:[{required:!1,whitespace:!1,message:"Please input label's name or delete this field."}],noStyle:!0}),l.a.createElement(v.a,{placeholder:"Label",style:{width:"60%"}})),t.length>1?l.a.createElement(X.a,{className:"dynamic-delete-button",style:{margin:"0 8px"},onClick:function(){s(e.name)}}):null)})),l.a.createElement(Q.a.Item,null,l.a.createElement(y.a,{type:"dashed",onClick:function(){n()},style:{width:"60%"}},l.a.createElement(Z.a,null)," Add field"),l.a.createElement(y.a,{id:"loadBtn",style:{display:"none"},onClick:function(){e.props.labels.forEach((function(e){n(e)}))}},"Load"))))})),l.a.createElement(Q.a.Item,null,l.a.createElement(y.a,{type:"primary",htmlType:"submit"},"Submit"))))}}]),a}(l.a.Component),ne=(V.a.Option,function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).showModal=function(){n.setState({visible:!0})},n.handleSelect=function(e){n.setState({labels:e}),setTimeout((function(){console.log(n.state.labels),n.handleFilter()}),100)},n.handleEditLabel=function(e){console.log(e),n.props.handleEditLabel(e),n.setState({visible:!1})},n.handleOk=function(e){console.log(n.state),n.setState({visible:!1})},n.handleCancel=function(e){n.setState({visible:!1})},n.state={visible:!1},n}return Object(h.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(y.a,{size:"large",type:"primary",onClick:this.showModal},"Edit Labels"),l.a.createElement(F.a,{title:"Edit Labels",visible:this.state.visible,onOk:this.handleOk,onCancel:this.handleCancel},l.a.createElement(ae,{labels:this.props.labels,handleEditLabel:this.handleEditLabel})))}}]),a}(l.a.Component)),le=(a(389),I.a.RangePicker),se=V.a.Option,oe=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleDelete=function(e,t){e.stopPropagation(),console.log("Delete",t),n.props.handleDeleteTodo(t)},n.handleChange=function(e){var t=e.target.name;n.setState(Object(u.a)({},t,e.target.value))},n.handleDate=function(e,t){""!==t?n.setState({modalDue:J()(t,"YYYY-MM-DD")}):n.setState({rangeDate:[null,null]})},n.handleEditSelect=function(e,t){n.setState(Object(u.a)({},t,e))},n.showEditModal=function(e){console.log(e),n.setState({editModalVisible:!0,modalTodoId:e._id,modalName:e.name,modalDesc:e.desc,modalDue:e.due,modalStatus:e.status,modalPriority:e.priority,modalLabels:e.label})},n.handleEditOk=function(){n.setState({editModalVisible:!1}),n.props.handleEditTodo({_id:n.state.modalTodoId,name:n.state.modalName,desc:n.state.modalDesc,due:J()(n.state.modalDue).format("YYYY-MM-DD"),status:n.state.modalStatus,priority:n.state.modalPriority,label:n.state.modalLabels})},n.handleEditCancel=function(){n.setState({editModalVisible:!1})},n.handleEditTodo=function(e){n.props.handleEditTodo(e)},n.handleAddTodo=function(e){n.props.handleAddTodo(e)},n.handleEditLabel=function(e){console.log(e,"tasks"),n.props.handleEditLabel(e)},n.searchFilter=function(e){return""==n.state.searchTxt||e.toLowerCase().includes(n.state.searchTxt.toLowerCase())},n.dateFilter=function(e){return null==n.state.rangeDate[0]||J()(e).isSameOrAfter(n.state.rangeDate[0].format("YYYY-MM-DD"))&&J()(e).isSameOrBefore(n.state.rangeDate[1].format("YYYY-MM-DD"))},n.labelFilter=function(e){return 0==n.state.selectedLabels.length||n.state.selectedLabels.some((function(t){return e.includes(t)}))},n.statusFilter=function(e){return 0==n.state.selectedStatus.length||n.state.selectedStatus.includes(e)},n.handleFilter=function(){n.state.searchTxt;var e=n.props.todos.filter((function(e){return n.searchFilter(e.name)&&n.dateFilter(e.due)&&n.labelFilter(e.label)&&n.statusFilter(e.status)}));n.setState({todos:e})},n.handleSelect=function(e,t){"label"==e?n.setState({selectedLabels:t}):"status"==e&&n.setState({selectedStatus:t}),setTimeout((function(){console.log(n.state.selectedLabels),n.handleFilter()}),100)},n.searchChange=function(e){var t=e.target.name;n.setState(Object(u.a)({},t,e.target.value)),setTimeout((function(){n.handleFilter()}),100)},n.dateChange=function(e,t){""!==t[0]?n.setState({rangeDate:[J()(t[0],"YYYY-MM-DD"),J()(t[1],"YYYY-MM-DD")]}):n.setState({rangeDate:[null,null]}),setTimeout((function(){n.handleFilter()}),100)},console.log(e.todos),n.state={rangeDate:[null,null],searchTxt:"",selectedLabels:[],selectedStatus:[],todos:n.props.todos,editModalVisible:!1,modaTodoID:-1,modalName:"",modalDesc:"",modalDue:"",modalStatus:"",modalPriority:"",modalLabels:[]},n.showEditModal=n.showEditModal.bind(Object(p.a)(n)),n}return Object(h.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.props!=e&&this.setState({todos:e.todos})}},{key:"render",value:function(){var e=this,t=this.props.labels.map((function(e){return l.a.createElement(se,{key:e},e)})),a=this.props.status.map((function(e){return l.a.createElement(se,{key:e},e)}));return l.a.createElement(E.a,{className:"tasks"},l.a.createElement(g.a,{span:11,className:"filters-wrapper"},l.a.createElement("div",{className:"filters"},l.a.createElement($,{visible:this.state.AddTodoModalVisible,handleAddTodo:this.handleAddTodo,labels:this.props.labels}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(v.a,{size:"large",suffix:l.a.createElement(K.a,null),name:"searchTxt",value:this.state.searchTxt,onChange:function(t){return e.searchChange(t)},className:"search-input",placeholder:"Search Todo"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(le,{className:"filter-inputs",onChange:this.dateChange,size:"large",value:this.state.rangeDate}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(V.a,{className:"filter-inputs",size:"large",mode:"multiple",style:{width:"100%"},placeholder:"Please select label",defaultValue:[],onChange:function(t){return e.handleSelect("label",t)}},t),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(V.a,{className:"filter-inputs",size:"large",mode:"multiple",style:{width:"100%"},placeholder:"Please select status",defaultValue:[],onChange:function(t){return e.handleSelect("status",t)}},a),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(ne,{labels:this.props.labels,handleEditLabel:this.handleEditLabel}))),l.a.createElement(R.a,{type:"vertical",className:"divider"}),l.a.createElement(g.a,{span:12,className:"todos"},l.a.createElement(F.a,{visible:this.state.editModalVisible,title:"Edit Todo",onOk:this.handleEditOk,onCancel:this.handleEditCancel},l.a.createElement(v.a,{name:"modalName",onChange:this.handleChange,value:this.state.modalName,placeholder:"Name"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(v.a.TextArea,{name:"modalDesc",onChange:this.handleChange,value:this.state.modalDesc,placeholder:"Description"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},l.a.createElement(I.a,{name:"modalDate",style:{width:"45%"},value:J()(this.state.modalDue,"YYYY-MM-DD"),onChange:this.handleDate}),l.a.createElement(V.a,{style:{width:"45%"},value:this.state.modalStatus,onChange:function(t){return e.handleEditSelect(t,"modalStatus")},placeholder:"Select Status"},l.a.createElement(se,{value:"new"},"New"),l.a.createElement(se,{value:"inprogress"},"In Progress"),l.a.createElement(se,{value:"completed"},"Completed"))),l.a.createElement("br",null),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},l.a.createElement(V.a,{style:{width:"35%"},value:this.state.modalPriority,onChange:function(t){return e.handleEditSelect(t,"modalPriority")},placeholder:"Select Priority"},l.a.createElement(se,{value:"high"},"High"),l.a.createElement(se,{value:"normal"},"Normal"),l.a.createElement(se,{value:"low"},"Low")),l.a.createElement(V.a,{mode:"multiple",style:{width:"55%"},placeholder:"Please select label",value:this.state.modalLabels,onChange:function(t){return e.handleEditSelect(t,"modalLabels")}},this.props.labels.map((function(e,t){return l.a.createElement(se,{key:e},e)}))))),l.a.createElement(G.Scrollbars,{renderTrackHorizontal:function(e){return l.a.createElement("div",Object.assign({},e,{className:"track-horizontal",style:{display:"none"}}))},renderThumbHorizontal:function(e){return l.a.createElement("div",Object.assign({},e,{className:"thumb-horizontal",style:{display:"none"}}))},renderTrackVertical:function(e){return l.a.createElement("div",Object.assign({},e,{className:"track-vertical",style:{display:"none"}}))},renderThumbVertical:function(e){return l.a.createElement("div",Object.assign({},e,{className:"thumb-vertical",style:{display:"none"}}))}},this.state.todos.map((function(t){return l.a.createElement("div",{key:t._id,onClick:function(){return e.showEditModal(t)},className:"card",style:"high"==t.priority?{borderTop:"5px solid #cf1322"}:"normal"==t.priority?{borderTop:"5px solid #006d75"}:{borderTop:"5px solid #5b8c00"},title:t.name},l.a.createElement("div",{className:"card-row"},l.a.createElement("div",{className:"card-title"},t.name.length>30?t.name.slice(0,27).concat("...\t"):t.name),l.a.createElement("div",{className:"card-badge"},l.a.createElement(U.a,{color:"high"==t.priority?"red":"normal"==t.priority?"blue":"green"},t.priority),l.a.createElement(U.a,null,t.status))),l.a.createElement("div",{className:"card-row"},l.a.createElement("div",{className:"card-desc"},t.desc.length>40?t.desc.slice(0,37).concat("..."):t.desc),l.a.createElement("div",{className:"card-badge"},t.label.map((function(e,t){return l.a.createElement(U.a,{key:t},e)})))),l.a.createElement("div",{className:"card-row"},l.a.createElement("div",{className:"card-due"},"Due: ",t.due),l.a.createElement("div",{className:"card-delete"},l.a.createElement(W.a,{title:"Delete todo"},l.a.createElement(H.a,{onClick:function(a){return e.handleDelete(a,t._id)},style:{fontSize:"16px",color:"#820014"}})))))})))))}}]),a}(l.a.Component),re=a(188),ie=a.n(re),ce=(a(400),a(401),V.a.Option),de=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleDelete=function(e,t){e.stopPropagation(),console.log("Delete",t),n.props.handleDeleteTodo(t)},n.showEditModal=function(e){n.setState({editModalVisible:!0,modalTodoId:e._id,modalName:e.name,modalDesc:e.desc,modalDue:e.due,modalStatus:e.status,modalPriority:e.priority,modalLabels:e.label})},n.handleEditSelect=function(e,t){n.setState(Object(u.a)({},t,e))},n.handleEditOk=function(){n.props.handleEditTodo({_id:n.state.modalTodoId,name:n.state.modalName,desc:n.state.modalDesc,due:n.state.modalDue,status:n.state.modalStatus,priority:n.state.modalPriority,label:n.state.modalLabels}),n.setState({editModalVisible:!1,modalTodoId:-1,modalName:"",modalDesc:"",modalDue:"",modalStatus:"",modalPriority:"",modalLabels:[]})},n.handleEditCancel=function(){n.setState({editModalVisible:!1,modalTodoId:-1,modalName:"",modalDesc:"",modalDue:"",modalStatus:"",modalPriority:"",modalLabels:[]})},n.handleDate=function(e,t){n.setState({modalDue:t})},n.handleChange=function(e){var t=e.target.name;n.setState(Object(u.a)({},t,e.target.value))},n.state={editModalVisible:!1,modalTodoId:-1,modalName:"",modalDesc:"",modalDue:"",modalStatus:"",modalPriority:"",modalLabels:[]},n.swimlanes={new:l.a.createRef(),inprogress:l.a.createRef(),completed:l.a.createRef()},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.drake=ie()([this.swimlanes.new.current,this.swimlanes.inprogress.current,this.swimlanes.completed.current]),this.drake.on("drop",(function(t,a,n,l){e.drake.cancel(!0),console.log(t.dataset,a.dataset.status,n.dataset.status);var s=JSON.parse(t.dataset.todo);s.status=a.dataset.status,e.props.handleEditTodo(s)}))}},{key:"componentWillUnmount",value:function(){this.drake.remove()}},{key:"render",value:function(){var e=this;return(l.a.createElement("div",{className:"board"},l.a.createElement(F.a,{visible:this.state.editModalVisible,title:"Edit Todo",onOk:this.handleEditOk,onCancel:this.handleEditCancel},l.a.createElement(v.a,{name:"modalName",onChange:this.handleChange,value:this.state.modalName,placeholder:"Name"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(v.a.TextArea,{name:"modalDesc",onChange:this.handleChange,value:this.state.modalDesc,placeholder:"Description"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},l.a.createElement(I.a,{name:"modalDate",style:{width:"45%"},value:J()(this.state.modalDue,"YYYY-MM-DD"),onChange:this.handleDate}),l.a.createElement(V.a,{style:{width:"45%"},value:this.state.modalStatus,onChange:function(t){return e.handleEditSelect(t,"modalStatus")},placeholder:"Select Status"},l.a.createElement(ce,{value:"new"},"New"),l.a.createElement(ce,{value:"inprogress"},"In Progress"),l.a.createElement(ce,{value:"completed"},"Completed"))),l.a.createElement("br",null),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},l.a.createElement(V.a,{style:{width:"35%"},value:this.state.modalPriority,onChange:function(t){return e.handleEditSelect(t,"modalPriority")},placeholder:"Select Priority"},l.a.createElement(ce,{value:"high"},"High"),l.a.createElement(ce,{value:"normal"},"Normal"),l.a.createElement(ce,{value:"low"},"Low")),l.a.createElement(V.a,{mode:"multiple",style:{width:"55%"},placeholder:"Please select label",defaultValue:[],value:this.state.modalLabels,onChange:function(t){return e.handleEditSelect(t,"modalLabels")}},this.props.labels.map((function(e,t){return l.a.createElement(ce,{key:e},e)}))))),l.a.createElement("div",{className:"kanban-col"},l.a.createElement("div",{className:"title new"},"New"),l.a.createElement("div",{"data-status":"new",style:{overflowY:"auto",height:"440px"},ref:this.swimlanes.new},this.props.todos.map((function(t,a){if("new"==t.status)return l.a.createElement("div",{key:a,onClick:function(){return e.showEditModal(t)},"data-todo":JSON.stringify(t),className:"kanban-card"},l.a.createElement("div",{className:"card-title"},t.name),l.a.createElement("div",{className:"card-desc"},t.desc),l.a.createElement("div",{className:"card-row"},l.a.createElement("div",{className:"card-labels"},l.a.createElement(U.a,null,t.priority),t.label.map((function(e,t){return l.a.createElement(U.a,{key:t},e)}))),l.a.createElement(W.a,{className:"card-delete",title:"Delete todo"},l.a.createElement(H.a,{onClick:function(a){return e.handleDelete(a,t._id)},style:{fontSize:"16px",color:"#820014"}}))))})))),l.a.createElement("div",{className:"kanban-col"},l.a.createElement("div",{className:"title inprogress"},"In Progress"),l.a.createElement("div",{"data-status":"inprogress",style:{overflowY:"auto",height:"440px"},ref:this.swimlanes.inprogress},this.props.todos.map((function(t,a){if("inprogress"==t.status)return l.a.createElement("div",{key:a,onClick:function(){return e.showEditModal(t)},"data-todo":JSON.stringify(t),className:"kanban-card"},l.a.createElement("div",{className:"card-title"},t.name),l.a.createElement("div",{className:"card-desc"},t.desc),l.a.createElement("div",{className:"card-row"},l.a.createElement("div",{className:"card-labels"},l.a.createElement(U.a,null,t.priority),t.label.map((function(e,t){return l.a.createElement(U.a,{key:t},e)}))),l.a.createElement(W.a,{className:"card-delete",title:"Delete todo"},l.a.createElement(H.a,{onClick:function(a){return e.handleDelete(a,t._id)},style:{fontSize:"16px",color:"#820014"}}))))})))),l.a.createElement("div",{className:"kanban-col"},l.a.createElement("div",{className:"title completed"},"Completed"),l.a.createElement("div",{"data-status":"completed",style:{overflowY:"auto",height:"440px"},ref:this.swimlanes.completed},this.props.todos.map((function(t,a){if("completed"==t.status)return l.a.createElement("div",{key:a,onClick:function(){return e.showEditModal(t)},"data-todo":JSON.stringify(t),className:"kanban-card"},l.a.createElement("div",{className:"card-title"},t.name),l.a.createElement("div",{className:"card-desc"},t.desc),l.a.createElement("div",{className:"card-row"},l.a.createElement("div",{className:"card-labels"},l.a.createElement(U.a,null,t.priority),t.label.map((function(e,t){return l.a.createElement(U.a,{key:t},e)}))),l.a.createElement(W.a,{className:"card-delete",title:"Delete todo"},l.a.createElement(H.a,{onClick:function(a){return e.handleDelete(a,t._id)},style:{fontSize:"16px",color:"#820014"}}))))}))))))}}]),a}(l.a.Component),ue=(a(402),a(403),x.a.Header),me=x.a.Content,he=(x.a.Footer,_.d.TabPane,function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).sortTodos=function(){var e=n.state.todos.filter((function(e){return"high"===e.priority}));e.push(n.state.todos.filter((function(e){return"normal"===e.priority}))),n.setState({todos:e})},n.handleAddTodo=function(e){e.user=n.props.user.name,console.log(e),C.a.post("/todo/add",e).then((function(e){console.log(e),200===e.data.status&&n.setState({todos:[e.data.todo].concat(Object(P.a)(n.state.todos))})})).catch((function(e){console.error(e),D.a.error("error occured !!")})),setTimeout((function(){console.log(n.state.todos)}),1e3)},n.handleDeleteTodo=function(e){C.a.post("/todo/delete",{_id:e}).then((function(t){if(200===t.data.status){var a=n.state.todos.filter((function(t){return t._id!=e}));n.setState({todos:a})}})).catch((function(e){console.error(e),D.a.error("error occured !!")})),setTimeout((function(){console.log(n.state.todos)}),1e3)},n.handleEditLabel=function(e){C.a.post("/labels",{labels:e,_id:n.props.user._id}).then((function(t){200===t.data.status?(n.setState({labels:e}),n.props.editLabel(e),setTimeout((function(){console.log(n.state.labels)}),100)):D.a.error("Label Operation Failed !!!")})).catch((function(e){console.error(e),D.a.error("Label Operation failed")}))},n.handleEditTodo=function(e){C.a.post("/todo/edit",e).then((function(t){if(200===t.data.status){var a=n.state.todos.map((function(t){return e._id==t._id?e:t}));n.setState({todos:a}),setTimeout((function(){console.log(n.state.todos)}),100)}else D.a.error("Edit Operation Failed !!!")})).catch((function(e){console.error(e),D.a.error("Edit Operation failed")}))},n.handleVisibleChange=function(e){n.setState({popVisible:e})},n.logout=function(){c.push("/")},n.state={labels:n.props.user.label,status:["new","inprogress","completed"],todos:[]},n.sortTodos=n.sortTodos.bind(Object(p.a)(n)),n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({labels:this.props.user.label}),setTimeout((function(){var t={name:e.props.user.name};C.a.post("/todo/get",t).then((function(t){if(200===t.data.status){console.log(t.data.todos);var a=t.data.todos.filter((function(e){return"high"===e.priority}));a.push.apply(a,t.data.todos.filter((function(e){return"normal"===e.priority}))),a.push.apply(a,t.data.todos.filter((function(e){return"low"===e.priority}))),console.log(a),e.setState({todos:a}),setTimeout((function(){console.log(e.state.todos)}),100)}})).catch((function(e){console.error(e)}))}),50)}},{key:"render",value:function(){return l.a.createElement(x.a,{className:"home"},l.a.createElement(ue,{className:"header-wrapper",style:{position:"fixed",zIndex:1,width:"100%"}},l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"title"},"TASK MANAGER"),l.a.createElement(A.a,{content:l.a.createElement("a",{onClick:this.logout},"Logout"),title:this.props.user.name,trigger:"hover",visible:this.state.popVisible,onVisibleChange:this.handleVisibleChange},l.a.createElement(Y.a,{size:"large",icon:l.a.createElement(z.a,null)})))),l.a.createElement(me,{className:"site-layout",style:{padding:"0 50px",marginTop:64}},l.a.createElement("br",null),l.a.createElement(_.d,null,l.a.createElement(_.b,null,l.a.createElement(_.a,null,"TASKS"),l.a.createElement(_.a,null,"BOARD")),l.a.createElement(_.c,null,l.a.createElement(oe,{labels:this.state.labels,status:this.state.status,todos:this.state.todos,handleAddTodo:this.handleAddTodo,handleEditTodo:this.handleEditTodo,handleDeleteTodo:this.handleDeleteTodo,handleEditLabel:this.handleEditLabel})),l.a.createElement(_.c,null,l.a.createElement(de,{todos:this.state.todos,handleEditTodo:this.handleEditTodo,labels:this.state.labels,handleDeleteTodo:this.handleDeleteTodo})))))}}]),a}(n.Component)),pe=a(56),be=a(190),fe=a(131),Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return console.log("reducer reached!!",t),{name:t.name,_id:t._id,label:t.label};case"SET_LABEL":return Object(fe.a)(Object(fe.a)({},e),{},{label:t.label});default:return console.log("Default called"),e}},ge=Object(pe.combineReducers)({user:Ee}),ve=a(191),ye=a.n(ve),Se=function(){try{var e=localStorage.getItem("state");if(null==e)return;return JSON.parse(e)}catch(t){return}}(),Ce=Object(pe.createStore)(ge,Se,Object(be.composeWithDevTools)());Ce.subscribe(ye()((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){}}(Ce.getState())}),1e3));var we=Ce,Ne=Object(d.b)((function(e){return console.log(e),{user:e.user}}),(function(e,t){return{getUser:function(){console.log(we.getState())},editLabel:function(t){e({type:"SET_LABEL",label:t})}}}))(he);a(414);var Oe=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(r.b,{history:c},l.a.createElement("div",null,l.a.createElement(r.a,{exact:!0,path:"/",component:k}),l.a.createElement(r.a,{exact:!0,path:"/signup",component:M}),l.a.createElement(r.a,{exact:!0,path:"/home",component:Ne}))))},ke=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function De(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(l.a.createElement(d.a,{store:we},l.a.createElement(Oe,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");ke?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):De(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):De(t,e)}))}}()}},[[200,1,2]]]);
//# sourceMappingURL=main.7fcb2566.chunk.js.map