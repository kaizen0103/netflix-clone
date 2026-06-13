import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Netflix?",
      answer:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies and more."
    },
    {
      question: "How much does Netflix cost?",
      answer:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device starting at ₹149."
    },
    {
      question: "Where can I watch?",
      answer:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly."
    },
    {
      question: "How do I cancel?",
      answer:
        "Netflix is flexible. There are no annoying contracts and no cancellation fees."
    }
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white px-6 py-20">
      <h2 className="text-5xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>

      <div className="max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-2">
            <button
              onClick={() => handleToggle(index)}
              className="w-full bg-zinc-800 hover:bg-zinc-700 p-6 flex justify-between items-center text-left text-2xl"
            >
              <span>{faq.question}</span>

              <span>
                {openIndex === index ? "✕" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div className="bg-zinc-800 mt-[1px] p-6 text-xl">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;