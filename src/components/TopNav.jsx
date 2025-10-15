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
        <div
            className="bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200 sticky top-0 z-10"
        >
            <div className="max-w-5xl mx-auto px-6 py-4">
                <div className="flex items-center justify-center">
                    <div
                        className="inline-flex relative z-0 rounded-full shadow-sm shadow-slate-200/80 bg-white border border-slate-200"
                        role="tablist"
                        aria-label="Navigation Tabs"
                        aria-orientation="horizontal"
                    >
                        <button
                            type="button"
                            role="tab"
                            id="tab-why-label"
                            aria-controls="tab-why"
                            aria-selected={active === 'why'}
                            className={`px-5 py-2.5 text-sm font-medium rounded-l-full
                                focus:outline-none focus-visible:ring-2
                                focus-visible:ring-sky-500 transition-colors
                                duration-150 ${
                                    active === 'why'
                                        ? 'bg-slate-900 text-white'
                                        : 'text-slate-700 hover:bg-slate-100'
                                }`}
                            onClick={() => onChange('why')}
                            onKeyDown={handleKeyDown}
                        >
                            Why Have I Been Sent Here?
                        </button>
                        <button
                            type="button"
                            role="tab"
                            id="tab-how-label"
                            aria-controls="tab-how"
                            aria-selected={active === 'how'}
                            className={`px-5 py-2.5 text-sm font-medium rounded-r-full
                                focus:outline-none focus-visible:ring-2
                                focus-visible:ring-sky-500 transition-colors
                                duration-150 ${
                                    active === 'how'
                                        ? 'bg-slate-900 text-white'
                                        : 'text-slate-700 hover:bg-slate-100'
                                }`}
                            onClick={() => onChange('how')}
                            onKeyDown={handleKeyDown}
                        >
                            How Do I Fix It?
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
