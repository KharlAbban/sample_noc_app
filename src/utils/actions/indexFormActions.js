import { redirect } from "react-router-dom";
import {client} from "../../client";
import bcrypt from "bcryptjs-react";

export async function registerAction({request}) {
    try {
        const formData = await request.formData();
        // Hash password
        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(formData.get("password"), salt);
        const doc = {
            _id: formData.get("username"),
            _type: "staff",
            email: formData.get("email"),
            userName: formData.get("username"),
            password: hashedPassword,
        }
        // creates a new staff if not exists, but silently fails if one exists already
        // Check if document with username exists. If not, then create it
        const docExists = await client.getDocument(doc.userName);
        if (docExists != null) {
            if (docExists.email !== doc.email) {
                return {
                    userNameMsg: "Username already exists"
                }
            } else {
                return {
                    emailMsg: "Email already exists",
                    userNameMsg: "Username already exists",
                }
            }
        } else {
            const newStaff = await client.createIfNotExists(doc);
            return redirect("/login");
        }
    } catch (err) {
        if (err.message.includes(`Malformed document ID:`)) {
            return {
                userNameMsg: "Username must not contain @ or . characters",
            }
        } else if (err.message.includes(`ERR_INTERNET`)) {
            return {
                message: "Check your connection and try again!",
            }
        }
        return {
            message: "Check your connection and try again!",
        }
    }
  }

export async function loginAction({request}) {
    try {
        const formData = await request.formData();
        const username = formData.get("username");
        const pwd = formData.get("password");
        const userExists = await client.getDocument(username);

        // Return error if user does not exist
        if (userExists == null) return {userNameMsg: "No user account found with this name!"}
        // If user exists, check if usernames match
        if (userExists.userName !== username) return {userNameMsg: "No user with this name exists!"}
        // Also check if password matches
        const passwordMatches = await bcrypt.compare(pwd, userExists.password);
        if (!passwordMatches) return {pwdMsg: "Incorrect password!"}
        localStorage.setItem("user", JSON.stringify(username));
        return redirect("/home");
    } catch (err) {
        if (err.message.includes(`Malformed document ID:`)) {
            return {
                userNameMsg: "Username must not contain @ or . characters",
            }
        }
        console.log(err.message);
        return {
            message: "Unknown error! Check your connection and try again",
        }
    }
}

export async function forgotPasswordAction({request}) {
    const formData = await request.formData();
    const forgotInfo = {
        email: formData.get("email"),
        username: formData.get("username"),
    }
    console.log(forgotInfo);
    return;
}