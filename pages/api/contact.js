import connectDB from "../../lib/db";
import contactDetail from "../../modal/contactDetail";

async function contact(req, res) {
  // if (req.method == "POST") {
  try {
    const data = await contactDetail.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      address: req.body.address,
      message: req.body.message,
    });
    res.json({ message: "Data saved successfully" });
  } catch (e) {
    console.log(e);
    res.status(400).json({
      msg: "Something went wrong",
    });
  }
}

export default connectDB(contact);