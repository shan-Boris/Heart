
function helpInputNumberPhone(){
    const input = document.querySelector('#phone');
    const symbol = {
        4: ') ',
        7: '-',
        9: '-',
    };
    input.addEventListener('input', (e => {
        const lengthNumber = input.value?.match(/\d/g)?.length
        if (e?.data?.match(/\D/) && !e?.data?.match(/\+/) || lengthNumber > 11) {
            input.value = input.value.slice(0, -1);
        } else if (input.value?.length == 1 && e.data != null) {
            e.data == '9' ? input.value = '+7 (9' : input.value = '+7 ('
        } else if (symbol[lengthNumber] && e.data != null){
            input.value = input.value + symbol[lengthNumber];
        }
        
}))};

export default helpInputNumberPhone;