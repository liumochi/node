/**
 * Created by Administrator on 2017/2/16.
 */
var mysql=require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'blog8'
});
connection.connect();

exports.login= function (req,res,next) {
    res.render('login');
}
exports.dologin=function(req,res,next){
    var name=req.body.username;
    var pass=req.body.pass;
    var sql="select * from t_users where ACCOUNT=? and PASSWORD=?";
   // var sql="select * from t_users";
    connection.query(sql,[name,pass], function (error, results, fields) {

        if (error) {
            throw error
        }else{
         console.log(results);

            res.render('index',{'data':results});
        }
       // console.log('The solution is: ', results[0].solution);
        connection.end();
    });
    //res.send(name+ "|" +pass);


}
exports.xxlogin=function(req,res,next){
    var name=req.body.name;
    if(name=='liu'){
        res.send('success');
        //console.log('789');
    }

};