/**
 * @author Prathima A
 * @version 1.0f
 * @classDescription Central Application Core
 * @class 
 */
var core = (function()
{
	var model			= {};	
	var serviceProvider = {};
	var templateEngine 	= {};
	var subscribers		= {};	
	var version			= "@VERSION@";	

	var events = {
			STARTUP:'startup',           
            ON_CLICK_BUTTON1 : "onclickbutton1",
            ON_CLICK_BUTTON2 : "onclickbutton2",
            ON_CLICK_BUTTON3 : "onclickbutton3",
            ON_CLICK_BUTTON1_SUCCESS:"onclickbutton1success",
            ON_CLICK_BUTTON1_FAILED:"onclickbutton1failed",
            ON_CLICK_BUTTON2_SUCCESS:"onclickbutton2success",
            ON_CLICK_BUTTON2_FAILED:"onclickbutton2failed",
            ON_CLICK_BUTTON3_SUCCESS:"onclickbutton3success",
            ON_CLICK_BUTTON3_FAILED:"onclickbutton3failed"
	};
	var constants = {			
			VIEW:"50",
			EDIT:"100",
			GALLERY_HOME:'a',
			GRID_VIEW:'b',
			DETAIL_VIEW:'c'
	};
	/*
	 * Public API to Application
	 */
	var interestedSubscribers = {};
	return {
		"getVersion":function(){return version;},
		"events":events,
		"constants":constants,	
		"registerModule":function(module)
		{
			this.registerSubscriber(module);
		},
		"registerSubscriber":function(observer)
		{
			if(observer.NAME == undefined){
				//throw new Error("MyGalleries.registerSubscriber failed! observer.NAME is undefined.");
			}
			else {
			var arr = observer.listNotificationInterests();
			for(var i=0; i < arr.length; i++)
			{
				var noteName = arr[i];
				if(interestedSubscribers[noteName] == undefined)
					interestedSubscribers[noteName] = {};
					
				interestedSubscribers[noteName][observer.NAME] = true;
			}
			subscribers[observer.NAME] = observer;
			}
		},
		"getInterestedSubscribers":function(){ return interestedSubscribers; },
		"removeModule":function(name)
		{
			var tmp = {};
			for(var m in subscribers)
			{
				if(m != name)
					tmp[m] = subscribers[m];
			}
			subscribers = tmp;
		},
		"sendNotification":function(note)
		{
			//trace("note.name: "+note.name);
			for(var m in interestedSubscribers[note.name])
			{
				if(subscribers[m] != undefined)
					subscribers[m].handleNotification(note);
			}
		},
		"clearAll":function()
		{
			subscribers = {};
			interestedSubscribers = {};
		},
		"startAll":function()
		{
			for(var subscriber in subscribers)
			{
				//trace("module.init: "+subscriber);
				subscribers[subscriber].init();
			}
		},		
		"startAllByViewMode":function(viewmode)
		{
			for(var subscriber in subscribers)
			{
				subscribers[subscriber].init(viewmode);
			}
		},
		"startModule":function(name,obj)
		{
			if(obj == undefined)
			{
				subscribers[name].init();
			}
			else
			{
				subscribers[name].init(obj);
			}
		},
		"getModel":function(){ return model; },		
		"init":function(envObj,viewMode,envObjSub)
		{		
		    /*try{
            if(envObj==undefined)envObj={};
            }
            catch(err){envObj={};}
		
		    var environmentObject = new com.art.core.vos.Environment();
            
            //STEP: Call init(), optionally passing in env var. If not passed in, then it will look in local Storage.  If not found, then attempts to get from service.
            environmentObject.init(envObj);

            //STEP: Now set the global var with the properties.
            environment = environmentObject.properties;		
		
			//environment = envObj;
			environmentSub = envObjSub;
			model		= new com.art.demo.proxies.ApplicationProxy(environment,viewMode,envObjSub);
					*/	
		}	
	};
})();
