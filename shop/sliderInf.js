$(document).ready(function () {
    $.getJSON("https://spreadsheets.google.com/feeds/list/1tMjka3KTcQhhX-FAO6chuGQtRbmdmfTE0_Z0zQhXH3I/od6/public/values?alt=json", function (data) {
    data = data['feed']['entry'];    
    console.log(data);
    showSales(data);
    });

    function showSales(data) {
       var out = '';
       
        for (var index = 0; index < data.length; index++) {
            if (data[index]['gsx$show']['$t']!=0) {
                if (data[index]['gsx$nomber']['$t']==0) {
                    out += `<div class="carousel-item active">`;
                    out += `<img class="d-block w-100" src="${data[index]['gsx$url']['$t']}" alt="${data[index]['gsx$name']['$t']}">`;
                    out += `</div>`;
                } else {
                    out += `<div class="carousel-item">`;
                    out += `<img class="d-block w-100" src="${data[index]['gsx$url']['$t']}" alt="${data[index]['gsx$name']['$t']}">`;
                    out += `</div>`;
                }


            }
          
            
        } 

       $('.carousel-inner').html(out);
    }
})

