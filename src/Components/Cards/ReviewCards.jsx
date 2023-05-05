import React from 'react';

const ReviewCards = ({review}) => {
    return (
        <div className=' w-3/4 md:w-1/2 mx-auto backdrop-blur-3xl my-10'>
            <article
  href="#"
  className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
>
  <span
    className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
  ></span>

  <div className="sm:flex sm:justify-between sm:gap-4">
    <div>
      <h3 className="text-lg font-bold text-black sm:text-xl">
       {review.review}
      </h3>

      <p className="mt-1 text-xs font-medium text-gray-600">By {review.name}</p>
    </div>

    <div className="hidden sm:block sm:shrink-0">
      <img
        alt="Paul Clapton"
        src={review.pic}
        className="h-16 w-16 rounded-lg object-cover shadow-sm"
      />
    </div>
  </div>

  <div className="mt-4">
    <p className="max-w-1/2 text-sm text-gray-900">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum
      provident a, ipsa maiores deleniti consectetur nobis et eaque.
    </p>
  </div>

  <dl className="mt-6 flex gap-4 sm:gap-6">
    <div className="flex flex-col-reverse">
      <dt className="text-sm font-medium text-gray-600">Reviewed</dt>
      <dd className="text-xs text-gray-500">31st June, 2021</dd>
    </div>

   
  </dl>
</article>
        </div>
    );
};

export default ReviewCards;