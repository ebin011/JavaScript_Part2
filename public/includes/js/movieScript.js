

/*var jsonServer = require('json-server');

var server = jsonServer.create(); // Returns an Express server
var router = jsonServer.router('movieDetails.json'); // Returns an Express router

server.use(jsonServer.defaults); // logger, static and cors middlewares
server.use(router); // Mount router on '/'

server.listen(3000);*/


//var pageNum=1;
var itemNum=0;
var totalPage=0;
var total;
var curPage;
var $data=$("#display");
function displaySearch()
{
	
		$( "#accordion" ).toggle();
		$("#addDetails").hide();
		$("#deleteDetails").hide();
}
function displayAdd()
{
	$("#addDetails").toggle();
	$( "#accordion" ).hide();
	$("#deleteDetails").hide();
}



function displayMovies()
{
$(document).ready(function(){
	//console.log(pgmNum);

	
			
				var movieList=$("#movieList");
				var title=$("#mvYear").val();

				$.ajax({
					type: 'GET',
					url: "/Movies/?Year="+title, 
					
					error: function() {
						$(movieList).html('<p>An error has occurred</p>');
					},
					
					success: function(data) {
					        
						//$.each(data,function(key, val){
							console.log(data);
							var imgPoster;
							 $('#display').html("");
							//var total=data.totalResults;
							 total=data.totalResults;
							totalPage=parseInt(data.totalResults);
							console.log(title);
							
							//$("#pageTab").pagination('updateItems',totalPage);
							//$("#pageTab").pagination('selectPage', curPage);
							// $("#pageTab").pagination('getCurrentPage');
							//$("#pageTab").pagination('nextPage');
							
							//$("#info").show();

							/*var prop=data.Search.Year;
							var asc = true;
							list = list.Year.sort(function(a, b) {
								if (asc) return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
								else return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
							});*/

							/*list.sort(function(a, b) {
								return parseFloat(b.Year) - parseFloat(a.Year);
							});*/

							console.log();
							if (total==0)
							{
								$("#display").append("<b>Sorry,No data found</b>")
							}
							else
							{
								var dataHtml="<table class="+"table table-striped"+"><tr><th>Id</th><th>Relase Year</th><th>Movie Type</th><th>Director Name</th><th>Movie Name</th></tr>";
								$.each(data,function(key, val)
								{
									
									console.log("Movie Name:"+val.MovieName);
									/*if(list[i].Poster=="N/A")
									{
									imgPoster="Images/poster.png";

									}
									else
									{
									imgPoster=list[i].Poster;
									}*/
									 
								/*	$("#display").append("<div class="+"col-sm-6"+">"+"<div class="+" panel panel-info "+">"
											 +"<div class="+" panel-heading "+"><b> <h3>"+val.MovieName +"  </div>"
											  +"<div class="+" panel-body  "+"> <b>Year: </b>"+ val.Year +"</div>"
											  +"<div class="+" panel-body "+"> <b>imdbID: </b>" +val.Type+ "</div>"
											  +"<div class="+" panel-body "+"> <b>Type: </b>" +val.Director+ "</div>"
											+"</div></div>");*/
											dataHtml += "<tr><td>"+val.id+"</td><td>"+val.Year+"</td><td>"+val.Type+"</td><td>"+val.Director+"</td><td>"+val.MovieName+"</td></tr>";
											
											
											$("#pageTab").attr("style","visibility:visible");
											//pageNum=pageNum+1;	
											//console.log("inside function"+i);					
								/*$("#display").append("<div class="+"col-sm-6"+"><ul><li"+list[i].Title+"</li>"+
									"<li><b>Year:</b>"+list[i].Year+"</li><br>"+
									"<li><b>imdbID:</b>"+list[i].imdbID+"</li><br>"+
									"<li><b>Type:</b>"+list[i].Type+"</li><br><br>"+
									'<li><img class="img-responsive" width="300" height="300" src="'+imgPoster+'"</li></ul></br></br></div>');*/
									
								});
								dataHtml +="</table>";
								$("#display").append(dataHtml);
								/*$.each(data,function(key, val)
								{
										$.each(val,function(i,value)
										{
									if(i=="Poster")
									{		
										if(value=='N/A')
										{
										imgPoster="Images/poster.png";

										}
										else
										{
										imgPoster=value;
										}
									}	
									
								$("#display").append("<table><tr><td><b>"+i+"</b>"+value+"</td></tr></table>");*/
							}
							
						//});
							//$("div").remove("#display");
							


					},

					
				});
			
			
		});
}


