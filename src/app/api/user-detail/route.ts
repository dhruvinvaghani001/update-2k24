import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/authOptions";
import connectDB from "@/db";
import UserDetail from "@/models/userdetails.model";
import mongoose from "mongoose";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const session = await getServerSession(authOptions);
    if (!session?.user.id && !session?.user.email) {
      return NextResponse.json(
        { message: "Unauthenticated User" },
        { status: 401 }
      );
    }
    connectDB();

    const existingDetails = await UserDetail.findOne({
      userId: new mongoose.Types.ObjectId(session?.user?.id),
    });

    if (existingDetails) {
      return NextResponse.json(
        { message: "Alredy submitted Details" },
        { status: 500 }
      );
    }

    const details = await UserDetail.create({
      ...reqBody,
      userId: session.user.id,
    });

    if (!details) {
      return NextResponse.json(
        { message: "Something went Wrong" },
        { status: 500 }
      );
    }
    return NextResponse.json({ message: "Details saved" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal server Error" },
      { status: 500 }
    );
  }
}
