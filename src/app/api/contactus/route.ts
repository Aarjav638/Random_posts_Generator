// api for contact us page for saving only the contact datd
import { NextRequest,NextResponse } from "next/server";
import prisma from "@/lib/db";
export async function POST(req: NextRequest)  {
    try {
       const body = await req.json();
        const { name, email, phone, message } = body;
        if (!name || !email || !phone || !message) {
          return NextResponse.json({ message: "All fields are required" }, { status: 400 });
        }
        if (!name || !email || !phone || !message) {
          return NextResponse.json({ message: "All fields are required" }, { status: 400 });
        }
        // Save data to database
        await prisma.contact.create({
          data: {
            name,
            email,
            phone,
            message,
          },
        });
        return NextResponse.json({ message: "Success" }, { status: 200 });

  }
  catch(error){
    console.log(error);
    return NextResponse.json({status:"failed", message: "Internal server error" }, { status: 500 });
  }
  
}



