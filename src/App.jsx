import React, { useState } from 'react'
import TopNav from './components/TopNav'
import Why from './components/Why'
import How from './components/How'

export default function App() {
    const [tab, setTab] = useState('why')

    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans antialiased flex flex-col">
            <TopNav active={tab} onChange={setTab} />

            <main className="max-w-3xl mx-auto px-6 py-12 md:py-16 flex-1">
                {tab === 'why' && <Why />}
                {tab === 'how' && <How />}
            </main>

            <footer className="mt-8 border-t border-slate-200/80">
                <div className="max-w-3xl mx-auto px-6 py-8 text-center text-sm text-slate-600">
                    You can contribute to this page on{' '}
                    <a
                        href="https://github.com/jaymzh/fixyourlineendings"
                        className="font-medium text-slate-800 underline underline-offset-4 decoration-slate-300 hover:decoration-slate-400"
                    >
                        GitHub
                    </a>
                </div>
            </footer>
        </div>
    )
}
