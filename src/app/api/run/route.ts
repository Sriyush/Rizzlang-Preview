import { NextRequest, NextResponse } from "next/server";
import { spawn } from "child_process";
import path from "path";
import fs from "fs";
import os from "os";

export async function POST(req: NextRequest) {
  const { code } = await req.json();

  if (!code) {
    return NextResponse.json({ error: "No code provided" }, { status: 400 });
  }

  // Make a temp file with .rizz extension
  const tempFilePath = path.join(os.tmpdir(), `input_${Date.now()}.rizz`);
  fs.writeFileSync(tempFilePath, code);

  const binaryPath = path.join(process.cwd(), "rizz");

  return new Promise((resolve) => {
    const child = spawn(binaryPath, [tempFilePath], { cwd: process.cwd() });

    let output = "";
    let error = "";

    child.stdout.on("data", (data) => {
      output += data.toString();
    });

    child.stderr.on("data", (data) => {
      error += data.toString();
    });

    child.on("close", (codeExit) => {
      // Clean up temp file
      fs.unlinkSync(tempFilePath);

      if (codeExit !== 0 || error) {
        resolve(
          NextResponse.json(
            { error: error || "Compilation failed" },
            { status: 500 }
          )
        );
      } else {
        resolve(NextResponse.json({ output }));
      }
    });
  });
}
