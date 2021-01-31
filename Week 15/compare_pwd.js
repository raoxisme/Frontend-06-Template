var bcrypt = require('bcryptjs')
var zxcvbn = require('zxcvbn');
var inquirer = require("inquirer");

var pwd_encrypt, pwd = null;

var that = this;

inquirer
    .prompt([
        {
            type: "input",
            name: "username",
            message: "input login user name please",
            validate: function (value) {
                if (value) {
                    return true;ab
                }
                return "name is required";
            }
        },
        {
            type: "input",
            name: "password",
            message: "input password of login user please",
            validate: function (value) {
                var pwd_strong_level = zxcvbn(value).score;
                if ( pwd_strong_level >=1 ) {
                    // 0 # too guessable: risky password. (guesses < 10^3)
                    // 1 # very guessable: protection from throttled online attacks. (guesses < 10^6)
                    // 2 # somewhat guessable: protection from unthrottled online attacks. (guesses < 10^8)
                    // 3 # safely unguessable: moderate protection from offline slow-hash scenario. (guesses < 10^10)
                    // 4 # very unguessable: strong protection from offline slow-hash scenario. (guesses >= 10^10)

                    // 生成随机字符串
                    var salt = bcrypt.genSaltSync(10)
                    // 对明文加密
                    that.pwd_encrypt = bcrypt.hashSync( value, salt)
                    return true;
                }
                return "password is too weak";
            }
        },
        {
            type: "input",
            name: "password_repeat",
            message: "repeat password of login user please",
            validate: function (value) {
                if ( value ) {
                    that.pwd = value
                    return true;
                }
                return "repeat input password:";
            }
        }
    ])
    .then(answers => {
        // 验证比对,返回布尔值表示验证结果 true表示一致，false表示不一致
        var isOk = bcrypt.compareSync( that.pwd , that.pwd_encrypt )

        if (isOk) {
            console.log( 'two passwords are identical') 
        }else{
            console.log( 'two passwords are NOT identical') 
        };
    });