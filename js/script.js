// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/*global $*/
$(document).ready(function(){
  
 $("#search").click( function() {
    var gifSearch = $("#srch-term").val();
     callGiphyAPIWithSearchTerm(gifSearch);
 });
 
  
  
  


function callGiphyAPIWithSearchTerm(searchTerm) {
    $.ajax({
      url: "https://api.giphy.com/v1/stickers/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC",
      method: "GET",
      success: function(response) {
        for( var i = 0; i < response.data.length; i ++){
            $("#display").html("<img src=" + response.data[i].images.original.url + "/>");
        }
      },
    }); 
}



});