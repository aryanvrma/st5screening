
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Background Image with Opacity */}
      <div 
        className="absolute inset-0 bg-cover h-full w-full bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url('/lovable-uploads/816eb1f5-5157-4b8e-bf8f-0c3a91c98d72.png')`,
          opacity: 0.5
        }}
      />
      
      {/* Dark Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        
        {/* Stranger Things Logo Text with Glow Effect */}
        <div className="text-center mb-8">
          <h1 className="font-stranger text-6xl md:text-8xl lg:text-9xl font-bold text-stranger-red animate-glow-flicker mb-4 tracking-wider">
            STRANGER
          </h1>
          <h1 className="font-stranger text-6xl md:text-8xl lg:text-9xl font-bold text-stranger-red animate-glow-flicker tracking-wider">
            THINGS
          </h1>
          <div className="text-stranger-red text-2xl md:text-3xl font-title mt-2 tracking-[0.2em]">
            SEASON 5 | VOLUME 1
          </div>
          
        </div>

        {/* Tagline */}
        <div className="text-center mb-6">
          <h2 className="font-stranger text-2xl md:text-4xl lg:text-5xl text-white font-semibold mb-3 tracking-wide">
            Relive Hawkins&apos; End, In Theater On Big Screen
          </h2>
          <p className="font-title text-xl md:text-2xl text-stranger-red tracking-wider">
            A Fan&apos;s Initiative | Not Associated With Netflix | Paid Event
          </p>
        </div>

        {/* Event Details Card */}
        <Card className="bg-black/80 border-stranger-red border-2 backdrop-blur-sm max-w-md w-full mx-4 mb-8">
          <CardContent className="p-6 text-center">
            <div className="space-y-4">
              <div>
                <h3 className="font-title text-xl text-stranger-red mb-2 tracking-wide">
                  LOCATION
                </h3>
                <p className="font-stranger text-lg text-white">
                  Greater Noida
                </p>
              </div>
              
              <div className="border-t border-stranger-red/30 pt-4">
                <h3 className="font-title text-xl text-stranger-red mb-2 tracking-wide">
                  DATE & TIME
                </h3>
                <p className="font-stranger text-lg text-white">
                  November 26 | 12 PM
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        
        {/* FAQ Section */}
        <div className="text-center mb-8 max-w-4xl w-full mx-auto">
          <h3 className="font-title text-2xl md:text-3xl text-stranger-red mb-6 tracking-wide">
            FREQUENTLY ASKED QUESTIONS
          </h3>
          
          <div className="bg-black/80 border-stranger-red border-2 rounded-lg p-6 backdrop-blur-sm">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-stranger-red/30">
                <AccordionTrigger className="font-stranger text-white hover:text-stranger-red text-left">
                  Is the event paid?
                </AccordionTrigger>
                <AccordionContent className="font-stranger text-white/90 text-left">
                  Yes, it will be a paid event. However, the pricing will be decided keeping in mind that most fans are students.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border-stranger-red/30">
                <AccordionTrigger className="font-stranger text-white hover:text-stranger-red text-left">
                  How many episodes will be played?
                </AccordionTrigger>
                <AccordionContent className="font-stranger text-white/90 text-left">
                  There are 4 episodes in Stranger Things Season 5 Volume 1, and all of them will be screened.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border-stranger-red/30">
                <AccordionTrigger className="font-stranger text-white hover:text-stranger-red text-left">
                  What is the timing or duration of the event?
                </AccordionTrigger>
                <AccordionContent className="font-stranger text-white/90 text-left">
                  The event will begin at 12 PM. Each episode is expected to be around 80 minutes long. With breaks between episodes, the total duration will be approximately 6 hours.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border-stranger-red/30">
                <AccordionTrigger className="font-stranger text-white hover:text-stranger-red text-left">
                  What is the venue for the event?
                </AccordionTrigger>
                <AccordionContent className="font-stranger text-white/90 text-left">
                  The screening will take place in Greater Noida. The exact location will be shared with those who fill out the form.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="border-stranger-red/30">
                <AccordionTrigger className="font-stranger text-white hover:text-stranger-red text-left">
                  Is this an official event by Netflix?
                </AccordionTrigger>
                <AccordionContent className="font-stranger text-white/90 text-left">
                  No, this is not an official Netflix event. It is a fan-led initiative.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6" className="border-stranger-red/30">
                <AccordionTrigger className="font-stranger text-white hover:text-stranger-red text-left">
                  When will I receive the exact details?
                </AccordionTrigger>
                <AccordionContent className="font-stranger text-white/90 text-left">
                  Those who fill out the form will be contacted via email or WhatsApp with all the event details.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        {/* Call to Action */}
        <div className="text-center mb-8">
          <h3 className="font-title text-2xl md:text-3xl text-stranger-red mb-6 tracking-wide">
            FILL THIS FORM TO SHOW YOUR INTEREST!!!
          </h3>
          {/* Google Form Iframe */}
          <div className="max-w-screen-lg w-full mx-auto bg-black/80 border-stranger-red border-2 rounded-lg p-4">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLScqpSr7AKDzxa5QQh3FfNv4uZkUQWAHh7_jXUkvP58ZKn5_Yw/viewform?embedded=true" 
              width="100%" 
              height="800" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              className="w-full rounded-lg"
            >
              Loading…
            </iframe>
          </div>
        </div>

        

        {/* Additional Atmospheric Text */}
        <div className="mt-8 text-center">
          <p className="font-stranger text-sm md:text-base text-white/70 tracking-wide">
            Join fellow fans for the ultimate viewing experience
          </p>
        </div>
      </div>

      {/* Subtle Red Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-stranger-red/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-stranger-red/10 rounded-full blur-3xl" />
    </div>
  );
};

export default Index;
