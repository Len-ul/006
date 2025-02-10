function getTime(){
    axios({
        url:'https://f.m.suning.com/api/ct.do',
        method:'get',
    }).then(res=>{
        console.log(res.data);
        document.getElementById('time').innerText = res.data;
    }).catch(error=>{
        console.log(error);
    });
}
setInterval(getTime,1000);
function register(){
    const username=document.getElementById('username').value;
    const password=document.getElementById('password').value;
    axios({
        url:'',
        method:'post',
        data:{
            username,
            password
        }
    }).then(res=>{
        console.log('注册报文',res);
    }).catch(error=>{
        console.log(error);
    });
}
function getUserList(){
    axios({
        url:'',
        method:'get',
    }).then(res=>{
        console.log('用户信息列表报文',res);
        document.getElementById('userslist').innerText = res.data;
    }).catch(error=>{
        console.log(error);
    });
}
