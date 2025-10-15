import React from 'react'

export default function TopNav({ active, onChange }) {
    function handleKeyDown(e) {
        const order = ['why', 'how']
        const idx = order.indexOf(active)
        if (e.key === 'ArrowRight') {
            e.preventDefault()
            const next = order[(idx + 1) % order.length]
            onChange(next)
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault()
            const next = order[(idx - 1 + order.length) % order.length]
            onChange(next)
        } else if (e.key === 'Home') {
            e.preventDefault()
            onChange('why')
        } else if (e.key === 'End') {
            e.preventDefault()
            onChange('how')
        }
    }
    return (
        <div className="bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200 sticky top-0 z-10">
            <div className="max-w-5xl mx-auto px-6 py-4">
                <div className="flex items-center justify-center">
                    <div className="inline-flex rounded-full shadow-sm ring-1 ring-slate-200 overflow-hidden" role="tablist" aria-label="Sections" aria-orientation="horizontal">
                        <button
                            role="tab"
                            aria-selected={active === 'why'}
                            aria-controls="tab-why"
                            id="tab-why-label"
                            type="button"
                            tabIndex={active === 'why' ? 0 : -1}
                            onKeyDown={handleKeyDown}
                            className={`px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 ${active === 'why' ? 'bg-slate-900 text-white' : 'bg-white text-slate-700 hover:bg-slate-50'}`}
                            onClick={() => onChange('why')}
                        >
                            Why have I been sent here?
                        </button>
                        <button
                            role="tab"
                            aria-selected={active === 'how'}
                            aria-controls="tab-how"
                            id="tab-how-label"
                            type="button"
                            tabIndex={active === 'how' ? 0 : -1}
                            onKeyDown={handleKeyDown}
                            className={`px-4 py-2 text-sm font-medium transition-colors border-l border-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 ${active === 'how' ? 'bg-slate-900 text-white' : 'bg-white text-slate-700 hover:bg-slate-50'}`}
                            onClick={() => onChange('how')}
                        >
                            How do I fix it?
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
