initialize();

function initialize() {
   for (var i = 0; i < localStorage.length; i++) {
	   let itemContent;
  itemContent = JSON.parse(localStorage.getItem(localStorage.key(i)));
	   $('#container').append('<div class="card small mx-auto border-primary mb-3" style="max-width: 18rem;"><div class="card-header">'+itemContent[2]+' : '+localStorage.key(i)+'</div><div class="card-body text-primary"><h6 class="card-subtitle mb-2 text-muted"><a href="'+itemContent[0]+'">'+itemContent[0]+'</a></h6><p class="card-text">Ajouter une note</p><p><input type="text" id="'+i+'" value="'+itemContent[1]+'" /></p><a href="" class="update btn btn-success card-link" data-key="'+i+'" data-url="'+itemContent[0]+'">Modifier</a><a href="" class="delete btn btn-danger card-link" data-key="'+i+'">Supprimer</a></div></div>');
  }
}

$("#clearAll").click(function() {
localStorage.clear();
browser.runtime.reload();
});

 $('.delete').click(function(e){
e.preventDefault();
localStorage.removeItem(localStorage.key($(this).data('key')));
browser.runtime.reload();
 });
 
  $('.update').click(function(e){
e.preventDefault();
let itemArray;
itemArray = [$(this).data('url'),$("#"+$(this).data('key')).val()];
localStorage.setItem(localStorage.key($(this).data('key')), JSON.stringify(itemArray));
browser.runtime.reload();
 });