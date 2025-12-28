
function Architecture() {
    return(
        <section className="architecture">
            <h2>Architecture</h2>
            <pre>
{`React UI
    ↓
Electron
    ↓
Python Backend (Flask Based)
    ↓
Encrypted SQLite Database`}
            </pre>
            <p>No Cloud. No External API.</p>
        </section>
    )
}

export default Architecture;