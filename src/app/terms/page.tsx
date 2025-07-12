'use client'

import withPublicRoute from "@/utils/WithPublicRoute";

export default withPublicRoute(TermsAndConditionsPage)

function TermsAndConditionsPage() {
    return (
        <div className="flex flex-col items-center justify-center w-full px-4 py-8 pb-20">
            <div className="bg-white rounded-xl shadow-md w-full max-w-2xl p-6 space-y-6">
                <h1 className="text-2xl font-bold text-center">Terms and Conditions</h1>
                <p className="text-center text-sm text-gray-500 font-semibold">Last Updated: July 10, 2025</p>

                <p className="text-sm text-gray-700">
                    These Terms and Conditions govern your use of our service. By accessing or using our service, you agree
                    to be bound by these terms. If you disagree with any part of these terms, then you may not access the service.
                </p>

                {/* Section 1: Acceptance of Terms */}
                <div>
                    <h2 className="font-bold text-base mb-2">1. Acceptance of Terms</h2>
                    <p className="text-sm text-gray-700">
                        By accessing and using this service, you accept and agree to be bound by the terms and provision of
                        this agreement. You must be at least 18 years old to use this service. If you are under 18, you may
                        only use this service with the involvement and consent of a parent or guardian. We reserve the right
                        to refuse service to anyone for any reason at any time.
                    </p>
                </div>

                {/* Section 2: Use License and Restrictions */}
                <div>
                    <h2 className="font-bold text-base mb-2">2. Use License and Restrictions</h2>
                    <p className="text-sm text-gray-700">
                        We grant you a limited, non-exclusive, non-transferable license to use our service for personal or
                        commercial purposes in accordance with these terms. You may not modify, distribute, transmit, display,
                        perform, reproduce, publish, license, create derivative works from, transfer, or sell any information
                        obtained from this service without our prior written consent.
                    </p>
                </div>

                {/* Section 3: User Accounts and Responsibilities */}
                <div>
                    <h2 className="font-bold text-base mb-2">3. User Accounts and Responsibilities</h2>
                    <p className="text-sm text-gray-700">
                        You are responsible for maintaining the confidentiality of your account information and password.
                        You agree to accept responsibility for all activities that occur under your account. You must notify
                        us immediately of any unauthorized use of your account. You agree to provide accurate, current, and
                        complete information during registration and to update such information to keep it accurate and current.
                    </p>
                </div>

                {/* Section 4: Prohibited Uses */}
                <div>
                    <h2 className="font-bold text-base mb-2">4. Prohibited Uses</h2>
                    <p className="text-sm text-gray-700">
                        You may not use our service for any unlawful purpose or to solicit others to perform unlawful acts.
                        You may not violate any local, state, national, or international law, transmit any material that is
                        abusive, harassing, tortious, defamatory, vulgar, obscene, or invasive of another's privacy. You also
                        may not transmit any material that infringes on the rights of others or contains software viruses or
                        other harmful computer code.
                    </p>
                </div>

                {/* Section 5: Disclaimer and Limitation of Liability */}
                <div>
                    <h2 className="font-bold text-base mb-2">5. Disclaimer and Limitation of Liability</h2>
                    <p className="text-sm text-gray-700">
                        The information on this service is provided on an "as is" basis. To the fullest extent permitted by law,
                        we exclude all representations, warranties, and conditions relating to our service. We shall not be
                        liable for any damages arising from the use of this service, including but not limited to direct,
                        indirect, incidental, punitive, and consequential damages. Our total liability shall not exceed the
                        amount you paid for the service.
                    </p>
                </div>

                {/* Section 6: Termination */}
                <div>
                    <h2 className="font-bold text-base mb-2">6. Termination</h2>
                    <p className="text-sm text-gray-700">
                        We may terminate or suspend your account and bar access to the service immediately, without prior notice
                        or liability, under our sole discretion, for any reason whatsoever including but not limited to a breach
                        of the terms. You may also terminate your account at any time by contacting us. Upon termination, your
                        right to use the service will cease immediately, and any data associated with your account may be deleted.
                    </p>
                </div>

                {/* Section 7: Changes to Terms and Governing Law */}
                <div>
                    <h2 className="font-bold text-base mb-2">7. Changes to Terms and Governing Law</h2>
                    <p className="text-sm text-gray-700">
                        We reserve the right to modify these terms at any time. We will notify users of any material changes
                        by posting the updated terms on our website. Your continued use of the service after any changes
                        constitutes acceptance of the new terms. These terms shall be governed by and construed in accordance
                        with the laws of the jurisdiction in which we operate, without regard to its conflict of law provisions.
                    </p>
                </div>

                {/* Contact Information */}
                <div className="border-t pt-4">
                    <h2 className="font-bold text-base mb-2">Contact Us</h2>
                    <p className="text-sm text-gray-700">
                        If you have any questions about these Terms and Conditions, please contact us at legal@example.com
                        or through our website's contact form.
                    </p>
                </div>
            </div>
        </div>
    );
}
