import React from "react";

export default function Footer() {
    return (
        <footer className="w-full bg-black text-white py-12 border-t border-white/10">
            {/* Bottom Section */}
            <div className="max-w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/40">
                <p>
                    © 2025 Apex AI Automation. All rights reserved.
                </p>

                <div className="flex gap-8">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}
