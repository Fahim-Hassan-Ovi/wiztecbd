import { useEffect, useState } from "react";
import { ReviewCard } from "./ReviewCard";
import Marquee from "react-fast-marquee";

export const Reviews = ({ data }) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    setReviews(data);
  }, [data])
  return (
    <div className='bg-linear-to-b from-[#2A0019] to-[#3C4C5AD4]'>
      <div className='flex flex-col justify-center items-center gap-4 py-10'>
        <button className='btn bg-transparent bg-linear-to-r from-[#e7bedb] to-[#cf49b2] rounded-full border-none shadow-none'>TESTIMONIALS</button>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-3xl md:text-6xl text-white font-bold'>Trusted by Creator</h1>
          <h1 className='text-3xl md:text-6xl text-white font-bold'>& Proven by Results.</h1>
        </div>
        <div className='flex flex-col justify-center items-center mb-10'>
          <p className='text-white text-xl'>See how others grow with Growhubs - real stories, real success.</p>
        </div>
        {/* dynamic reviews */}
        <Marquee speed={40} pauseOnHover={true}>
          <div className="flex gap-5">
            {reviews.map(review => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  )
}
