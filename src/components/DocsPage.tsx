import React from 'react';

// Reusable styled components for docs
const H1: React.FC<{children: React.ReactNode}> = ({ children }) => <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white text-glow">{children}</h1>;
const H2: React.FC<{children: React.ReactNode}> = ({ children }) => <h2 className="text-3xl font-bold mt-12 mb-4 border-b border-gray-700 pb-2 text-gray-100">{children}</h2>;
const H3: React.FC<{children: React.ReactNode}> = ({ children }) => <h3 className="text-2xl font-bold mt-8 mb-3 text-amber-400">{children}</h3>;
const P: React.FC<{children: React.ReactNode}> = ({ children }) => <p className="text-lg text-gray-300 mb-4 leading-relaxed">{children}</p>;
const ItalicP: React.FC<{children: React.ReactNode}> = ({ children }) => <p className="text-lg text-gray-400 mb-4 italic">{children}</p>;
const InlineCode: React.FC<{children: React.ReactNode}> = ({ children }) => <code className="bg-gray-800 text-amber-300 font-mono text-base py-0.5 px-1.5 rounded-md">{children}</code>;

const CodeBlock: React.FC<{ children: string; lang: string }> = ({ children, lang }) => (
    <div className="my-6 relative">
        <pre className="bg-gray-900 border border-gray-800 rounded-lg p-4 pt-10 overflow-x-auto font-mono text-sm text-gray-200">
            <code>{children.trim()}</code>
        </pre>
        <span className="absolute top-0 left-0 text-xs uppercase tracking-wider text-gray-400 bg-gray-950 px-3 py-1 border-b border-r border-gray-800 rounded-br-lg rounded-tl-lg">{lang}</span>
    </div>
);

const BackButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
    <button onClick={onClick} className="mb-8 inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        Back to Home
    </button>
);

const DocsPage: React.FC<{ onNavigate: (page: 'home' | 'docs' | 'playground') => void }> = ({ onNavigate }) => {
    return (
        <article className="container mx-auto px-4 py-32 md:py-40 max-w-4xl">
            <BackButton onClick={() => onNavigate('home')} />

            <H1>Rizz++: Simple like Python, fun like GenZ slangs</H1>
            
            <ItalicP>Tired of the same old boring programming languages?</ItalicP>

            <P>Say hello to a fresh Gen-Z flavored language 🚀 — built entirely in C++ with a clean, Python-like syntax (but guess what… no annoying indentation rules).</P>
            
            <P>This isn’t just a language for one dev — it’s a community project. Contribute, experiment, and help it grow. Let’s build something iconic together.</P>

            <H2>Installation</H2>
            <P>You can also install in your system. Right now it&apos;s only available for macOS/Linux via Homebrew. Soon it will be available for Windows too.</P>
            <CodeBlock lang="install">
{`brew install sriyush/rizzlang/rizzlang
//to check the version
rizz --version`}
            </CodeBlock>
            
            <H2>Running your code</H2>
            <P>To run your code create a file with a <InlineCode>.rizz</InlineCode> extension, and then:</P>
            <CodeBlock lang="run">
{`rizz vibe.rizz`}
            </CodeBlock>
            
            <H2>Docs</H2>
            
            <H3>Print</H3>
            <P>To print just write <InlineCode>bruh</InlineCode> and whatever you want to print.</P>
            <CodeBlock lang="rizz">
{`bruh "Let's vibe"`}
            </CodeBlock>
            <CodeBlock lang="output">
{`Let's vibe`}
            </CodeBlock>

            <H3>Variables</H3>
            <P>Simple syntax while declaring variables. No need to assign types to it, just give them a value and start vibing.</P>
            <CodeBlock lang="rizz">
{`a= 10
b=10
bruh a + b`}
            </CodeBlock>
            <CodeBlock lang="output">
{`20`}
            </CodeBlock>

            <H3>Arrays</H3>
            <P>You can also use arrays just like how you use them in Python. You can even use indexing.</P>
            <CodeBlock lang="rizz">
{`a =[12,3,4]
bruh a
bruh a[0]`}
            </CodeBlock>
            <CodeBlock lang="output">
{`[12,3,4]
12`}
            </CodeBlock>

            <H3>Booleans</H3>
            <P>Just like a normal programming language, this also contains Booleans but with fun naming: true {'->'} <InlineCode>no_cap</InlineCode>, false {'->'} <InlineCode>cap</InlineCode>.</P>
            <CodeBlock lang="rizz">
{`a = cap
bruh a
bruh !a //as you can see this language also supports negation`}
            </CodeBlock>
            <CodeBlock lang="output">
{`cap
no_cap`}
            </CodeBlock>

            <H3>Comments</H3>
            <P>To comment a line just use // in front of the statement.</P>
            <CodeBlock lang="rizz">
{`//this just a comment
a=10
bruh a`}
            </CodeBlock>
            <CodeBlock lang="output">
{`10`}
            </CodeBlock>

            <H3>Arithmetic Operations</H3>
            <P>This language also supports all kinds of arithmetic operations.</P>
            <CodeBlock lang="rizz">
{`a=10
b=20
result = (a + b) * 3;
bruh result`}
            </CodeBlock>
            <CodeBlock lang="output">
{`90`}
            </CodeBlock>
            
            <H3>Taking Input</H3>
            <P>To take input of a value (right now only available for string, int & float) just write <InlineCode>spill</InlineCode> and the variable name next to it.</P>
            <CodeBlock lang="rizz">
{`spill name
bruh name`}
            </CodeBlock>
            <CodeBlock lang="output">
{`📝 spill name: Sriyush
Sriyush`}
            </CodeBlock>

            <H3>Conditional Statements</H3>
            <P>This language also supports control flow statements with if, elseif, and else. <InlineCode>bet</InlineCode> {'->'} if, <InlineCode>noFam</InlineCode> {'->'} elseif, <InlineCode>forReal</InlineCode> {'->'} else, <InlineCode>yikes</InlineCode> {'->'} to close conditional block.</P>
            <CodeBlock lang="rizz">
{`x=10

bet x<5:
  bruh "Brotha the number is less than 5"
noFam x==9:
  bruh "Maann the number is 9 , no stress"
forReal:
  bruh "let it go bruh"
yikes`}
            </CodeBlock>
            <CodeBlock lang="output">
{`let it go bruh`}
            </CodeBlock>

            <H3>Function Declaration and Call</H3>
            <P>To use functions in Rizz++, you gotta use the <InlineCode>drip</InlineCode> keyword with the function name following it, and you can pass arguments if required. To close the function use the <InlineCode>finna</InlineCode> keyword.</P>
            <CodeBlock lang="rizz">
{`drip compare(x,y):
    bruh "This function starts here"
    bruh x >= y
    bruh x <= y
    z = no_cap
    bruh !z
    bruh !cap
    bruh -x
finna

compare(x,y)`}
            </CodeBlock>
            <CodeBlock lang="output">
{`This function starts here
cap
no_cap
cap
no_cap
-10`}
            </CodeBlock>
            
            <H3>Class</H3>
            <P>To use a class, just use the keyword <InlineCode>rizz</InlineCode> and to close the class scope use <InlineCode>gonner</InlineCode>. For creating an object of that class, instead of the <InlineCode>new</InlineCode> keyword, use <InlineCode>pullup</InlineCode>.</P>
            <CodeBlock lang="rizz">
{`rizz Dog:
    drip bark():
        bruh "woof!"
    finna
gonner

x = pullup Dog()
x.bark()`}
            </CodeBlock>
            <CodeBlock lang="output">
{`woof!`}
            </CodeBlock>

        </article>
    );
};

export default DocsPage;