function displayMovieType()
{
	if (document.getElementById("type1").checked) {
 	 var type = document.getElementById("type1").value;
 	}
 	else if (document.getElementById("type2").checked)
 	{
 	 var type = document.getElementById("type2").value;
 	}
 	else
 	{
 	 var type = document.getElementById("type3").value;
 	}
	console.log("type"+type);


	$(document).ready(function(){
	//console.log(pgmNum);

	
			
				var movieList=$("#movieList");
				var title=$("#mvYear").val();

				//$( "#accordion" ).hide();
				$("#addDetails").hide();

				$.ajax({
					type: 'GET',
					url: "/Movies/?Type="+type, 
					
					error: function() {
						$(movieList).html('<p>An error has occurred</p>');
					},
					
					success: function(data) {
					        
						
							console.log(data);
							var imgPoster;
							 $('#display').html("");
							
							 total=data.totalResults;
							totalPage=parseInt(data.totalResults);
							console.log(title);
							
							

							console.log();
							if (total==0)
							{
								$("#display").append("<b>Sorry,No data found</b>")
							}
							else
							{
								var dataHtml="<table class="+"table table-striped"+"><tr><th>Id</th><th>Relase Year</th><th>Movie Type</th><th>Director Name</th><th>Movie Name</th></tr>";
								$.each(data,function(key, val)
								{
									
									console.log("Movie Name:"+val.MovieName);
									
											dataHtml += "<tr><td>"+val.id+"</td><td>"+val.Year+"</td><td>"+val.Type+"</td><td>"+val.Director+"</td><td>"+val.MovieName+"</td></tr>";
											
											
											$("#pageTab").attr("style","visibility:visible");
											
									
								});
								dataHtml +="</table>";
								$("#display").append(dataHtml);
								
							}
							
						
							


					},

					
				});
			
			
		});
//}
//console.log("type"+type);	
}


function displayMovieName()
{
$(document).ready(function(){
	//console.log(pgmNum);
				var title=$("#mvName").val();

				console.log(title);
				//$( "#accordion" ).hide();
				$("#addDetails").hide();

				$.ajax({
					type: 'GET',
					url: "/Movies/?MovieName="+title, 
					
					error: function() {
						$(movieList).html('<p>An error has occurred</p>');
					},
					
					success: function(data) {
					        
						
							console.log(data);
							var imgPoster;
							 $('#display').html("");
							
							 //total=data.totalResults;
							//totalPage=parseInt(data.totalResults);
							console.log(title);
							console.log('hello');
							
							console.log();
							if (total==0)
							{
								$("#display").append("<b>Sorry,No data found</b>");
								

							}
							else
							{
								console.log('testing');
								var options = {
									dataSource: data,
									pageSize: 10,
									callback: function(response, pagination){
										//console.log("haiii");
										var dataHtml="<table class="+"table table-striped"+"><tr><th>Id</th><th>Relase Year</th><th>Movie Type</th><th>Director Name</th><th>Movie Name</th></tr>";
										$.each(response,function(key, val)
										{
									
									
									
											dataHtml += "<tr><td>"+val.id+"</td><td>"+val.Year+"</td><td>"+val.Type+"</td><td>"+val.Director+"</td><td>"+val.MovieName+"</td></tr>";
											
											
										//	$("#pageTab").attr("style","visibility:visible");
											
									
								});
								$data.append(dataHtml);
								dataHtml +="</table>";
								//$data.prev().html(dataHtml);
								
								}
								};
								$data.pagination(options);

								}
							}
											
				});
			
			
		});
}



