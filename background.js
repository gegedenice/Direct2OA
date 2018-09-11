/*
Create all the context menu items.
*/
browser.menus.create({
  id: "menuItemSelectionCheckAsTitle",
  title: browser.i18n.getMessage("menuItemSelectionCheckAsTitle"),
  contexts: ["selection"]
});

browser.menus.create({
  id: "menuItemSelectionCheckAsCitation",
  title: browser.i18n.getMessage("menuItemSelectionCheckAsCitation"),
  contexts: ["selection"]
});

browser.menus.create({
    id: "menuItemSelectionCheckAsDoi",
    title: browser.i18n.getMessage("menuItemSelectionCheckAsDoi"),
    contexts: ["selection"],
});

browser.menus.create({
    id: "menuItemSelectionCheckAsPubmedid",
    title: browser.i18n.getMessage("menuItemSelectionCheckAsPubmedid"),
    contexts: ["selection"],
});

browser.menus.create({
  id: "open-sidebar",
  title: browser.i18n.getMessage("menuItemOpenSidebar"),
  contexts: ["all"],
  command: "_execute_sidebar_action"
});

/*
The click event listener, where we perform the appropriate action given the
ID of the menu item that was clicked.
*/

function getOA(url,text,type){
  $.ajax({
   type: "POST",
   url: url
}).done(function( data ) {
	let itemArray;
	if(typeof data.data.availability[0] != 'undefined'){
	var creating = browser.tabs.create({
    url:data.data.availability[0].url
  });
	itemArray = [data.data.availability[0].url,"",type];}
	else {
	itemArray = ["No result","",type];			
	}
    localStorage.setItem(text, JSON.stringify(itemArray));
    browser.runtime.reload();
});		
}

browser.menus.onClicked.addListener((info, tab) => {
	let type,url;
  switch (info.menuItemId) {
	//pour un titre  
    case "menuItemSelectionCheckAsTitle":
	type = "Titre";
	url = "https://api.openaccessbutton.org/availability?title="+info.selectionText+"&apikey=00a457591acc0588a89871d75f2a04";
	getOA(url,info.selectionText,type);
      break;
	//pour une citation
    case "menuItemSelectionCheckAsCitation":
	type = "Citation";
	url = "https://api.openaccessbutton.org/availability?citation="+info.selectionText+"&apikey=00a457591acc0588a89871d75f2a04";
	getOA(url,info.selectionText,type);
      break;
	//pour un DOI  
	  case "menuItemSelectionCheckAsDoi":
	  type = "DOI";
	  url = "https://api.openaccessbutton.org/availability?url=https://doi.org/"+info.selectionText+"&apikey=00a457591acc0588a89871d75f2a04";
	getOA(url,info.selectionText,type);
      break;
	  //pour un Pubmed ID
    case "menuItemSelectionCheckAsPubmedid":
	type = "PMID";
	url = "https://api.openaccessbutton.org/availability?url=https://www.ncbi.nlm.nih.gov/pubmed/"+info.selectionText+"&apikey=00a457591acc0588a89871d75f2a04";
	getOA(url,info.selectionText,type);
      break;
    case "open-sidebar":
      console.log("Opening my sidebar");
      break;
  }
});
