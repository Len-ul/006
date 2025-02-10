function getExactTime(time){
    let date=new Date(time);
    let year=date.getFullYear()+'-';
    let month=(date.getMonth()+1<10?'0'+(date.getMonth()+1):date.getMonth()+1)+'-';
    let dates=date.getDate()+' ';
    let hour=date.getHours()+':';
    let min=date.getMinutes()+':';
    let second=date.getSeconds();
    return year+month+dates+hour+min+second;
}
function getTime(){
    axios({
        url:'https://f.m.suning.com/api/ct.do',
        method:'get',
    }).then(res=>{
        console.log(res);
        document.getElementById('time').innerText=getExactTime(res.data.currentTime);
    }).catch(error=>{
        console.log(error);
    });
}
setInterval(getTime,1000);
function register(){
    const username=document.getElementById('username').value;
    const password=document.getElementById('password').value;
    axios({
        url:'http://43.143.169.168:9090/user/register',
        method:'post',
        data:{
            username,
            password
        }
    }).then(res=>{
        console.log('注册报文',res);
        alert("注册成功！");
    }).catch(error=>{
        console.log(error);
        alert("注册失败！");
    });
}
function getUserList(){
    axios({
        url:'http://43.143.169.168:9090/user/all',
        method:'get',
    }).then(res=>{
        console.log('用户信息列表报文',res);
        document.getElementById('userslist').innerText = res.data;
    }).catch(error=>{
        console.log(error);
    });
}
