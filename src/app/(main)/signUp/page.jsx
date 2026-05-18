import { Check } from '@gravity-ui/icons';
import { Button, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import React from 'react';



const SignUpPage = () => {
    return (
        <div className='container mx-auto py-20 space-y-5'>
            <div className='text-center'>
                <h2 className='text-3xl font-extrabold'>Create Account</h2>
                <p>Start your adventure with Wanderlust</p>
            </div>

            <div className='mx-auto border border-gray-400 shadow w-150 p-10 space-y-3'>
                <Form  className="flex flex-col gap-4 space-y-3" >

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
                        >
                        <Label>Email</Label>
                        <Input placeholder="Enter Your Email" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        >
                        <Label>Password</Label>
                        <Input placeholder="Create a password" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        >
                        <Label>Confirm Password</Label>
                        <Input placeholder="Confirm your password" />
                        <FieldError />

                        <div className='flex justify-between items-center text-[12px] mt-3'>
                            <h2>Remember Me</h2>
                            <h2>Forget Password ?</h2>
                        </div>
                    </TextField>

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
                    <Button className="w-full rounded-none">Continue with Google</Button>

                    <h2 className='text-center'>Already have an account? <span><Link className='text-red-500' href={'/signIn'}>Sign In</Link></span></h2>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;

