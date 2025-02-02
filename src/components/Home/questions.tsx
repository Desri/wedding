'use client';
import { Accordion, AccordionItem, Button } from "@nextui-org/react";

const QuestionsComponent = () => {
  const defaultContent = "Nope, no apps or account registration are needed. Unlike other photo sharing apps, Kululu doesn't require this kind of effort from your guests. Guests can easily participate by entering a URL or scanning the unique QR code we generated for you. From there, the upload process is straightforward. It's so simple to use that even grandma ca do it. No joke.";
  return (
    <>
      <div className="px-4 sm:px-16 pt-5 pb-28">
        <div className="sm:w-5/6 sm:px-4 mx-auto text-black">
          
          <div className="grid sm:grid-cols-2 gap-10 mt-8">
            <div className='mb-3'>
              <h2 className="text-3xl mb-5 font-bold">
                Questions?
              </h2>
              <p>
                Everything you need to know about the product. Can not find the answer you are looking for? Please chat to our team. Ready to go? Click the button below!
              </p>
              <Button variant="bordered" className='rounded-lg mt-6 w-36 h-10 bg-[#0BB90B] text-white border-[#0BB90B]'>
                Get Started
              </Button>
            </div>

            <div className="accordion-faq">
              <Accordion>
                <AccordionItem key="1" aria-label="Accordion 1" title="Do guests need to download an app to participate">
                  {defaultContent}
                </AccordionItem>
                <AccordionItem key="2" aria-label="Accordion 2" title="Do guests need to download an app to participate">
                  {defaultContent}
                </AccordionItem>
                <AccordionItem key="3" aria-label="Accordion 3" title="Do guests need to download an app to participate">
                  {defaultContent}
                </AccordionItem>
                <AccordionItem key="4" aria-label="Accordion 4" title="Do guests need to download an app to participate">
                  {defaultContent}
                </AccordionItem>
                <AccordionItem key="5" aria-label="Accordion 5" title="Do guests need to download an app to participate">
                  {defaultContent}
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionsComponent;
