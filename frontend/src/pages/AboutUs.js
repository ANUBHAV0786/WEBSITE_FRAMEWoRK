import React from 'react';
import BlogCard from '../components/BlogCard';
import './AboutUs.css';

function AboutUs() {
  // Dummy blog list (row 1) — will be fetched from backend later
  const aboutBlogs = [
    { id: 4, title: "Investment Planning 101", image: "https://via.placeholder.com/300x200" },
    { id: 5, title: "Financial Goals Made Simple", image: "https://via.placeholder.com/300x200" },
    { id: 6, title: "Safe Tax Saving Options", image: "https://via.placeholder.com/300x200" },
  ];

  return (
    <div className="about">

      {/* Row 1 - Blogs */}
      <div className="row">
        {aboutBlogs.map((blog) => (
          <BlogCard key={blog.id} id={blog.id} title={blog.title} image={blog.image} />
        ))}
      </div>

      {/* Row 2 - Team Members */}
      <div className="row">
        <div className="card">
          <img src="https://via.placeholder.com/300x200" alt="Team 1" />
          <p>Rohit Sharma - Financial Advisor</p>
        </div>
        <div className="card">
          <img src="https://via.placeholder.com/300x200" alt="Team 2" />
          <p>Anjali Mehra - Investment Specialist</p>
        </div>
        <div className="card">
          <img src="https://via.placeholder.com/300x200" alt="Team 3" />
          <p>Amit Verma - Insurance Consultant</p>
        </div>
      </div>

      {/* Row 3 - Write Testimonial */}
      <div className="row testimonial-row">
        <div className="card" onClick={() => window.open("/write-testimonial", "_blank")}>
          <img src="https://via.placeholder.com/300x200" alt="Write Testimonial" />
          <p>Write a Testimonial</p>
        </div>
      </div>

    </div>
  );
}

export default AboutUs;




///////////////////////////////////////STATIC CODE FOR ABOUT US PAGE///////////////////////////////////////
// import React from 'react';
// import './AboutUs.css';

// function AboutUs() {
//   return (
//     <div className="about">
      
//       {/* Row 1 - Blogs */}
//       <div className="row">
//         <div className="card" onClick={() => window.open("/blog1", "_blank")}>
//           <img src="https://via.placeholder.com/300x200" alt="Blog 1" />
//           <p>Investment Strategies for Beginners</p>
//         </div>
//         <div className="card" onClick={() => window.open("/blog2", "_blank")}>
//           <img src="https://via.placeholder.com/300x200" alt="Blog 2" />
//           <p>How to Save Smartly</p>
//         </div>
//         <div className="card" onClick={() => window.open("/blog3", "_blank")}>
//           <img src="https://via.placeholder.com/300x200" alt="Blog 3" />
//           <p>Top 5 Mutual Funds 2025</p>
//         </div>
//       </div>

//       {/* Row 2 - Team Members */}
//       <div className="row">
//         <div className="card">
//           <img src="https://via.placeholder.com/300x200" alt="Team 1" />
//           <p>Rohit Sharma - Financial Advisor</p>
//         </div>
//         <div className="card">
//           <img src="https://via.placeholder.com/300x200" alt="Team 2" />
//           <p>Anjali Mehra - Investment Specialist</p>
//         </div>
//         <div className="card">
//           <img src="https://via.placeholder.com/300x200" alt="Team 3" />
//           <p>Amit Verma - Insurance Consultant</p>
//         </div>
//       </div>

//       {/* Row 3 - Write Testimonial */}
//       <div className="row testimonial-row">
//         <div className="card" onClick={() => window.open("/write-testimonial", "_blank")}>
//           <img src="https://via.placeholder.com/300x200" alt="Write Testimonial" />
//           <p>Write a Testimonial</p>
//         </div>
//       </div>

//     </div>
//   );
// }

// export default AboutUs;
