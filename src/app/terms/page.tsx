export default function TermsAndConditionsPage() {
    return (
        <div className="flex flex-col items-center justify-center w-full px-4 py-8 pb-20">
            <div className="bg-white rounded-xl shadow-md w-full max-w-2xl p-6 space-y-4">
                <h1 className="text-2xl font-bold text-center">Terms of Service Agreement</h1>
                <p className="text-center text-sm text-gray-500 font-semibold">June 30, 2025</p>
                <p className="text-sm text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.
                </p>

                {/* Section: Eligibility */}
                <div>
                    <h2 className="font-bold text-base">1. Eligibility</h2>
                    <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum.
                        </li>
                    </ol>
                </div>

                {/* Section: Grant of Use / Termination (Repeated 6x) */}
                {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index}>
                        <h2 className="font-bold text-base">1. Grant of Use; Termination</h2>
                        <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.
                            </li>
                        </ol>
                    </div>
                ))}
            </div>
        </div>
    );
}
