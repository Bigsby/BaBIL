.assembly extern mscorlib {}
.assembly Hello {}
.module Hello.exe

.method static void Start() cil managed
{
	.entrypoint
	ldstr "Hello, World!"
	call void [mscorlib]System.Console::Write(string)
	ret
}