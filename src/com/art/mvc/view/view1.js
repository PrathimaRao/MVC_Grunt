//CONSTRUCTOR: instantiates the instance, Every Object must implement the base
com.art.mvc.view.view1 = function(data,app)
{
	this.app 		= app;
	this.moduleData = data;
	this.NAME		= com.art.mvc.view.view1.NAME;
	this.instance	= this;
};
com.art.mvc.view.view1.NAME = "View1";

com.art.mvc.view.view1.prototype.init = function(obj){
	$('.dynamicData').append(this.getTemplate());	
	var _this=this;
	$(".submitClass").live("click",function() {		
		_this.app.sendNotification(new com.art.mvc.utils.Note(_this.app.events.ON_CLICK_BUTTON1));
		//_this.app.sendNotification(new com.art.core.utils.Note(_this.app.events.ON_CLICK_BUTTON1));
	});
};

com.art.mvc.view.view1.prototype.destroy = function(){
};

com.art.mvc.view.view1.prototype.notify = function(){ 
	this.app.sendNotification(note);
};

com.art.mvc.view.view1.prototype.listNotificationInterests = function()
{
	return [ 
	         this.app.events.ON_CLICK_BUTTON1,
	         this.app.events.ON_CLICK_BUTTON2,
	         this.app.events.ON_CLICK_BUTTON3,
	         this.app.events.ON_CLICK_BUTTON1_SUCCESS,
	         this.app.events.ON_CLICK_BUTTON1_FAILED,
	         this.app.events.ON_CLICK_BUTTON2_SUCCESS,
	         this.app.events.ON_CLICK_BUTTON2_FAILED,
	         this.app.events.ON_CLICK_BUTTON3_SUCCESS,
	         this.app.events.ON_CLICK_BUTTON3_FAILED
	];
};

com.art.mvc.view.view1.prototype.handleNotification = function(note)
{
	switch(note.name)
	{
		case this.app.events.ON_CLICK_BUTTON1_SUCCESS:					
			$('.output').html("Data from http://api.geonames.org/:"+ this.getGridData(note.body));			
		break;
		case this.app.events.ON_CLICK_BUTTON1_FAILED:
			//trace(note.body);
				break;		
		case this.app.events.ON_CLICK_BUTTON2_SUCCESS:				
				break;		
		case this.app.events.ON_CLICK_BUTTON2_FAILED:
				break;
		case this.app.events.ON_CLICK_BUTTON3_SUCCESS:			
			break;
		case this.app.events.ON_CLICK_BUTTON3_FAILED:				
			break;	   
		default:break;			
	}
};

com.art.mvc.view.view1.prototype.getGridData = function(jsonResponse)
{
	//STEP: Get the raw string for the template
	var stringTranslatedPhrase = "", stringPhraseId="",languageId="",phraseId="" , translatedPhraseStatusID=""; 
	var stringTable="";
	stringTable= "<table border='1'><thead>"
		+"<tr><th>countryName</th><th>fipsCode</th><th>countryCode</th><th>isoNumeric</th><th>north</th></tr>";
		+"</thead>";
		+"<tbody>";		
	
	for(var i=0; i<jsonResponse.geonames.length; i++)
	{		
		stringTable += "<tr><td>"+jsonResponse.geonames[i].countryName+"</td><td>"+jsonResponse.geonames[i].fipsCode+"</td><td>"+jsonResponse.geonames[i].countryCode+"</td><td>"+jsonResponse.geonames[i].isoNumeric+"</td><td>"+jsonResponse.geonames[i].north+"</td></tr>";					
	}
	
	stringTable +="</tbody></table>";
			
	return stringTable;
};

com.art.mvc.view.view1.prototype.getTemplate = function()
{
	//STEP: Get the raw string for the template
	var returnValue = this.template;	
	return returnValue;
};

com.art.mvc.view.view1.prototype.template = "<div id='controls' style='width:811px; height:50px'></div>" 
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

