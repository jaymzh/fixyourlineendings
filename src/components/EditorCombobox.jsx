import React, { useState, useMemo } from 'react'
import { Combobox } from '@headlessui/react'


export default function EditorCombobox({ editors, onSelect }) {
    const [query, setQuery] = useState('')
    const filtered = useMemo(() => {
        if (!query) return editors
        const q = query.toLowerCase()
        return editors.filter(e => e.name.toLowerCase().includes(q))
    }, [query, editors])


    return (
        <div className="w-full max-w-2xl">
            <Combobox value={null} onChange={onSelect} nullable>
                <div className="relative">
                    <Combobox.Input
                        onChange={e => setQuery(e.target.value)}
                        placeholder="Search editor..."
                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
                    />
                    <Combobox.Options className="absolute z-10 mt-1 w-full bg-white border rounded-md max-h-60 overflow-auto">
                        {filtered.map(editor => (
                            <Combobox.Option key={editor.id} value={editor} className={({ active }) => `cursor-pointer px-3 py-2 ${active ? 'bg-slate-100' : ''}`}>
                                {editor.name}
                            </Combobox.Option>
                        ))}
                        {filtered.length === 0 && (
                            <div className="px-3 py-2 text-slate-500">No results</div>
                        )}
                    </Combobox.Options>
                </div>
            </Combobox>
        </div>
    )
}
