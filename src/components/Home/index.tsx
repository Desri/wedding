'use client';
import TaglineComponent from './tagline';
import SetupComponent from './setup';
import HowItWorkComponent from './howitworks';
import PricingComponent from './pricing';
import IncludeComponent from './include';
import QuestionsComponent from './questions';
import HeaderComponent from '../header';

const HomeComponent = () => {
  return (
    <>
      <HeaderComponent />
      <div className="mx-auto px-4 sm:px-16 py-24 sm:py-32 bg-[#f8fafd]">
        <div className='flex'>
          <div className='sm:w-[60%]'>
            <TaglineComponent />
          </div>
          <div>
            <div className="relative flex justify-center">
              <img alt="Group of people celebrating with a cake" className="absolute top-0 left-1/2 transform -translate-x-1/2 -rotate-6 shadow-lg rounded-lg" height="200" src="https://storage.googleapis.com/a1aa/image/KL6iJ3DAE4KaHRetmArRpYA3iGiCNGHMOa3CLUAk4rM4869JA.jpg" width="300"/>
              <img alt="Woman celebrating with confetti" className="absolute top-1/2 left-1/4 transform -translate-y-1/2 -rotate-3 shadow-lg rounded-lg" height="200" src="https://storage.googleapis.com/a1aa/image/6LiG6vQc9U7mLpHogeC7PifUDBAYkGQnOemN4AWlnHf6mXvPB.jpg" width="300"/>
              <img alt="Couple dancing at a wedding" className="absolute top-1/2 right-1/4 transform -translate-y-1/2 rotate-3 shadow-lg rounded-lg" height="200" src="https://storage.googleapis.com/a1aa/image/d5pwTogqPhY0H5u2CLLVXxQjHaAYRa6lBV2jokmQdOpce69JA.jpg" width="300"/>
            </div>
          </div>
        </div>
      </div>
      <SetupComponent />
      <HowItWorkComponent />
      <PricingComponent />
      <IncludeComponent />
      <QuestionsComponent />
    </>
  );
};

export default HomeComponent;
