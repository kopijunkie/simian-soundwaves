/* Functions to change stylesheets and stylesheet changer link name */

function styleSwitcher(title)
{
    var cookie = readCookie("style");
    
    if (title == null && cookie == null)
    {
        title = 'rainy';    /* Default Style */
	}
    
    if (title != null && cookie != title)
    {
        cookie = title;
    }
    
    setActiveStyleSheet(cookie);
    
    return false;
}

function setActiveStyleSheet(title)
{
    document.getElementById('styler').href = title + '_style.css';
    
    var i, a, main;
    
    if (title == 'rainy')
    {
        document.getElementById('style-changer').innerHTML = 'Hello Sunshine';
        document.getElementById('style-changer').onclick = new Function("setActiveStyleSheet('sunny')");
    }
    else
    {
        document.getElementById('style-changer').innerHTML = 'November Rain';
        document.getElementById('style-changer').onclick = new Function("setActiveStyleSheet('rainy')");
    }
    
    createCookie("style", title, 365); 
    
    return title;
}


/* Functions to create and read cookie */

function createCookie(style,value,days)
{
    if (days)
    {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
	}
    else
    {
        var expires = "";
    }
    document.cookie = style+"="+value+expires+"; path=/";
}

function readCookie(style)
{
    var nameEQ = style + "=";
    var ca = document.cookie.split(';');
    
    for(var i=0; i < ca.length; i++)
    {
        var c = ca[i];
        while (c.charAt(0)==' ')
        {
            c = c.substring(1,c.length);
        }
        if (c.indexOf(nameEQ) == 0)
        {
            return c.substring(nameEQ.length,c.length);
        }
    }
    
    return null;
}