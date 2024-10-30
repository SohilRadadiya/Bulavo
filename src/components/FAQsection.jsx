import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqData = [
    {
      id: 1,
      question: "What types of appliances do you repair?",
      answer: "We repair a wide range of home appliances, including refrigerators, washing machines, dryers, ovens, dishwashers, and more. If you're unsure about a specific appliance, feel free to contact us!"
    },
    {
      id: 2,
      question: "How quickly can you schedule a repair appointment?",
      answer: "We understand the urgency of appliance issues. In most cases, we can schedule a repair appointment within 24 hours. Please reach out to us for availability."
    },
    {
      id: 3,
      question: "What should I do if my appliance is under warranty?",
      answer: "If your appliance is under warranty, we recommend checking the warranty terms. In many cases, repairs must be performed by an authorized service provider. Contact us to discuss your options and how we can assist you."
    },
    {
      id: 4,
      question: "Do you provide a warranty on your repair services?",
      answer: "Yes, we offer a warranty on our repair services. This covers both parts and labor for a specified period, ensuring you have peace of mind after we complete the job. Please ask our technician for specific details during your appointment."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 bg-white">
      <div className="text-center mb-12">
        <span className="text-blue-600 font-medium mb-2 block">Get Answers</span>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Do You Have Questions About Appliance Repairs?
        </h2>
      </div>

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={faq.id}
            className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 ease-in-out hover:shadow-md"
          >
            <button
              onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center gap-4 bg-white hover:bg-gray-50"
            >
              <span className="font-medium text-gray-900 flex items-center gap-3">
                <span className="text-blue-600 text-sm">
                  {String(faq.id).padStart(2, '0')}.
                </span>
                {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-blue-600 transition-transform duration-200 ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeIndex === index ? 'max-h-48' : 'max-h-0'
              }`}
            >
              <p className="px-6 py-4 text-gray-600 bg-gray-50">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;