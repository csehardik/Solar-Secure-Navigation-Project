// using JQUERY Code

var navstatus = 0; //here 0 means hidden navbar and 1 means shown navbar

function openNav()
{
    if(!navstatus)
    {
        $('.maindiv').css('width','100%');
        $('li').css('display','block');
        navstatus=1;
    }
    else
    {
        $('.maindiv').css('width','0');
        $('li').css('display','none');
        navstatus=0;
    }
}