function decimalNumber (value , decimal_places_number) {
    let separate = (value).toString().split(".");
    let val = (separate[0]/1).toFixed(0).replace(".", ",");
    let price = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if(separate.length == 2 && decimal_places_number > 0){
        price += '.'+ separate[1].substr(0, decimal_places_number);
    }
    return price;
}
$(document).ready(function(){
    $.map($('[data-decimal-number]'),function(item){
        let config = {
            "decimalNumber": 100
        };
        if($(item).attr('data-decimal-number')){
            config = JSON.parse($(item).attr('data-decimal-number'));
        }
        let price = item.innerText;
        item.innerText = decimalNumber(price ,config.decimalNumber);
    })
});