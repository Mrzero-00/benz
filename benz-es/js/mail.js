const user_name = document.getElementById("name");
const tellnumber1 = document.getElementById("tell_1");
const tellnumber2 = document.getElementById("tell_2");
const tellnumber3 = document.getElementById("tell_3");
const tell_hours1 = document.getElementById("tell_hour1");
const tell_hours2 = document.getElementById("tell_hour2");
const tell_hours3 = document.getElementById("tell_hour3");
const tell_hours4 = document.getElementById("tell_hour4");
const model = document.getElementById("car_model");
const wheris = document.getElementById("where");
const pays = document.getElementById("pay");
const comments= document.getElementById("comment");
const sells=document.getElementById("sells");
const send_btn= document.getElementById("btn");
var agree = document.getElementById("agree");

const mails = {
    name:"",
    tellnum:"",
    tell_hour:"",
    Car_model:"",
    where:"",
    pay:"",
    sell:"",
    comment:"",

}

var checker_name = false;
var checker_tellnum = false;
var checker_model = false;
var checker_tellhour = false;
var checker_where = false;

function init(){
    user_name.addEventListener("change",(e)=>{
        if(e.target.value === ""){
            checker_name = false;
        }else{
            mails.name = e.target.value;
            checker_name = true;
        }
    });
    tellnumber1.addEventListener("change",(e)=>{
        if(e.target.value === ""){
            checker_tellnum = false;
        }else{
            mails.tellnum=`${e.target.value}-`;
            checker_tellnum = true;
        }
    });
    tellnumber2.addEventListener("change",(e)=>{
        if(e.target.value === ""){
            checker_tellnum = false;
        }else{
            mails.tellnum+=`${e.target.value}-`;
            checker_tellnum = true;
        }
    });
    tellnumber3.addEventListener("change",(e)=>{
        if(e.target.value === ""){
            checker_tellnum = false;
        }else{
            mails.tellnum+=`${e.target.value}`;
            checker_tellnum = true;
        }
    });

    tell_hours1.addEventListener("change",(e)=>{
        if(e.target.value === ""){
            checker_tellhour = false;
        }else{
            mails.tell_hour=`${e.target.value}:`;
            checker_tellhour = true;
        }
    });


    tell_hours2.addEventListener("change",(e)=>{
        if(e.target.value === ""){
            checker_tellhour = false;
        }else{
            mails.tell_hour+=`${e.target.value} ~ `;
            checker_tellhour = true;
        }
    });
    

    tell_hours3.addEventListener("change",(e)=>{
        if(e.target.value === ""){
            checker_tellhour = false;
        }else{
            mails.tell_hour+=`${e.target.value}:`;
            checker_tellhour = true;
        }  
    });


    tell_hours4.addEventListener("change",(e)=>{
        if(e.target.value === ""){
            checker_tellhour = false;
        }else{
            mails.tell_hour+=`${e.target.value}`;
            checker_tellhour = true;
        }
    });

    



    pays.addEventListener("change",(e)=>{
        mails.pay=e.target.value;
    });
    sells.addEventListener("change",(e)=>{
        mails.sell=e.target.value;
    });
    model.addEventListener("change",(e)=>{
        if(e.target.value === ""){
            checker_model = false;
        }else{
            mails.Car_model=e.target.value;
            checker_model = true;
        }
    });
    wheris.addEventListener("change",(e)=>{
        if(e.target.value === ""){
            checker_where = false;
        }else{
            mails.where=e.target.value;
            checker_where = true;
        }
    });
    comments.addEventListener("change",(e)=>{
        mails.comment=e.target.value;
    });


    
    
    send_btn.addEventListener("click",()=>{
        if(checker_name === false){
            alert( '이름을 입력해주세요.' );
        }else if(checker_tellnum ===false){
            alert( '전화번호를 입력해주세요.' );
        }else if(checker_model === false){
            alert( '차종을 선택해주세요.' );
        }else if(checker_tellhour ===false){
            alert( '통화가능 시간을 입력해주세요.' );
        }else if(checker_where ===false){
            alert( '지역을 입력해주세요.' );
        }else if(agree.checked===false){
            alert( '개인정보 수집의 동의해주세요.' );
        }else if(checker_name && checker_model && checker_tellnum && checker_tellhour && checker_where && agree.checked=== true){
            emailjs.send("chamj", "minjaecha", mails);
            alert('견적 신청이 완료되었습니다.');
        }
    });

}

init();