function displayAllMovies()
{
$(document).ready(function(){
	//console.log(pgmNum);

	
			
				var movieList=$("#movieList");
				var title=$("#mvYear").val();

				$( "#accordion" ).hide();
				$("#addDetails").hide();

				$.ajax({
					type: 'GET',
					url: "/Movies", 
					
					error: function() {
						$(movieList).html('<p>An error has occurred</p>');
					},
					
					success: function(data) {
					        
						
							console.log(data);
							var imgPoster;
							 $('#display').html("");
							
							 total=data.totalResults;
							totalPage=parseInt(data.totalResults);
							console.log(title);
							
							

							console.log();
							if (total==0)
							{
								$("#display").append("<b>Sorry,No data found</b>")
							}
							else
							{
								
								console.log('testing');
								var options = {

									dataSource: data,
									pageSize: 10,
									callback: function(response, pagination){
										//console.log("haiii");
										//var dataHtml="";
										var dataHtml="<table class="+"table table-striped"+"><tr><th>Id</th><th>Relase Year</th><th>Movie Type</th><th>Director Name</th><th>Movie Name</th></tr>";
										$.each(response,function(key, val)
										{
									
									
									
											dataHtml += "<tr><td>"+val.id+"</td><td>"+val.Year+"</td><td>"+val.Type+"</td><td>"+val.Director+"</td><td>"+val.MovieName+"</td></tr>";
											
											
										//	$("#pageTab").attr("style","visibility:visible");
											
									
								});
								$data.append(dataHtml);
								dataHtml +="</table>";
								//$data.prev().html(dataHtml);
								
								}
								};
								$data.pagination(options);
								
							}
							
						
							


					},

					
				});
			
			
		});
}




function addMovieDetails()
	{
		var Movies={
		 id:$("#movieId").val(),
		 Year:$("#movieYear").val(),
		 Type:$("#types").val(),
		 Director:$("#director").val(),
		 MovieName:$("#movieName").val()
	};

		var addUrl = "/Movies";
		$.ajax(
		{
			type: 'POST',
			url: addUrl,
			data: Movies,
			success : function (data)
			{
				console.log("Successfully Added ")
				
				alert("Movie  Added Successfully - New ID : " + data.id);
			},
			error : function (data)
			{
				console.log("Error in Adding ");
			}
		});
	}



	function displayDelete()
{
	$(document).ready(function(){
	//console.log(pgmNum);

	
			
				var movieList=$("#movieList");
				var title=$("#mvYear").val();

				$( "#accordion" ).hide();
				$("#addDetails").hide();

				$.ajax({
					type: 'GET',
					url: "/Movies", 
					
					error: function() {
						$(movieList).html('<p>An error has occurred</p>');
					},
					
					success: function(data) {
					        
						
							//console.log(data);
							var imgPoster;
							 $('#display').html("");
							
							 total=data.totalResults;
							totalPage=parseInt(data.totalResults);
							console.log("total"+total);
							
							

							console.log();
							if (total==0)
							{
								$("#display").append("<b>Sorry,No data found</b>")
							}
							else
							{
								var dataHtml="<table class="+"table table-striped"+"><tr><th>Id</th><th>Relase Year</th><th>Movie Type</th><th>Director Name</th><th>Movie Name</th></tr>";
								$.each(data,function(key, val)
								{
									
									//console.log("Movie Name:"+val.MovieName);
									
											dataHtml += "<tr><td>"+val.id+"</td><td>"+val.Year+"</td><td>"+val.Type+"</td><td>"+val.Director+"</td><td>"+val.MovieName+"</td><td><button type="+"button"+" value="+val.id+"  id="+"val"+" class="+" del btn btn-info "+" data-toggle="+"modal"+" data-target="+"#myModal"+" onclick="+"updateDetails("+val.id+",$(this))"+">Update</button></td> <td><button type="+"button"+" value="+val.id+"  class="+" del btn btn-info "+" onclick="+"deleteDetails("+val.id+",$(this))"+">Delete</button></td></tr>";
											
											
											$("#pageTab").attr("style","visibility:visible");
											
									
								});
								dataHtml +="</table>";
								$("#display").append(dataHtml);
								
							}
							
						
							


					},

					
				});
			
			
		});

}

