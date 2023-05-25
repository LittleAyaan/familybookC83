menu_list_array = ["Veg Margherita Pizza, chicken pizza, indian style pizza"]; 

function getmenu()
{
    var htmldata="";
    for(var i=0; i<menu_list_array.length; i++)
    {
        htmldata=htmldata+ menu_list_array[i] + '<br>'
    }
    //Give the appropriate id name as display_menu 
    document.getElementById("pizza_name").innerHTML = htmldata;
}   pizza_list_array.push() (item);

function add_suggestion(){
    //Give the appropriate id name as add_item
	var item = document.getElementById("pizza_name").value;
    //Use the push() function to push the item into menu_list_array
    menu_list_array.push()     (item);
}

