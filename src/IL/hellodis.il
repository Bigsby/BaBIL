
//  Microsoft (R) .NET Framework IL Disassembler.  Version 4.6.1055.0
//  Copyright (c) Microsoft Corporation.  All rights reserved.



// Metadata version: v4.0.30319
.assembly extern mscorlib
{
  .ver 0:0:0:0
}
.assembly Hello
{
  .ver 0:0:0:0
}
.module Hello.exe
// MVID: {1CF559D8-5978-41B8-8B66-6D70A7E41654}
.imagebase 0x00400000
.file alignment 0x00000200
.stackreserve 0x00100000
.subsystem 0x0003       // WINDOWS_CUI
.corflags 0x00000001    //  ILONLY
// Image base: 0x03170000


// ================== GLOBAL METHODS =========================

.method privatescope static void  Start$PST06000001() cil managed
{
  .entrypoint
  // Code size       11 (0xb)
  .maxstack  8
  IL_0000:  ldstr      "Hello, World!"
  IL_0005:  call       void [mscorlib]System.Console::Write(string)
  IL_000a:  ret
} // end of global method Start


// =============================================================

// *********** DISASSEMBLY COMPLETE ***********************
