import React from 'react';
import { useParams } from 'react-router-dom';

function BlogDetails() {
  const { id } = useParams();

  // Dummy blog data - will be replaced with backend fetch later
  const blogData = {
    1: { title: "Top Investment Tips", content: "This is the content of Blog 1." },
    2: { title: "Why You Need Insurance", content: "This is the content of Blog 2." },
    3: { title: "Use Our EMI Calculator", content: "This is the content of Blog 3." },
    4: { title: "Investment Planning 101", content: "This is the content of Blog 4." },
    5: { title: "Financial Goals Made Simple", content: "This is the content of Blog 5." },
    6: { title: "Safe Tax Saving Options", content: "This is the content of Blog 6." },
    7: { title: "Top 10 Investment Options", content: "This is the content of Blog 7." },
    8: { title: "Retirement Planning", content: "This is the content of Blog 8." },
    9: { title: "Health Insurance Guide", content: "This is the content of Blog 9." }
  };

  const blog = blogData[id];

  if (!blog) {
    return (
      <div style={{ marginTop: "80px", marginBottom: "80px", padding: "20px" }}>
        <h2>Blog Not Found</h2>
      </div>
    );
  }

  return (
    <div style={{ marginTop: "80px", marginBottom: "80px", padding: "20px" }}>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
}

export default BlogDetails;
