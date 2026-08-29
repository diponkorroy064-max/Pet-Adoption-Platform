'use client';
import { authClient } from '@/lib/auth-client';
import { Check } from '@gravity-ui/icons';
import { Button, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FaEye, FaUser, FaUserShield } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';

const SignUpPage = () => {
    const [isShowPass, setIsShowPass] = useState(false);
    const [isShowConfirmPass, setIsShowConfirmPass] = useState(false);
    const [selectedRole, setSelectedRole] = useState('user');
    const [isLoading, setIsLoading] = useState(false);
    const [passwordValue, setPasswordValue] = useState('');

    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());
        console.log("user in sign up page form", user);

        if (user.password !== user.confirmPassword) {
            toast.error("Passwords do not match!");
            setIsLoading(false);
            return;
        }

        const { data, error } = await authClient.signUp.email({
            name: user.name,
            image: user.image,
            email: user.email,
            password: user.password,
            role: user.role,
        });

        setIsLoading(false);

        if (error) {
            toast.error("Sign up failed: " + error.message);
        } else if (data) {
            toast.success("Sign up successful! Please verify your email.");
            router.push('/');
        }
    };

    const handleSigninGoogle = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/"
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50/40 via-white to-pink-50/30 py-12 sm:py-20 px-4 flex items-center justify-center">
            <div className="w-full max-w-lg bg-white rounded-3xl border border-gray-100 shadow-xl shadow-pink-500/5 p-6 sm:p-10 space-y-6 transition-all duration-300">

                {/* Header Section */}
                <div className="text-center space-y-2">
                    <h2 className="text-3xl sm:text-4xl font-black text-[#f58f95] tracking-tight">
                        Create Account
                    </h2>
                    <p className="text-gray-500 text-sm sm:text-base font-medium">
                        Start your adventure with <span className="text-gray-800 font-semibold">Pet Haven</span>
                    </p>
                </div>

                {/* Form Container */}
                <Form onSubmit={onSubmit} className="flex flex-col gap-4">

                    {/* Hidden input to pass selectedRole into formData */}
                    <input type="hidden" name="role" value={selectedRole} />

                    {/* Role Selection Tabs */}
                    <div className="space-y-1.5">
                        <Label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                            I am joining as a
                        </Label>
                        <div className="grid grid-cols-2 gap-3 p-1.5 bg-gray-100/80 rounded-2xl">
                            <button
                                type="button"
                                onClick={() => setSelectedRole('user')}
                                className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-200 ${selectedRole === 'user'
                                    ? 'bg-white text-[#f58f95] shadow-sm border border-gray-100'
                                    : 'text-gray-500 hover:text-gray-800'
                                    }`}
                            >
                                <FaUser className="text-xs" />
                                <span>Pet Lover (User)</span>
                            </button>

                            <button
                                type="button"
                                onClick={() => setSelectedRole('owner')}
                                className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-200 ${selectedRole === 'owner'
                                    ? 'bg-white text-[#f58f95] shadow-sm border border-gray-100'
                                    : 'text-gray-500 hover:text-gray-800'
                                    }`}
                            >
                                <FaUserShield className="text-xs" />
                                <span>Pet Owner</span>
                            </button>
                        </div>
                    </div>

                    {/* Full Name */}
                    <TextField isRequired name="name" type="text" className="flex flex-col gap-1">
                        <Label className="text-xs font-bold text-gray-700">Full Name</Label>
                        <Input
                            placeholder="Enter Your Full Name"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#f58f95] focus:ring-2 focus:ring-[#f58f95]/20 outline-none transition duration-200 text-sm"
                        />
                        <FieldError className="text-xs text-rose-500" />
                    </TextField>

                    {/* Image URL */}
                    <TextField isRequired name="image" type="text" className="flex flex-col gap-1">
                        <Label className="text-xs font-bold text-gray-700">Avatar Image URL</Label>
                        <Input
                            placeholder="https://example.com/avatar.jpg"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#f58f95] focus:ring-2 focus:ring-[#f58f95]/20 outline-none transition duration-200 text-sm"
                        />
                        <FieldError className="text-xs text-rose-500" />
                    </TextField>

                    {/* Email */}
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        className="flex flex-col gap-1"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label className="text-xs font-bold text-gray-700">Email Address</Label>
                        <Input
                            placeholder="name@example.com"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#f58f95] focus:ring-2 focus:ring-[#f58f95]/20 outline-none transition duration-200 text-sm"
                        />
                        <FieldError className="text-xs text-rose-500" />
                    </TextField>

                    {/* Password */}
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type={isShowPass ? "text" : "password"}
                        className="flex flex-col gap-1 relative"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[a-z]/.test(value)) {
                                return "Password must contain at least one lowercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}>


                        <Label className="text-xs font-bold text-gray-700">Password</Label>
                        <div className="relative">
                            <Input
                                placeholder="Create a strong password"
                                value={passwordValue}
                                onChange={(e) => setPasswordValue(e.target.value)} // ✅ Safe state update on user input
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#f58f95] focus:ring-2 focus:ring-[#f58f95]/20 outline-none transition duration-200 text-sm pr-10"
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                                onClick={() => setIsShowPass(!isShowPass)}
                            >
                                {isShowPass ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                            </button>
                        </div>
                        <FieldError className="text-xs text-rose-500" />
                    </TextField>

                    {/* Confirm Password */}
                    <TextField
                        isRequired
                        name="confirmPassword"
                        type={isShowConfirmPass ? "text" : "password"}
                        className="flex flex-col gap-1 relative"
                        validate={(value) => {
                            if (value !== passwordValue) {
                                return "Passwords do not match";
                            }
                            return null;
                        }}
                    >
                        <Label className="text-xs font-bold text-gray-700">Confirm Password</Label>
                        <div className="relative">
                            <Input
                                placeholder="Re-enter your password"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#f58f95] focus:ring-2 focus:ring-[#f58f95]/20 outline-none transition duration-200 text-sm pr-10"
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                                onClick={() => setIsShowConfirmPass(!isShowConfirmPass)}
                            >
                                {isShowConfirmPass ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                            </button>
                        </div>
                        <FieldError className="text-xs text-rose-500" />
                    </TextField>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        isDisabled={isLoading}
                        className="w-full mt-2 py-3 rounded-xl bg-[#f58f95] hover:bg-[#e07b81] text-white font-bold transition duration-200 flex items-center justify-center gap-2 shadow-md shadow-[#f58f95]/20 cursor-pointer"
                    >
                        <Check />
                        <span>{isLoading ? "Creating Account..." : "Create Account"}</span>
                    </Button>

                    {/* Divider */}
                    <div className="relative my-2 flex items-center justify-center">
                        <div className="w-full border-t border-gray-200" />
                        <span className="absolute bg-white px-3 text-xs text-gray-400 font-medium uppercase tracking-wider">
                            Or continue with
                        </span>
                    </div>
                </Form>

                {/* Social Login & Sign In Link */}
                <div className="flex flex-col space-y-4">
                    <Button
                        onClick={handleSigninGoogle}
                        className="w-full py-3 rounded-xl bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold transition duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                    >
                        <FcGoogle className="text-xl" />
                        <span>Continue with Google</span>
                    </Button>

                    <p className="text-center text-sm text-gray-500">
                        Already have an account?{' '}
                        <Link href="/signIn" className="font-bold text-[#f58f95] hover:underline">
                            Sign In
                        </Link>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default SignUpPage;
