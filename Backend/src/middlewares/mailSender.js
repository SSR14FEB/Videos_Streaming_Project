import nodemailer from "nodemailer";
import bcrypt from "bcrypt";
import { User } from "../models/user.models.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";

const mailSender = asyncHandler(async (req, res) => {
  try {
    // creat token
    // const { email, password, userId } = req.body

    console.log("i am here");
    console.log("userId", req.user._id);
    
    const hashedToken = await bcrypt.hash(req.user._id.toString(), 10);
    await console.log("hashed token", hashedToken);

    const user = await User.findByIdAndUpdate(
      req.user._id,
      {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      },
      { new: true }
    );

    console.log("user", user);
    // Looking to send emails in production? Check out our Email API/SMTP product!
    var transport = await nodemailer.createTransport({
      service:"gmail",
      port: 465,
      secure: true,
      auth: {
        user: "streameryourvideos01@gmail.com",
        pass: "hdrcilvqcihcplqv",
      },
    });

    let mailOption = {
      from: "streameryourvideos01@gmail.com",
      to: user.email,
      subject: "verify your email",
      html: `<body>
      <p>click <a href="${process.env.DEVLOPENT_SERVER_DOMAIN_NAME}/users/verifyToken?token=${hashedToken}">here</a> to verify your email</p>
    </body>`,
    };

    console.log(mailOption.html);

    const mailInfo = await transport.sendMail(mailOption);
    console.log(mailInfo);
  } catch (error) {
    console.log("error while sending vaildation mail", error);
  }
});

export { mailSender };
