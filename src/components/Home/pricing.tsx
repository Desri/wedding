'use client';
import ListPricingComponent from './listpricing';

const PricingComponent = () => {
  return (
    <>
      <div className="relative mt-[-60px] sm:px-16 py-24 bg-[#f8fafd]">
        <div className="sm:w-5/6 px-4 mx-auto text-black">
          <div className='text-center mb-16'>
            <h2 className="text-3xl mb-2 font-bold">
              Pricing
            </h2>
            <p>
              All plans are a one-time fee. No hidden cost.
            </p>
          </div>
          <ListPricingComponent />
        </div>
      </div>
    </>
  );
};

export default PricingComponent;
