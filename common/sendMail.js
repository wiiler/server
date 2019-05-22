"use strict";
const nodemailer = require("nodemailer");

module.exports = async function mail(params){
  let transporter = nodemailer.createTransport({
    host: "smtp.163.com",
    port: 465,
    secure: true,
    auth: {
	user: 'anbeixin365@163.com',
	pass: 'abx18518781479'
    }
  });
  const a = params.priceType;
  const b = params.priceNum;
  const c = params.connectName;
  const d = params.conectNumber;
  let info = await transporter.sendMail({
    from: '"anbeixin365@163.com', // sender address
    // to: "yingfei512@sina.com, wiiler@163.com", // list of receivers
    to: 'wiiler@163.com',
    subject: "服务需求", // Subject line
	html: 	`<b>服务类型：${a}</b><br>
			<b>银行月交易流水：${b}</b><br>
			<b>联系人：${c}</b><br>
			<b>联系电话：${d}</b><br>
	`
  });
  return info
}
