import { NextResponse } from "next/server";

interface UserRouteProps {
  params: Promise<{
    username: string;
  }>;
}

export async function GET(
  request: Request,
  { params }: UserRouteProps
) {
  const { username } = await params;

  return NextResponse.json({
    message: `Users Registred Successfully`,
    username,
  });
}