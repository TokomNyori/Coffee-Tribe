import { connectDB } from "@/helpers/dbConnect";
import { UserModel } from "@/models/UserModel";
import { NextResponse } from 'next/server'

connectDB()

export async function POST(req) {
    const { email, password } = await req.json();
    try {
        const user = await UserModel.create({ email, password });
        return NextResponse.json({
            message: "User created successfully",
            success: true,
            body: user,
        }, { status: 201 })
    } catch (error) {
        return NextResponse.json({
            message: "Failed to create user",
            success: false,
            error: error.message
        }, { status: 500 })
    }
}