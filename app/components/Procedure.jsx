// components/ProcedureSection.jsx
import Image from 'next/image';

export default function ProcedureSection() {
  const procedureSteps = [
    {
      id: 1,
      imageSrc: "/proc2.png", // Placeholder image 1
      imageAlt: "Contact us via call, WhatsApp, or email",
      text: "You Call, WhatsApp, Online chat, or email your query and share documents for review.",
    },
    {
      id: 2,
      imageSrc: "/proc3.jpeg", // Placeholder image 2
      imageAlt: "Receive price quote and timeline",
      text: "We will give a price and a tentative timeline for delivery.",
    },
    {
      id: 3,
      imageSrc: "/proc4.jpg", // Placeholder image 3
      imageAlt: "Approve price and make payment",
      text: "You approve the price and initiate the payment.",
    },
    {
      id: 4,
      imageSrc: "/proc5.jpg", // Placeholder image 4
      imageAlt: "Share translated draft for approval",
      text: "We will share courier tracking details by email.",
    },
    {
      id: 5,
      imageSrc: "/proc6.webp", // Placeholder image 5
      imageAlt: "Prepare certified copy after draft approval",
      text: " We will follow up with the courier agent untill it delivers.",
    },
    {
      id: 6,
      imageSrc: "/proc7.png", // Placeholder image 6
      imageAlt: "Send approved copy and release courier",
      text: "You call back and thanks us. Once received documents.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="mx-auto max-w-7xl text-center">
        {/* Main Heading */}
        <h2 className="mb-4 text-4xl font-extrabold text-[#56b4e9] md:text-7xl font-sans">
          <span className='text-[#2F486B]'>N</span>ow! Tell me about the procedure.
        </h2>

        {/* Sub-heading/Divider */}
        <div className='flex pt-0 pb-10 justify-center'>
        <div className="mx-0 mb-16 h-1.5 w-10 bg-[#56b4e9] rounded-2xl" ></div>
        <div className="mx-0 mb-16 h-1.5 w-2 bg-[#56b4e9] rounded-2xl"></div>
        <div className="mx-0 mb-16 h-1.5 w-2 bg-[#56b4e9] rounded-2xl"></div>
        <div className="mx-0 mb-16 h-1.5 w-2 bg-[#56b4e9] rounded-2xl"></div>
        </div>

        {/* Grid for Procedure Steps */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {procedureSteps.map((step, index) => {
            
            // This condition checks if the index is even (0, 2, 4)
            const isImageFirst = index % 2 === 0;

            // Define the Image Block
            const ImageBlock = (
              <div className="relative h-80 w-full">
                <Image
                  src={step.imageSrc}
                  alt={step.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  // Conditionally apply rounding to the correct corners
                  className={`object-cover ${isImageFirst ? "rounded-t-lg" : "rounded-b-lg"}`}
                />
              </div>
            );

            // Define the Text Block
            const TextBlock = (
              <div className="flex grow  flex-col justify-between p-6 text-center">
                <span className="mb-0 mt-0 text-7xl font-bold text-[#2f486b] font-sans">
                  {String(step.id).padStart(2, "0")}
                </span>
                <p className="text-[#2f486b] text-bold text-lg p-1 font-">{step.text}</p>
              </div>
            );

            // Return the card, ordering the blocks based on the condition
            return (
              <div
                key={step.id}
                className="flex flex-col box-border overflow-hidden p-1 rounded-lg bg-[linear-gradient(transparent,rgba(0,0,0,0.05))] shadow-md transition-shadow duration-400 hover:shadow-2xl"
              >
                {isImageFirst ? (
                  <>
                    {ImageBlock}
                    {TextBlock}
                  </>
                ) : (
                  <>
                    {TextBlock}
                    {ImageBlock}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}