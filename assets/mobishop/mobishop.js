document.addEventListener("DOMContentLoaded", function(event) {
const cartButtons = document.querySelectorAll('.cart-button');
cartButtons.forEach(button => {
button.addEventListener('click',cartClick);
});

function cartClick(){
let button =this;
button.classList.add('clicked');
}



}); 

function autoResize(id){
    var newheight;
    var newwidth;

    if(document.getElementById){
        newheight=document.getElementById(id).contentWindow.document.body.scrollHeight;
        newwidth=document.getElementById(id).contentWindow.document.body.scrollWidth;
    }
    document.getElementById(id).height=(newheight) + "px";
    document.getElementById(id).width=(newwidth) + "px"; 
	
}

function overlayon() {
  $("#overlay").show();
}
function overlayoff() {
  $("#overlay").hide();
}      
$(document).ready(function() {
  

$(document).on("click", '.singa4real-add-to-cart', function(event) { 
$("#overlaytext").html("Adding To Cart"); 	
overlayon();  
var code = $(this).closest(".cart-item").find(".product-code").html();
var quantity = $(this).closest(".cart-item").find(".product-quantity").val();
var rcurls = $("#rcurls").val();
$("#ifrm").attr("src", rcurls+"?action=add&code="+code+"&quantity="+quantity); 
$('#ifrm').on("load", function() {
overlayoff();
autoResize('ifrm');
$('#singa4realcartModal').modal('show');  
}); 
}); 

$(document).on("click", '.multi-image', function(event) {   
var cimg = $(this).attr("src");
var mimg = $(this).closest(".cart-item").find(".main-image");
mimg.attr("src", cimg);  
}); 

$(document).on("click", '.main-image', function(event) {  
var cimg = $(this).attr("src");
var mimg = $(".qv-main-image");
mimg.attr("src", cimg); 
$(".qv-product-code").html($(this).closest(".cart-item").find(".product-code").html());
$(".qv-product-name").html($(this).closest(".cart-item").find(".product-name").html()); 
$(".qv-product-price").html($(this).closest(".cart-item").find(".product-price").html());
$(".qv-product-desc").html($(this).closest(".cart-item").find(".product-desc").html()); 
$(".qv-product-desc").html($(this).closest(".cart-item").find(".product-desc").html()); 
$(".qv-off").html($(this).closest(".cart-item").find(".off").html());  
$(".qv-thumbnail").html($(this).closest(".cart-item").find(".thumbnail").html());   
$('#singa4realqvModal').modal('show');  
}); 

$(document).on("click", '.geninvoice', function(event) { 
$("#overlaytext").html("Generating Invoice"); 
overlayon(); 
$(".invoice-content").load("./mobishop/invoice.php?orderid="+$('.shoptid').val(),function(){
overlayoff(); 
$('#singa4realinvoiceModal').modal('show');   
}); 
}); 
$(document).on("click", '.trackorder', function(event) { 
$("#overlaytext").html("Tracking Your Order"); 
overlayon(); 
$(".track-content").load("./mobishop/track.php?orderid="+$('.trackid').val(),function(){
overlayoff(); 
$('#singa4realtrackModal').modal('show');   
}); 
}); 
  
});   