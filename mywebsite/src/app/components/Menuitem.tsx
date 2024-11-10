import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';

const ProductCardGrid = () => {
  const productImages = [
    "https://static.vecteezy.com/system/resources/previews/027/564/813/large_2x/juicy-and-delicious-burger-food-ready-to-eat-with-light-burger-and-lettuce-chunks-topped-with-sauce-hamburger-generative-ai-free-photo.jpg",
    "https://static.vecteezy.com/system/resources/previews/026/190/727/large_2x/side-view-of-a-burger-on-a-dark-rustic-background-with-beef-and-cream-cheese-realistic-close-up-ai-generative-free-photo.jpg",
    "https://static.vecteezy.com/system/resources/previews/026/190/728/large_2x/side-view-of-a-burger-on-a-dark-rustic-background-with-beef-and-cream-cheese-realistic-close-up-ai-generative-free-photo.jpg",
    "https://static.vecteezy.com/system/resources/previews/026/190/724/large_2x/side-view-of-a-burger-on-a-dark-rustic-background-with-beef-and-cream-cheese-realistic-close-up-ai-generative-free-photo.jpg",
    "https://static.vecteezy.com/system/resources/previews/026/190/732/large_2x/side-view-of-a-burger-on-a-dark-rustic-background-with-beef-and-cream-cheese-realistic-close-up-ai-generative-free-photo.jpg",
    "https://static.vecteezy.com/system/resources/previews/026/190/730/large_2x/side-view-of-a-burger-on-a-dark-rustic-background-with-beef-and-cream-cheese-realistic-close-up-ai-generative-free-photo.jpg",

  ];
  return(
    <div className='relative text-center p-10'>
      <div className='absolute inset-0'
      style={{
        backgroundImage:`url('https://img.freepik.com/free-vector/restaurant-mural-wallpaper_52683-48014.jpg?w=1060&t=st=1729527978~exp=1729528578~hmac=d78713308c3bcc8b8a7feab858df768b7c646e751b2b72d318e3b7208dc63adb')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 0,
        opacity: 0.1,
      
      }}
      />
      
      <h1 className='font-bol text-4xl mb-4 text-white z-10 relative'>
        Most Requested Items
      </h1>
      <h1 className='text-3xl text-white z-10 relative'>Order Now..!</h1>
      <section
      id='projects'
      className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14  mt-10 mb-5'>
      {Array.from({length: 6}).map((_, index) => (
        <div
        key={index}
        className='w-70 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover::shadow-xl z-10 relative'>
          <a href="#">
            <img 
            src={productImages[index]}
             alt={`product ${index + 1}`}
             className='h-80 w-72 object-cover rounded-t-xl'
             />
             <div className='px-4 py-3 w-72'>
              <span className='text-slate-500 mr-3 uppercase text-xs'>Category</span>
              <p className=' text-lg font-bold text-red-700 truncate block capitalize'>Burger Name {index + 1}</p>
              <div className='flex items-center'>
                <p className='text-lg font-semibold text-black my-3 cursor-auto'>$149</p>
                <del>
                  <br />
                  <p className='text-sm text-blue-800 cursor-aut0 ml-2'>
                   {""}
                   $199
                  </p>
                </del>

                <div className='ml-auto'>
                  <FaShoppingCart  className='w-5 h-5 text-blue-800'/>
                </div>
              </div>
             </div>
          </a>
        </div>
))}

      </section>

      </div>
    
  );
};
export default ProductCardGrid;