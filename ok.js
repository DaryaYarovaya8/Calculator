send.addEventListener("click",fnc);
function fnc ()
 {
    let val_postizd=postizd.value;
    let val_peremizd=peremizd.value;
    let val_pribil=pribil.value;
    let val_price=price.value;
    let val_result;

    val_result=(val_postizd+val_pribil)/(val_price-val_peremizd);

    result.innerHTML=val_result
}
