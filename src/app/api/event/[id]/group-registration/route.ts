import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const reqBody = await request.json();
    const session = await getServerSession(authOptions);
    if (!session?.user.id && !session?.user.email) {
      return NextResponse.json(
        { message: "Unautheticated User" },
        { status: 401 }
      );
    }
    const membersId = reqBody.emails.map((item: any) => item.value);
    membersId.push(session?.user.id.toString());

    console.log(membersId);

    return NextResponse.json({ message: "done" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
