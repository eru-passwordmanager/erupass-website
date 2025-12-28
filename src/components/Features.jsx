import {
    MdLock, MdOfflineBolt, MdTimer, MdImportExport, MdLanguage, MdExtension
} from "react-icons/md";

function Features() {
    return (
        <section className="features">
            <h2>Features</h2>

            <div>
                <div>
                    <MdLock size={28} />
                    <h4>Encrypted Vault</h4>
                    <p>All data is stored locally and encrypted.</p>
                </div>

                <div>
                    <MdOfflineBolt size={28} />
                    <h4>Offline-first</h4>
                </div>

                <div>
                    <MdTimer size={28} />
                    <h4>Auto Lock</h4>
                    <p>Vault locks automatically after inactivity.</p>
                </div>

                <div>
                    <MdImportExport size={28} />
                    <h4>Export / Import</h4>
                    <p>Encrypted backup and restore support.</p>
                </div>

                <div>
                    <MdLanguage size={28} />
                    <h4>Web Credentials</h4>
                    <p>Web account support (current).</p>
                </div>

                <div>
                    <MdExtension size={28} />
                    <h4>Extensible Design</h4>
                    <p>Architecture ready for multiple item types.</p>
                </div>
            </div>
        </section>
    )
}

export default Features;