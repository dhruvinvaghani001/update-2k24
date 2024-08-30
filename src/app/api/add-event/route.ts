import connectDB from "@/db";
import Event from "@/models/event.model";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  try {
    await connectDB();

    const data = [
      { name: "demo3", eventType: "GROUP", maxMember: 4, minMember: 2 },
      { name: "demo4", eventType: "GROUP", minMember: 2, maxMember: 3 },
      {
        name: "demo1",
        eventType: "SOLO",
      },
      {
        name: "demo2",
        eventType: "SOLO",
      },
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
