'use client'
import { authClient } from '@/lib/auth-client';
import { Check } from '@gravity-ui/icons';
import { Button, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';



const SignUpPage = () => {
    const [isShowPass, setIsShowPass] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());
        console.log(user);

        const { data, error } = await authClient.signUp.email({
            name: user.name,
            image: user.image,
            email: user.email,
            password: user.password,
            callbackURL: "/signIn",
        });

        console.log("sign up response", data, error);

        if (error) {
            toast.error("Sign up failed " + error.message);
        }
        else if (data) {
            toast.success("Sign up successfull! Verify your Email")
        }
    };


    const handleSigninGoogle = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/"
        })
    }


    return (
        <div className='container mx-auto py-20 space-y-5'>
            <div className='text-center'>
                <h2 className='text-3xl font-extrabold'>Create Account</h2>
                <p>Start your advent</p>
            </div>

            <div className='mx-auto border border-gray-400 rounded-2xl shadow w-150 p-10 space-y-3'>
                <Form onSubmit={onSubmit} className="flex flex-col gap-4 space-y-3" >

                    <TextField
                        isRequired
                        name="name"
                        type="text">
                        <Label>Full Name</Label>
                        <Input placeholder="Enter Your Full Name" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name="image"
                        type="text">
                        <Label>Image URL</Label>
                        <Input placeholder="Enter Your Image URL" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;}}>
                        <Label>Email</Label>
                        <Input placeholder="Enter Your Email" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8} 
                        className="relative"
                        name="password"
                        type={isShowPass?"text":"password"}
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;}}>
                        <Label>Password</Label>
                        <Input placeholder="Create a password" />
                        <FieldError />
                        <p className='absolute top-8 right-3 text-xl' onClick={()=>setIsShowPass(!isShowPass)}>{isShowPass? <FaEyeSlash/>:<FaEye/>}</p>
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8} 
                        className="relative"
                        name="password"
                        type={isShowPass ? "text" : "password"}
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;}}>
                        <Label>Confirm Password</Label>
                        <Input placeholder="Confirm your password" />
                        <FieldError />
                        <p className='absolute top-8 right-3 text-xl' onClick={() => setIsShowPass(!isShowPass)}>{isShowPass ? <FaEyeSlash /> : <FaEye />}</p>
                    </TextField>

                    <div className='flex justify-between items-center text-[12px]'>
                        <h2>Remember Me</h2>
                        <h2>Forget Password ?</h2>
                    </div>

                    <div className="flex gap-2">
                        <Button className="w-full rounded-none" type='submit'>
                            <Check />
                            Sign Up
                        </Button>
                    </div>

                    <div className='text-center'>
                        Or continue with
                    </div>
                </Form>

                <div className='flex justify-center flex-col space-y-3'>
                    <Button onClick={handleSigninGoogle} className="w-full rounded-none bg-white border border-gray-300 hover:bg-cyan-200 text-gray-900"><FcGoogle /> Continue with Google</Button>

                    <h2 className='text-center'>Already have an account? <span><Link className='text-red-500' href={'/signIn'}>Sign In</Link></span></h2>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;

