import React, { useState } from 'react'
import Select from 'react-select'
import { EDITORS } from '../data/editors'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/github.css'
import ErrorBoundary from './ErrorBoundary'

export default function How() {
    const [selected, setSelected] = useState(null)
    const editorOptions = EDITORS.map(e => ({ value: e.id, label: e.name }))

    return (
        <section id="tab-how" aria-labelledby="tab-how-label">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-center">How do I fix it?</h1>
            <p className="mb-8 text-slate-600 text-center">
                Choose your editor below and follow the steps.
            </p>

            <div className="max-w-md mx-auto mb-10">
                <Select
                    options={editorOptions}
                    placeholder="Select your editor..."
                    isClearable
                    classNamePrefix="editor-select"
                    styles={{
                        control: base => ({
                            ...base,
                            backgroundColor: 'white',
                            borderColor: '#e2e8f0',
                            boxShadow: 'none',
                            padding: '6px',
                            borderRadius: '9999px',
                            color: '#0f172a',
                        }),
                        singleValue: base => ({
                            ...base,
                            color: '#0f172a',
                        }),
                        menu: base => ({
                            ...base,
                            backgroundColor: 'white',
                            color: '#0f172a',
                            borderRadius: '14px',
                            overflow: 'hidden',
                        }),
                    }}
                    onChange={opt => setSelected(EDITORS.find(e => e.id === opt?.value))}
                />
            </div>

            {selected && (
                <div className="bg-white shadow-xl shadow-slate-100/70 rounded-3xl p-6 md:p-8 border border-slate-200/80 mx-auto">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-slate-900">{selected.name}</h2>
                    <ErrorBoundary>
                        <div className="markdown">
                            <ReactMarkdown rehypePlugins={[[rehypeHighlight, { ignoreMissing: true }]]}>
                                {selected.fix}
                            </ReactMarkdown>
                        </div>
                    </ErrorBoundary>
                </div>
            )}
        </section>
    )
}
