'use client'

import withPublicRoute from "@/utils/WithPublicRoute";
import { useState } from "react";


export default withPublicRoute(FAQPage);
function FAQPage() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What is a Campaign?",
      answer: "A Campaign represents an advertising unit within an Ad Network. Each campaign has a title, landing page URL, running status, and payouts for different countries where the campaign is advertised."
    },
    {
      question: "How do I create a new campaign?",
      answer: "To create a new campaign, click the 'Create Campaign' button, fill in the required fields (Title and Landing Page URL), add at least one payout with country and amount, then click 'Save Campaign'."
    },
    {
      question: "What information is required to create a campaign?",
      answer: "Title and Landing Page URL are mandatory fields. You must also add at least one payout specifying the country and payout amount before you can save the campaign."
    },
    {
      question: "How do I start or stop a campaign?",
      answer: "You can toggle a campaign's running status by clicking the 'Start' or 'Stop' button in the campaign list. When a campaign is running, it's active on the Ad Network."
    },
    {
      question: "Can I search for specific campaigns?",
      answer: "Yes, you can search for campaigns by Title, Landing Page URL, or filter by running status using the search and filter options in the campaign list."
    },
    {
      question: "What are payouts and how do they work?",
      answer: "Payouts specify how much money will be offered per specific country where the campaign is advertised. Each campaign can have multiple payouts for different countries with different amounts."
    },
    {
      question: "Can I edit a campaign after creating it?",
      answer: "Yes, you can edit campaign details by clicking the 'Edit' button in the campaign list. You can modify the title, landing page URL, and update payouts."
    },
    {
      question: "How do I add multiple payouts to a campaign?",
      answer: "When creating or editing a campaign, you can add multiple payouts by clicking 'Add Payout' and specifying different countries with their respective payout amounts."
    },
    {
      question: "What happens when I delete a campaign?",
      answer: "When you delete a campaign, it will be permanently removed from the system. This action cannot be undone, so make sure you want to delete it before confirming."
    },
    {
      question: "Can I have multiple campaigns with the same title?",
      answer: "While the system allows it, it's recommended to use unique titles for campaigns to avoid confusion when managing multiple campaigns."
    }
  ];

  return (
      <div className="flex flex-col items-center justify-center w-full px-4 py-8 pb-20">
        <div className="bg-white rounded-xl shadow-md w-full max-w-3xl p-6 space-y-6">
          <h1 className="text-2xl font-bold text-center">Frequently Asked Questions</h1>
          <p className="text-center text-sm text-gray-600">
            Find answers to common questions about Campaign Management
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                      onClick={() => toggleFAQ(index)}
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <span className="text-gray-500 text-xl">
                                    {openFAQ === index ? '−' : '+'}
                                </span>
                  </button>
                  {openFAQ === index && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                  )}
                </div>
            ))}
          </div>

          <div className="border-t pt-6">
            <h2 className="font-bold text-base mb-2">Still have questions?</h2>
            <p className="text-sm text-gray-700">
              If you can't find the answer you're looking for, please contact our support team at
              <span className="text-blue-600"> support@example.com</span> or through our contact form.
            </p>
          </div>
        </div>
      </div>
  );
}
