import React from 'react';
import '../styles/Blogs.css';
import FadeInSection from '../components/FadeInSection';

const Blogs: React.FC = () => {
  const substackBlogs = [
    {
      title: "This One Pattern Can Help You Reduce Time Complexity from O(n²) to O(n) - Learning Monotonic Stacks",
      subtitle: "LeetCode Problem 739 - Daily Temperatures",
      year: "2025",
      url: "https://sabithapaulraj.substack.com/p/this-one-pattern-can-help-you-reduce"
    },
    // Add more blogs here as needed
  ];

  return (
    <div className="blogs-container">
      <FadeInSection>
        <div className="section-header">
          <span className="section-title">/blogs</span>
        </div>
        <div className="blogs-links-row">
          <div className="blogs-card">
            <div className="blogs-card-title">Substack</div>
            <div className="blogs-card-id">@sabithapaulraj</div>
            <a href="https://sabithapaulraj.substack.com/" target="_blank" rel="noopener noreferrer">
              <button className="blogs-card-btn">Visit Substack</button>
            </a>
          </div>
          <div className="blogs-card">
            <div className="blogs-card-title">Hashnode</div>
            <div className="blogs-card-id">@sabithapaulraj</div>
            <a href="https://sabithapaulraj.hashnode.dev/" target="_blank" rel="noopener noreferrer">
              <button className="blogs-card-btn">Visit Hashnode</button>
            </a>
          </div>
          <div className="blogs-card">
            <div className="blogs-card-title">Medium</div>
            <div className="blogs-card-id">@sabithapaulraj31018</div>
            <a href="https://medium.com/@sabithapaulraj31018" target="_blank" rel="noopener noreferrer">
              <button className="blogs-card-btn">Visit Medium</button>
            </a>
          </div>
        </div>
        <div className="blogs-list-section">
          <h2 className="blogs-list-title">Substack Blogs</h2>
          <div className="blogs-list">
            {substackBlogs.map((blog, idx) => (
              <div className="blog-list-item" key={idx}>
                <div className="blog-list-main">
                  <a href={blog.url} target="_blank" rel="noopener noreferrer" className="blog-list-title-link">
                    <div className="blog-list-title">{blog.title}</div>
                    <div className="blog-list-subtitle">{blog.subtitle}</div>
                  </a>
                </div>
                <div className="blog-list-year">{blog.year}</div>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Blogs; 