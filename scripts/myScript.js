let number = 1000000;
const eggs = ["b4944c6ff08dc6f43da2e9c824669b7d927dd1fa976fadc7b456881f51bf5ccc",
            "c75cb66ae28d8ebc6eded002c28a8ba0d06d3a78c6b5cbf9b2ade051f0775ac4",
            "db55da3fc3098e9c42311c6013304ff36b19ef73d12ea932054b5ad51df4f49d",
            "ae3f53ee778c4c71111a5a1e2931d1aad8bd06dbba8baddfc73974484ab124e7",
            "ea2db9f92dc6cc9f4a7b4baefdaddd790abf882d0c2d8c4a44f8a5c97ca4d43a",
            "5db1fee4b5703808c48078a76768b155b421b210c0761cd6a5d223f4d99f1eaa"];
async function hashThis(message) {
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
}
function rnd(min, max) {
    let a = Math.floor(Math.random() * (max - min) ) + min;
    if(a === 7){
        a = a - 1
    }
    return a;
}
function updateMoney() {
    document.getElementById("money").innerHTML = number;
}
async function playDice(){
    const test = await hashThis(document.getElementById("frm1").elements[0].value);
    let easter = false;
    for (let i = 0; i < eggs.length; i++){
        if(eggs[i] === test) {
            easter = true;
        }
    }
    const bruh = parseInt(document.getElementById("frm1").elements[0].value, 10);
    if (isNaN(bruh)){
        document.getElementById("diceResult").innerHTML = "لطفا مقدار پولی که نیخواهید شرط ببندید را وارد کنید";
        return;
    }
    if(bruh < 0){
        document.getElementById("diceResult").innerHTML = "داداش خیلی باهوشی ولی نمیشه";
        return;
    }
    number -= bruh;
    let shadmr = rnd(1, 7);
    let player = rnd(1, 7);
    if(player > shadmr){
        shadmr = [player, player = shadmr][0];
    }
    if(player !== shadmr && number > 0 && rnd(1, 6) === 1){
        number += bruh * 2;
        shadmr = [player, player = shadmr][0];
    }
    let result = "شادمهر: " + shadmr.toString(10) + "<br>" + "بازیکن: " + player.toString(10);
    if(easter) {
        result += "<br>" + ";)";
    }
    document.getElementById("diceResult").innerHTML = result;
    updateMoney();
}
