import User from "../models/auth.js";

export const Register = async (req, res) => {
    try {
        const { name, email, phone } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(201).json({ msg: "User already exists" });
        }
        const newUser = new User({
            name: name,
            email: email,
            phone: phone,
        });
        await newUser.save();
        return res.status(200).json({ msg: "User created successfully", user: newUser });
    } catch (error) {
        return res.status(500).json({ msg: "Error creating user", error: error });
    }
}



export const Login = async (req, res) => {
    try {
        const { email, phone, } = req.body;
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(201).json({ msg: "This email is not registered with us" });
        }

        if (existingUser.phone === phone) {
            return res.status(201).json({ msg: "User login sucessfully" });
        }

    } catch (error) {
        return res.status(500).json({ msg: "Something went wrong!", error: error });
    }
}
export const DeleteUser = async (req, res) => {
    try {
        const { email } = req.body;

        const deletedUser = await User.findOneAndDelete({ email });

        return res.status(200).json({ msg: "User deleted sucessfully", user: deletedUser });

    } catch (error) {
        return res.status(500).json({ msg: "Something went wrong!", error: error });
    }
}
