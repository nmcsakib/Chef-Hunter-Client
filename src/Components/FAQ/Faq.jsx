import React from 'react';

const Faq = () => {
    return (
        <div className='space-y-5'>
        <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-violet-300 rounded-box w-3/4 mx-auto text-gray-800">
  <div className="collapse-title text-xl font-medium">
    Frequently Asked Question 1
  </div>
  <div className="collapse-content">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aspernatur unde ratione dolores. Voluptatum, consectetur.</p>
  </div>
</div>
        <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-violet-300 rounded-box w-3/4 mx-auto text-gray-800">
  <div className="collapse-title text-xl font-medium">
    Frequently Asked Question 2
  </div>
  <div className="collapse-content">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aspernatur unde ratione dolores. Voluptatum, consectetur.</p>
  </div>
</div>
        <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-violet-300 rounded-box w-3/4 mx-auto text-gray-800">
  <div className="collapse-title text-xl font-medium">
    Frequently Asked Question 3
  </div>
  <div className="collapse-content">
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel blanditiis sint, sapiente iure accusantium voluptatum?</p>
  </div>
</div>
        </div>
    );
};

export default Faq;