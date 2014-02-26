var com={};com.art={};com.art.mvc={};com.art.mvc.controller={};com.art.mvc.model={};com.art.mvc.view={};com.art.mvc.utils={};$(document).ready(function(){core.registerModule(new com.art.mvc.model.model1({},core));core.registerModule(new com.art.mvc.view.view1({},core));core.registerSubscriber(new com.art.mvc.controller.controller1({target:''},core));core.startModule(com.art.mvc.view.view1.NAME);});var core=(function()
{var model={};var serviceProvider={};var templateEngine={};var subscribers={};var version="@VERSION@";var events={STARTUP:'startup',ON_CLICK_BUTTON1:"onclickbutton1",ON_CLICK_BUTTON2:"onclickbutton2",ON_CLICK_BUTTON3:"onclickbutton3",ON_CLICK_BUTTON1_SUCCESS:"onclickbutton1success",ON_CLICK_BUTTON1_FAILED:"onclickbutton1failed",ON_CLICK_BUTTON2_SUCCESS:"onclickbutton2success",ON_CLICK_BUTTON2_FAILED:"onclickbutton2failed",ON_CLICK_BUTTON3_SUCCESS:"onclickbutton3success",ON_CLICK_BUTTON3_FAILED:"onclickbutton3failed"};var constants={VIEW:"50",EDIT:"100",GALLERY_HOME:'a',GRID_VIEW:'b',DETAIL_VIEW:'c'};var interestedSubscribers={};return{"getVersion":function(){return version;},"events":events,"constants":constants,"registerModule":function(module)
{this.registerSubscriber(module);},"registerSubscriber":function(observer)
{if(observer.NAME==undefined){}
else{var arr=observer.listNotificationInterests();for(var i=0;i<arr.length;i++)
{var noteName=arr[i];if(interestedSubscribers[noteName]==undefined)
interestedSubscribers[noteName]={};interestedSubscribers[noteName][observer.NAME]=true;}
subscribers[observer.NAME]=observer;}},"getInterestedSubscribers":function(){return interestedSubscribers;},"removeModule":function(name)
{var tmp={};for(var m in subscribers)
{if(m!=name)
tmp[m]=subscribers[m];}
subscribers=tmp;},"sendNotification":function(note)
{for(var m in interestedSubscribers[note.name])
{if(subscribers[m]!=undefined)
subscribers[m].handleNotification(note);}},"clearAll":function()
{subscribers={};interestedSubscribers={};},"startAll":function()
{for(var subscriber in subscribers)
{subscribers[subscriber].init();}},"startAllByViewMode":function(viewmode)
{for(var subscriber in subscribers)
{subscribers[subscriber].init(viewmode);}},"startModule":function(name,obj)
{if(obj==undefined)
{subscribers[name].init();}
else
{subscribers[name].init(obj);}},"getModel":function(){return model;},"init":function(envObj,viewMode,envObjSub)
{}};})();com.art.mvc.utils.Note=function(name,body,type)
{this.name=name;this.body=body;this.type=type;};com.art.mvc.controller.controller1=function(data,app){this.NAME=com.art.mvc.controller.controller1.NAME;this.app=app;this.serviceProvider=new com.art.mvc.model.model1();this.model=this.app.getModel();this.processing=false;this.pageNumber=1;this.currentNote;this.username;this.password;this.tempNewCreatedGalleryId;this.tempLastSelectedGalleryId;this.printFileName;this.fromExternalModule=false;this.fromGridModule=false;this.referredModule="";this.requestfromforb=false;};com.art.mvc.controller.controller1.NAME="Controller";com.art.mvc.controller.controller1.prototype.init=function(){};com.art.mvc.controller.controller1.prototype.listNotificationInterests=function(){return[this.app.events.STARTUP,this.app.events.ON_CLICK_BUTTON1,this.app.events.ON_CLICK_BUTTON2,this.app.events.ON_CLICK_BUTTON3];};com.art.mvc.controller.controller1.prototype.handleNotification=function(note){var _this=this;switch(note.name){case this.app.events.STARTUP:break;case this.app.events.ON_CLICK_BUTTON1:var data="";var url="http://api.geonames.org/countryInfoJSON?";var username=$('#username').val();var country=$('#country').val();if(username!=""&&country!="")
url=url+"Username="+username+"&country="+country;else if(username!="")
url=url+"Username="+username;data=url;this.serviceProvider.getDemoData({successHandler:this.onclick1successfunc,errorHandler:this.onclick1failedfunc,beforeSendHandler:function(){}},data);break;case this.app.events.ON_CLICK_BUTTON2:alert("ON_CLICK_BUTTON2");break;case this.app.events.ON_CLICK_BUTTON3:alert("ON_CLICK_BUTTON3");break;default:break;}};com.art.mvc.controller.controller1.prototype.onclick1successfunc=function(response)
{core.sendNotification(new com.art.mvc.utils.Note(core.events.ON_CLICK_BUTTON1_SUCCESS,response));};com.art.mvc.controller.controller1.prototype.onclick1failedfunc=function(response)
{core.sendNotification(new com.art.mvc.utils.Note(core.events.ON_CLICK_BUTTON1_FAILED,error,'ajax'));};com.art.mvc.model.model1=function()
{};com.art.mvc.model.model1.prototype.getDemoData=function(callbacks,data){this.doRequest(callbacks,"json",data);};com.art.mvc.model.model1.prototype.doRequest=function(callbacks,methodType,data){var requestObj={};requestObj.url=data;requestObj.dataType=methodType;requestObj.type="GET";requestObj.data="";requestObj.beforeSend=function(){callbacks['beforeSendHandler']();};requestObj.success=function(response){callbacks['successHandler'](response);};requestObj.error=function(response){callbacks['errorHandler'](response);};$.ajax(requestObj);};com.art.mvc.view.view1=function(data,app)
{this.app=app;this.moduleData=data;this.NAME=com.art.mvc.view.view1.NAME;this.instance=this;};com.art.mvc.view.view1.NAME="View1";com.art.mvc.view.view1.prototype.init=function(obj){$('.dynamicData').append(this.getTemplate());var _this=this;$(".submitClass").live("click",function(){_this.app.sendNotification(new com.art.mvc.utils.Note(_this.app.events.ON_CLICK_BUTTON1));});};com.art.mvc.view.view1.prototype.destroy=function(){};com.art.mvc.view.view1.prototype.notify=function(){this.app.sendNotification(note);};com.art.mvc.view.view1.prototype.listNotificationInterests=function()
{return[this.app.events.ON_CLICK_BUTTON1,this.app.events.ON_CLICK_BUTTON2,this.app.events.ON_CLICK_BUTTON3,this.app.events.ON_CLICK_BUTTON1_SUCCESS,this.app.events.ON_CLICK_BUTTON1_FAILED,this.app.events.ON_CLICK_BUTTON2_SUCCESS,this.app.events.ON_CLICK_BUTTON2_FAILED,this.app.events.ON_CLICK_BUTTON3_SUCCESS,this.app.events.ON_CLICK_BUTTON3_FAILED];};com.art.mvc.view.view1.prototype.handleNotification=function(note)
{switch(note.name)
{case this.app.events.ON_CLICK_BUTTON1_SUCCESS:$('.output').html("Data from http://api.geonames.org/:"+this.getGridData(note.body));break;case this.app.events.ON_CLICK_BUTTON1_FAILED:break;case this.app.events.ON_CLICK_BUTTON2_SUCCESS:break;case this.app.events.ON_CLICK_BUTTON2_FAILED:break;case this.app.events.ON_CLICK_BUTTON3_SUCCESS:break;case this.app.events.ON_CLICK_BUTTON3_FAILED:break;default:break;}};com.art.mvc.view.view1.prototype.getGridData=function(jsonResponse)
{var stringTranslatedPhrase="",stringPhraseId="",languageId="",phraseId="",translatedPhraseStatusID="";var stringTable="";stringTable="<table border='1'><thead>"
+"<tr><th>countryName</th><th>fipsCode</th><th>countryCode</th><th>isoNumeric</th><th>north</th></tr>";+"</thead>";+"<tbody>";for(var i=0;i<jsonResponse.geonames.length;i++)
{stringTable+="<tr><td>"+jsonResponse.geonames[i].countryName+"</td><td>"+jsonResponse.geonames[i].fipsCode+"</td><td>"+jsonResponse.geonames[i].countryCode+"</td><td>"+jsonResponse.geonames[i].isoNumeric+"</td><td>"+jsonResponse.geonames[i].north+"</td></tr>";}
stringTable+="</tbody></table>";return stringTable;};com.art.mvc.view.view1.prototype.getTemplate=function()
{var returnValue=this.template;return returnValue;};com.art.mvc.view.view1.prototype.template="<div id='controls' style='width:811px; height:50px'></div>"
+"<font face='verdana,arial' size=-1>"
+"<center><table cellpadding='2' cellspacing='0' border='0' id='ap_table'>"
+"<tr><td bgcolor='blue'><table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td bgcolor='blue' align=center style='padding:2;padding-bottom:4'><b><font size=-1 color='white' face='verdana,arial'><b>'Search Functionality'</b></font></th></tr>"
+"<tr><td bgcolor='white' style='padding:5'><br> "
+"<form method='post' action='' name='aform' target='_top'>"
+"<center><table>"
+"<tr><td><font face='verdana,arial' size=-1>Username:</td><td><input type='text' id='username'></td></tr>"
+"<tr><td><font face='verdana,arial' size=-1>Country:</td><td><input type='text' id='country'></td></tr>"
+"<tr><td><font face='verdana,arial' size=-1>&nbsp;</td><td><font face='verdana,arial' size=-1><input type='button' value='Search' class='submitClass'></td></tr>"
+"<tr><td colspan=2><font face='verdana,arial' size=-1>&nbsp;</td></tr>"
+"</table></center>"
+"</form>"
+"</td></tr></table></td></tr></table>";