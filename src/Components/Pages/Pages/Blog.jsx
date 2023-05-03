import React from 'react';
import Pdf from "react-to-pdf";
const ref = React.createRef();
const options = {
    orientation: 'landscape',
    unit: 'out',
    format: [4,4]
};
const Blog = () => {
    return (
        <div ref={ref} options={options} className="dark:bg-gray-800 py-20 space-y-5 dark:text-gray-100" bis_skin_checked="1">
            <div className="flex justify-between items-center px-10"><h2 className=" py-5 text-3xl text-center font-bold uppercase tracking-widest"> All asked Questions...</h2>
            <Pdf targetRef={ref} filename="blog.pdf">
        {({ toPdf }) => <button onClick={toPdf} className="btn btn-info">Generate PDF</button>}
      </Pdf>
            </div>
            <hr className='mb-5' />
	<div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900" bis_skin_checked="1">
		<div className="flex items-center justify-between" bis_skin_checked="1">
			
			<a rel="noopener noreferrer" target='_blank' href="#" className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">React</a>
		</div>
		<div className="mt-3" bis_skin_checked="1">
			<a rel="noopener noreferrer" target='_blank' href="https://www.altogic.com/blog/difference-between-controlled-and-uncontrolled-component#:~:text=In%20React%2C%20controlled%20components%20refer,manage%20their%20own%20state%20internally." className="text-2xl font-bold hover:underline">Tell us the differences between uncontrolled and controlled components.</a>
			<p className="mt-2"> &#8658; In a controlled component, the form element's data is handled by the 
React component (not DOM) and kept in the component's state. 
A controlled component basically overrides the default behavior 
of the HTML form elements. On the other hand, An uncontrolled component is a component that renders form elements, 
where the form element's data is handled by the DOM (default DOM behavior).</p>
		</div>
		<div className="flex items-center justify-between mt-4" bis_skin_checked="1">
			<a rel="noopener noreferrer" target='_blank' href="https://www.altogic.com/blog/difference-between-controlled-and-uncontrolled-component#:~:text=In%20React%2C%20controlled%20components%20refer,manage%20their%20own%20state%20internally." className="hover:underline dark:text-violet-400">Read more</a>
			
		</div>
	</div>
	<div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900" bis_skin_checked="1">
		<div className="flex justify-between" bis_skin_checked="1">
			
			<a rel="noopener noreferrer" target='_blank' href="#" className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900 ">React</a>
		</div>
		<div className="mt-3" bis_skin_checked="1">
			<a rel="noopener noreferrer" target='_blank' href="https://blog.logrocket.com/validate-react-props-proptypes/" className="text-2xl font-bold hover:underline">How to validate React props using PropTypes</a>
			<p className="mt-2"> &#8658; We can use <code>React-Props</code> to validate popTypes of react. With React props, you can send data to a component when you call on that component, including numbers, strings, functions, objects, and arrays. If you have multiple components, you can pass data from one component to another.</p>
		</div>
		<div className="flex items-center justify-between mt-4" bis_skin_checked="1">
			<a rel="noopener noreferrer" target='_blank' href="https://blog.logrocket.com/validate-react-props-proptypes/" className="hover:underline dark:text-violet-400">Read more</a>
			
		</div>
	</div>
	<div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900" bis_skin_checked="1">
		<div className="flex justify-between" bis_skin_checked="1">
			
			<a rel="noopener noreferrer" target='_blank' href="#" className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900 ">NodeJS</a>
		</div>
		<div className="mt-3" bis_skin_checked="1">
			<a rel="noopener noreferrer" target='_blank' href="https://procoders.tech/blog/express-js-vs-node-js/#:~:text=js%20web%20application%20framework%20that,to%20handle%20requests%20and%20responses." className="text-2xl font-bold hover:underline">Tell us the difference between nodejs and express js.</a>
			<p className="mt-2"> &#8658; NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses..</p>
		</div>
		<div className="flex items-center justify-between mt-4" bis_skin_checked="1">
			<a rel="noopener noreferrer" target='_blank' href="https://procoders.tech/blog/express-js-vs-node-js/#:~:text=js%20web%20application%20framework%20that,to%20handle%20requests%20and%20responses." className="hover:underline dark:text-violet-400">Read more</a>
			
		</div>
	</div>
	<div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900" bis_skin_checked="1">
		<div className="flex justify-between" bis_skin_checked="1">
			
			<a rel="noopener noreferrer" target='_blank' href="#" className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900 ">React</a>
		</div>
		<div className="mt-3" bis_skin_checked="1">
			<a rel="noopener noreferrer" target='_blank' href="https://chat.openai.com/" className="text-2xl font-bold hover:underline">What is a custom hook, and why will you create a custom hook?</a>
			<p className="mt-2"> &#8658; In React, a custom hook is a JavaScript function that allows you to reuse stateful logic between components. Custom hooks can abstract away complex logic and provide a cleaner and more concise way to share functionality across your application.</p>
		</div>
		<div className="flex items-center justify-between mt-4" bis_skin_checked="1">
			<a rel="noopener noreferrer" target='_blank' href="https://chat.openai.com/" className="hover:underline dark:text-violet-400">Read more</a>
			
		</div>
	</div>
</div>
    );
};

export default Blog;