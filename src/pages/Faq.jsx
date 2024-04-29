import lot from '../assets/lot.json'
import Lottie from "lottie-react";
const Faq = () => {
    return (
        <div className='my-24'>

<section className="">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
        <Lottie animationData={lot} />
			
		</div>
		
        
        <div className=" flex flex-col mt-20  lg:mt-0 justify-center p-6 text-black text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
      <div className="collapse rounded-none mb-2 collapse-plus bg-indigo-200 hover:bg-indigo-400">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium ">
        What types of products do you sell?
        </div>
        <div className="collapse-content">
          <p>
          Provide an overview of the categories of art and craft supplies you offer, such as painting supplies, yarn and knitting tools, making artics materials, etc.
          </p>
        </div>
      </div>
      <div  className="collapse rounded-none mb-2 collapse-plus bg-yellow-200 hover:bg-yellow-400">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium ">
        Do you offer international shipping?

        </div>
        <div className="collapse-content ">
          <p>
          Clarify your shipping policies, including whether you offer international shipping, estimated delivery times, and any associated costs.
          </p>
        </div>
      </div>
      <div className="collapse rounded-none bg-pink-200	hover:bg-pink-400 mb-2 collapse-plus">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
        Are your products eco-friendly or sustainably sourced?
        </div>
        <div className="collapse-content">
          <p>
          Highlight any eco-friendly or sustainably sourced products you offer, as well as any initiatives your store has implemented to promote sustainability.
          </p>
        </div>
      </div>
    </div>
			
	</div>
</section>
        </div>
    );
};

export default Faq;