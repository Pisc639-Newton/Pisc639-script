$(".mee-icon-AddMedium").click();for(let i=0;i<30;i++){let win=window.open(`https://www.bing.com/search?q=${[...Array(5+Math.random()*5|0)].map(_=>"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"[crypto.getRandomValues(new Uint8Array(1))[0]%62]).join('')}`);setTimeout(()=>win.close(),5000);}
