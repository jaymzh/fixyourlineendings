import React from 'react'

export default function Why() {
    return (
        <section id="tab-why" aria-labelledby="tab-why-label">
            <div className="bg-white shadow-xl shadow-slate-100/70 rounded-3xl p-8 md:p-10 border border-slate-200/80 text-center">
                <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Why have I been sent here?</h1>
                <div className="text-lg text-slate-600 leading-relaxed space-y-4 max-w-prose mx-auto text-left why-content">
                    <p>
                        If you are here, likely you submitted a Pull Request containing a file with it's final line missing a newline character.
                    </p>
                    <p>
                        This page will tell you why that matters, and how to fix it in your editor or IDE.
                    </p>
                    <h3 id="posix-definition" className="text-2xl font-semibold mt-8 mb-4 scroll-mt-24">POSIX Definition</h3>
                    <p>
                        Let's start with the POSIX definitions - the rules most modern systems and most of the internet follows. If you don't care about standards, <a href="#sanity-in-diffs" className="underline underline-offset-4 decoration-slate-300 hover:decoration-slate-400">skip to the next section</a>.
                    </p>
                    <p>
                        POSIX <a href="https://pubs.opengroup.org/onlinepubs/009695399/basedefs/xbd_chap03.html">defines</a> the following terms:
                    </p>
                    <dl>
                        <dt>Line</dt>
                        <dd>A sequence of zero or more non- &lt;newline&gt;s plus a terminating &lt;newline&gt;.</dd>
                        <dt>Incomplete Line</dt>
                        <dd>A sequence of one or more non-〈newline〉 characters at the end of the file.</dd>
                        <dt>Text File</dt>
                        <dd>A file that contains characters organized into one or more lines.</dd>
                    </dl>

                    <p>
                        As you can see, a if your file ends in any character other than a newline, it is considered to have an "incomplete line" and is not a valid "text file" per POSIX.
                    </p>

                    <h3 id="sanity-in-diffs" className="text-2xl font-semibold mt-8 mb-4 scroll-mt-24">Sanity in diffs</h3>
                    <p>
                        A really good reason to keep your files ending with a newline is the same reason to keep your lists ending with a comma - it makes diffs cleaner!
                    </p>
                    <p>
                        If you have a file with:
                    </p>
                    <pre className="bg-slate-100 rounded-md p-4 text-sm overflow-x-auto">
                        Some stuff<br/>
                        More stuff<br/>
                        Last line
                    </pre>
                    <p>
                        And then you change it to add a final line:
                    </p>
                    <pre className="bg-slate-100 rounded-md p-4 text-sm overflow-x-auto">
                        Some stuff<br/>
                        More stuff<br/>
                        Last line<br/>
                        New last line
                    </pre>
                    <p>
                        Your diff will now show <strong>two</strong> lines changed instead of just one. "Last line" became "Last line\n" and then we added "New Last Line."
                    </p>
                    <p>
                        If instead your original file had a final newline, per POSIX, the diff would cleanly show a single line being added.
                    </p>
                 </div>
            </div>
        </section>
    )
}