/*$('.del').click(function(){
		var id=$(this).attr('data-id');
		console.log(id);
        var $to =$(this).closest('tr');
        console.log('TESTING');
        $.ajax({
            type: 'DELETE',
            url: "/Movies/?id="+id,
            success: function(){
                $to.remove();
            }
        });
    });*/



	function deleteDetails(id2,tblrow)
	{
	$(document).ready(function(){
		//var id2=$(this).attr('id');
		var reference = $(".del").val();
		var id = $(this).attr('id');
		console.log(id+"  "+reference+" "+id2);
		var addUrl = "/Movies/"+id2;
		$.ajax(
		{
			url: addUrl,
			type: 'DELETE',
			 
			//data: Movies,

			success : function (data)
			{
				     var $to =tblrow.closest('tr');
				
				console.log(data.id);
				console.log("Successfully ")
				
				alert("Movie deleted Successfully - New ID : " + id2);
				$to.remove();
			},
			error : function (data)
			{
				console.log("Error ");
			}
		});
	});
	}
function updateDetails(id,tblrow)
{
	$(document).ready(function(){
		//var id2=$(this).attr('id');
		
		var addUrl = "/Movies/?id="+id;
		$.ajax(
		{
			url: addUrl,
			type: 'GET',
			 
			//data: Movies,

			success : function (data)
			{
				$.each(data,function(key, val)
				{

					console.log("Movie Name:"+val.MovieName);
					$("#moviegetId").val(val.id);
					$("#moviegetYear").val(val.Year);
					$("#types").val(val.Type);
					$("#getdirector").val(val.Director);
					$("#moviegetName").val(val.MovieName);
					$("#tblId").val(tblrow);
					console.log(val);
				});

				
			},
			error : function (data)
			{
				console.log("Error ");
			}
		});
	});

}
function updateJson()
{
	var id=$("#moviegetId").val();
	var Year=$("#moviegetYear").val();
	//var row=$("#tblId").val();
	var Movies={
		 id:$("#moviegetId").val(),
		 Year:$("#moviegetYear").val(),
		 Type:$("#moviegetTypes").val(),
		 Director:$("#getdirector").val(),
		 MovieName:$("#moviegetName").val()
		}
	//console.log(row);
	var addUrl = "/Movies/"+id;
	$.ajax({
            url: addUrl,
            type: 'PUT', 
            dataType: "json",  
            data:Movies,
            //data: JSON.stringify(dataObject),
           // dataType: 'json',
            success: function(result) {
                alert("success");
                window.location.reload();
                //var $to =row.closest('tr');
                //$to.reload();
            }
        });
}
/*$(function() {
    $("#pageTab").pagination({
        items: totalPage,
        itemsOnPage: 10,
        cssStyle: 'light-theme'
    });
});*/
/*$(function() {
    $("#pageTab").pagination('selectPage', pageNum);
});*/


/*$(function() {
	console.log(totalPage);
    $("#pageTab").pagination('updateItems',totalPage);
});*/

/*$(function() {
    $("#pageTab").pagination('updateItemsOnPage', 10);
});

$(function() {
    $("#pageTab").pagination('prevPage');
});

$(function() {
    $("#pageTab").pagination('nextPage');
});
$(function() {
    $(selector).pagination('getCurrentPage');
    curPage=$("#pageTab .active ").text();
	console.log(curPage);
});
$(function() {
    $("#pageTab").pagination('enable');
});*/
//$('#pageTab').pagination('prevPage');

//$("#pageTab").pagination('nextPage');
/*$('#pageTab .next').click(function(){
	pageNum++;
	console.log(itemNum);
	//itemNum+=10;
	console.log("inside next"+itemNum)
	displayMovies(itemNum);
});	

$('.prev').click(function(){
	if(pageNum > 1){
		pageNum--;
		//itemNum-=10;
		displayMovies(itemNum);
	}
	});*/
