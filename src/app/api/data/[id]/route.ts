import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "public/data.json");
const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const page = data.find((item: { id: string }) => item.id === params.id);

  if (!page) return NextResponse.json({ error: "Not Found" }, { status: 404 });

  return NextResponse.json(page);
}
