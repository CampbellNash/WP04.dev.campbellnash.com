_spBodyOnLoadFunctionNames.push("ConfigureBrandingsuite");

function ConfigureBrandingsuite()
{
    // Replace the default logo with my WorldPay Logo with transparant background 
    document.getElementById('suiteBrandingIcon').src = "/_catalogs/masterpage/worldpaystripped/css/logoSml.png";
    document.getElementById('suiteBrandingIcon').alt = "WorldPay";
    document.getElementById('suiteBrandingIcon').title = 'WorldPay';

    // Setting the width to a little more than default, else the image may be cropped 
    document.getElementById('suiteBrandingIcon').style.width = "120px";
    document.getElementById('suiteBrandingIcon').style.height = "26px";

    // Set the background of the entire suitebarleft - We are doing this in the CSS
    // document.getElementById('suiteBarLeft').style.background = "#000000";

    //Now we need to change the URL of the a:link
    document.getElementById('suiteBrandingLink').href = "http://www.worldpay.com/";
    document.getElementById('suiteBrandingLink').title = "Go to WorldPay.com";

    }