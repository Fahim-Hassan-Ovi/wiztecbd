import { useEffect, useState } from "react";
import { ReviewCard } from "./ReviewCard";

export const Reviews = ({ data }) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    if (data?.reviews) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setReviews(data.reviews);  // ✔ use the array
    }
  }, [data]);
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
        <div className="grid grid-cols-1">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </div>
  )
}
