com.art.mvc.model.model1 = function()
{
	/*this.base = base;
	this.serviceUrl = this.base.environment.galleryServiceUrl; //"http://loc-ws-account2.art.com/GalleryService.svc"
    this.domainUrl = this.base.environment.domain;*/
};

com.art.mvc.model.model1.prototype.getDemoData = function(callbacks,data) {	
	this.doRequest(callbacks,"json",data);
};

com.art.mvc.model.model1.prototype.doRequest = function (callbacks, methodType, data) {
       
    var requestObj = {};
    requestObj.url =  data;     
    requestObj.dataType = methodType;
    requestObj.type="GET";
    requestObj.data ="";
  
    requestObj.beforeSend = function () { callbacks['beforeSendHandler'](); };
    requestObj.success = function (response) { callbacks['successHandler'](response); };
    requestObj.error = function (response) { callbacks['errorHandler'](response); };
   
    $.ajax(requestObj);    
    
    //Normal ajax call - works fine    
	/*$.ajax({
    url: "http://translation.couchdb.com:9200/keys_mapping/keys_mapping/_search?pretty=true&from=0",
    type: "GET",
    data: "",
    dataType: "json",
    success: function(response){	           
        console.log("Hooray, it worked!");
        //return response;
    },	       
    error: function(jqXHR, textStatus, errorThrown){
        console.log("The following error occured: "+ textStatus, errorThrown);         
		},	       
    complete: function(){	           
    	 console.log("completed ");        
    }
	});
    */
};


