const {user} = require('./userModel');


// register a new user
const register = async (req, res) => {
    if (!req.body.username || !req.body.email || !req.body.password) {
        return res.status(400).json({ message: "All fields are required" });
    }
  const { username, email, password } = req.body;
  const existingUser = await User.findOne({email});
  if (existingUser) {
    throw new Error("Username or email already exists");
  }else {
  const user = new User({ username, email, password });
  await user.save();
  res.status(201).json({ message: "User registered successfully" });
  
} 
catch (error) {
    res.status(400).json({ message: error.message });
}
};


 