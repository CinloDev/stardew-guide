import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    message: "Progress API ready. Connect Prisma/PostgreSQL when backend is enabled.",
  });
}

export async function POST(request: Request) {
  const payload = await request.json();
  return NextResponse.json({
    status: "accepted",
    received: payload,
    message: "Persist payload with Prisma in a future iteration.",
  });
}
