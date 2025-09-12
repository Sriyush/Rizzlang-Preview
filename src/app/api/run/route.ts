/* eslint-disable */

import fs from 'fs';
import path from 'path';
import ModuleFactory from '../../../wasm/rizz.js'; // relative to route.ts
import { NextRequest, NextResponse } from 'next/server.js';

let rizzModule: any = null;

async function loadRizz() {
  if (rizzModule) return rizzModule;

  const wasmPath = path.join(process.cwd(), 'src/wasm/rizz.wasm');
  const wasmBinary = fs.readFileSync(wasmPath);

  rizzModule = await ModuleFactory({ wasmBinary, noInitialRun: true });
  return rizzModule;
}

export async function POST(req: NextRequest) {
  const { code } = await req.json();
  if (!code) {
    return NextResponse.json({ error: "No code provided" }, { status: 400 });
  }

  try {
    const rizz = await loadRizz();
    const runCode = rizz.cwrap("runCodeC", "string", ["string"]);
    const output = runCode(code);
    return NextResponse.json({ output });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Execution failed" },
      { status: 500 }
    );
  }
}
