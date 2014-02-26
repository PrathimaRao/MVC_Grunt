com.art.mvc.controller.controller1 = function (data, app) {
    this.NAME = com.art.mvc.controller.controller1.NAME;
    this.app = app;
    this.serviceProvider = new com.art.mvc.model.model1();
    this.model = this.app.getModel();
    this.processing = false;
    this.pageNumber = 1;
    this.currentNote;
    this.username;
    this.password;
    this.tempNewCreatedGalleryId; //Used for move and save to gallery
    this.tempLastSelectedGalleryId;
    this.printFileName;
    this.fromExternalModule = false;
    this.fromGridModule=false;
    this.referredModule="";
    this.requestfromforb=false;    	
};

com.art.mvc.controller.controller1.NAME = "Controller";

com.art.mvc.controller.controller1.prototype.init = function () {

};
com.art.mvc.controller.controller1.prototype.listNotificationInterests = function () {
    return [this.app.events.STARTUP,	      
            this.app.events.ON_CLICK_BUTTON1,
            this.app.events.ON_CLICK_BUTTON2,
            this.app.events.ON_CLICK_BUTTON3           
	        ];
};
com.art.mvc.controller.controller1.prototype.handleNotification = function (note) {
	
    var _this = this;
    switch (note.name) {
        case this.app.events.STARTUP:        	
            break;
        case this.app.events.ON_CLICK_BUTTON1:        	
            var data = ""; 
            
            var url ="http://api.geonames.org/countryInfoJSON?" ; 
        	var username=$('#username').val();
        	var country=$('#country').val();
        	
        		if(username!="" && country!="")
        			url=url+"Username="+username+"&country="+country;	
        		else if(username!="")
        			url=url+"Username="+username;	
        		data=url;
            this.serviceProvider.getDemoData({successHandler: this.onclick1successfunc, errorHandler: this.onclick1failedfunc, beforeSendHandler: function () { } }, data);
           	break;
        case this.app.events.ON_CLICK_BUTTON2:
        	alert("ON_CLICK_BUTTON2");
            break;
        case this.app.events.ON_CLICK_BUTTON3:
        	alert("ON_CLICK_BUTTON3");
            break;      
        default:
            break;
    }
};

com.art.mvc.controller.controller1.prototype.onclick1successfunc = function(response)
{
	//trace(response);
	//alert("Success response:" +response );
	core.sendNotification(new com.art.mvc.utils.Note(core.events.ON_CLICK_BUTTON1_SUCCESS,response));	
};

com.art.mvc.controller.controller1.prototype.onclick1failedfunc = function(response)
{
	//trace(response);
	//alert("Failure response:" +response );
	core.sendNotification(new com.art.mvc.utils.Note(core.events.ON_CLICK_BUTTON1_FAILED, error, 'ajax'));		
};