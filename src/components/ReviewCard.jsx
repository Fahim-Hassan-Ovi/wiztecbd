import React from 'react'

export const ReviewCard = ({ review }) => {
    const { name, role, rating, reviewText, earnings, earningsNote, videoThumbnail, profileImage } = review;
    return (
        
        <div className="w-full max-w-4xl bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row gap-6">

            {/* Left: Video Thumbnail */}
            <div className="w-screen md:w-1/3 relative">
                <img
                    src={videoThumbnail}
                    alt="Video thumbnail"
                    className="rounded-xl w-full h-full object-cover"
                />
                <button className="btn btn-circle absolute inset-0 m-auto bg-white/80 hover:bg-white">
                    ▶
                </button>
            </div>

            {/* Right section */}
            <div className="w-2/3 flex flex-col justify-between">

                {/* Profile Row */}
                <div className="flex items-center gap-3">
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="w-12 h-12 rounded-full"
                    />

                    <div>
                        <h3 className="font-semibold text-lg">{name}</h3>
                        <p className="text-sm opacity-70">{role}</p>
                    </div>

                    {/* Rating */}
                    <div className="ml-auto flex text-yellow-400">
                        {Array.from({ length: rating }).map((_, i) => (
                            <span key={i}>★</span>
                        ))}
                    </div>
                </div>

                {/* Tags */}
                <div className="flex gap-2 mt-3 flex-wrap">
                    {review.tags.map((tag, index) => (
                        <span key={index} className="badge badge-outline">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Review Text */}
                <p className="mt-4 text-gray-700 leading-relaxed">
                    {reviewText}
                </p>

                {/* Earnings */}
                <div className="mt-5">
                    <p className="font-bold text-3xl">{earnings}</p>
                    <p className="text-gray-500 text-sm uppercase tracking-wide">
                        {earningsNote}
                    </p>
                </div>
            </div>
        </div>
    )
}
