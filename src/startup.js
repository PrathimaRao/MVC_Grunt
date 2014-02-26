$(document).ready(function(){
    //registerModule
    
	core.registerModule(new com.art.mvc.model.model1({},core));
	core.registerModule(new com.art.mvc.view.view1({},core));
	
	//Register Common Command
	core.registerSubscriber(new com.art.mvc.controller.controller1({target:''},core));	
	
	//startModule
	core.startModule(com.art.mvc.view.view1.NAME);		
	                	  		
	//addToSubEnvironment
    /*core.addToSubEnvironment('isMyGalleryPage',(location.href.indexOf("/me/") > -1 || location.href.indexOf("mygalleries.asp") ) > -1);
	core.addToSubEnvironment('isExternalPage',location.href.indexOf("/me/") == -1);
    core.addToSubEnvironment('isMyAccountPage',location.href.indexOf("/asp/secure") > -1);
    core.addToSubEnvironment('isMyPhotosPage',location.href.indexOf("/photostoart") > -1);  
   */
});


