'use client'

import withPublicRoute from "@/utils/WithPublicRoute";

export default withPublicRoute(PrivacyPolicyPage)

function PrivacyPolicyPage() {
    return (
        <div className="flex flex-col items-center justify-center w-full px-4 py-8 pb-20">
            <div className="bg-white rounded-xl shadow-md w-full max-w-2xl p-6 space-y-6">
                <h1 className="text-2xl font-bold text-center">Privacy Policy</h1>
                <p className="text-center text-sm text-gray-500 font-semibold">Last Updated: July 10, 2025</p>

                <p className="text-sm text-gray-700">
                    This Privacy Policy describes how we collect, use, and protect your information when you use our service.
                    By using our service, you agree to the collection and use of information in accordance with this policy.
                </p>

                {/* Section 1: Information We Collect */}
                <div>
                    <h2 className="font-bold text-base mb-2">1. Information We Collect</h2>
                    <p className="text-sm text-gray-700">
                        We collect information you provide directly to us, such as when you create an account, use our services,
                        or contact us. This may include your name, email address, phone number, and any other information you
                        choose to provide. We also automatically collect certain information about your device and how you
                        interact with our service, including IP address, browser type, operating system, and usage patterns.
                    </p>
                </div>

                {/* Section 2: How We Use Your Information */}
                <div>
                    <h2 className="font-bold text-base mb-2">2. How We Use Your Information</h2>
                    <p className="text-sm text-gray-700">
                        We use the information we collect to provide, maintain, and improve our services, process transactions,
                        send you technical notices and support messages, respond to your comments and questions, and communicate
                        with you about products, services, and events. We may also use your information to personalize your
                        experience and to develop new features and functionality.
                    </p>
                </div>

                {/* Section 3: Information Sharing */}
                <div>
                    <h2 className="font-bold text-base mb-2">3. Information Sharing</h2>
                    <p className="text-sm text-gray-700">
                        We do not sell, trade, or otherwise transfer your personal information to third parties without your
                        consent, except as described in this policy. We may share your information with trusted service providers
                        who assist us in operating our service, conducting our business, or serving you. We may also disclose
                        your information when required by law or to protect our rights, property, or safety.
                    </p>
                </div>

                {/* Section 4: Data Security */}
                <div>
                    <h2 className="font-bold text-base mb-2">4. Data Security</h2>
                    <p className="text-sm text-gray-700">
                        We implement appropriate technical and organizational security measures to protect your personal
                        information against unauthorized access, alteration, disclosure, or destruction. However, no method
                        of transmission over the internet or electronic storage is completely secure, so we cannot guarantee
                        absolute security. We regularly review and update our security practices to ensure your data remains protected.
                    </p>
                </div>

                {/* Section 5: Your Rights and Choices */}
                <div>
                    <h2 className="font-bold text-base mb-2">5. Your Rights and Choices</h2>
                    <p className="text-sm text-gray-700">
                        You have the right to access, update, or delete your personal information. You can also opt out of
                        certain communications from us. If you wish to exercise any of these rights, please contact us using
                        the information provided below. We will respond to your request within a reasonable timeframe and
                        in accordance with applicable law.
                    </p>
                </div>

                {/* Section 6: Cookies and Tracking */}
                <div>
                    <h2 className="font-bold text-base mb-2">6. Cookies and Tracking</h2>
                    <p className="text-sm text-gray-700">
                        We use cookies and similar tracking technologies to collect information about your browsing activities
                        and to improve our service. You can control cookies through your browser settings, but disabling
                        cookies may limit your ability to use certain features of our service. We may also use third-party
                        analytics services to help us understand how our service is used.
                    </p>
                </div>

                {/* Section 7: Changes to This Policy */}
                <div>
                    <h2 className="font-bold text-base mb-2">7. Changes to This Policy</h2>
                    <p className="text-sm text-gray-700">
                        We may update this Privacy Policy from time to time to reflect changes in our practices or for other
                        operational, legal, or regulatory reasons. We will notify you of any material changes by posting the
                        updated policy on our website and updating the "Last Updated" date. Your continued use of our service
                        after any changes constitutes your acceptance of the revised policy.
                    </p>
                </div>

                {/* Contact Information */}
                <div className="border-t pt-4">
                    <h2 className="font-bold text-base mb-2">Contact Us</h2>
                    <p className="text-sm text-gray-700">
                        If you have any questions about this Privacy Policy, please contact us at privacy@example.com
                        or through our website's contact form.
                    </p>
                </div>
            </div>
        </div>
    );
}
