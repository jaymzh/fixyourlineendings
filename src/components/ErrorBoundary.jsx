import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('ErrorBoundary caught an error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="rounded-2xl border border-rose-200 bg-rose-50 text-rose-900 p-4 text-sm text-left">
          <div className="font-semibold mb-1">Something went wrong rendering the content.</div>
          <div className="opacity-80">Try selecting a different editor or refreshing the page.</div>
          {this.state.error?.message && (
            <pre className="mt-2 text-xs text-rose-700 whitespace-pre-wrap">{String(this.state.error.message)}</pre>
          )}
        </div>
      )
    }
    return this.props.children
  }
}
