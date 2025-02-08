function getTime(){
    axios({
        url:'http://43.143.169.168:9090/time/now',
        method:'get',
    }).then(res=>{
        console.log(res);

    }).catch(error=>{
        console.log(error);
    });
}
getTime();
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
    }).catch(error=>{
        console.log(error);
    });
}
function getUserList(){
    axios({
        url:'http://43.143.169.168:9090/user/all',
        method:'get',
    }).then(res=>{
        console.log('用户信息列表报文',res);

    }).catch(error=>{
        console.log(error);
    });
}
