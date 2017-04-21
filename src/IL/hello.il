.assembly extern mscorlib {}
.assembly Hello {}

.method static void Main() cil managed
{
	.entrypoint
	ldstr "Hello, World!"
	call void [mscorlib]System.Console::Write(string)
	ret
}