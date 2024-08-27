import connectDB from "@/db";
import Event from "@/models/event.model";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  try {
    await connectDB();

    const data = [
      { name: "avishkar", eventType: "GROUP" },
      { name: "ddemo", eventType: "GROUP" },
    ];

    const result = await Event.insertMany(data);
    console.log("EVENT ADDED");
    return NextResponse.json({ message: "record added!" });
  } catch (error: any) {
    return NextResponse.json({
      message: error.message,
    });
  }
}
