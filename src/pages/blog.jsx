import React, { useState, useEffect } from 'react';
import Header from "../components/Header.jsx";
import page from "../assets/images/backgrounds/page-header-bg-img.jpg";
import Footer from "../components/footer/Footer.jsx";
import { Link } from "react-router-dom";
import axios from "axios";

const BlogSkeleton = () => {
  return (
    <div className="col-xl-4 col-lg-4">
      <div className="blog-skeleton">
        <div className="blog-skeleton__img"></div>
        <div className="blog-skeleton__content">
          <div className="blog-skeleton__date"></div>
          <div className="blog-skeleton__title"></div>
          <div className="blog-skeleton__description">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const blogsPerPage = 6;

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://bulavo-backend1-xi.vercel.app/blog/allblog"
        );
        const blogsWithFormattedDates = response.data.map((blog) => ({
          ...blog,
          formattedDate: new Date(blog.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
        }));
        setBlogs(blogsWithFormattedDates);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
      setLoading(false);
    };

    fetchBlogs();
  }, []);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="page-wrapper">
      <Header />
      <section className="page-header">
        <div
          className="page-header__bg"
          style={{ backgroundImage: `url(${page})` }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-header__inner">
                <h2 className="page-header__title">Blog</h2>
                <ul className="thm-breadcrumb list-unstyled">
                  <li><Link to="/">Home</Link></li>
                  <li>Blog</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-one">
        <div className="container">
          <div className="blog-one__top">
            <div className="row">
              <div className="col-xl-7 col-lg-6">
                <div className="blog-one__top-left">
                  <div className="section-title text-left">
                    <span className="section-title__tagline">our blogs</span>
                    <h2 className="section-title__title">News & Articles</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-one__bottom">
            <div className="row">
              {loading ? (
                // Show skeletons while loading
                [...Array(6)].map((_, index) => (
                  <BlogSkeleton key={index} />
                ))
              ) : (
                // Show actual blog posts
                currentBlogs.map((blog) => (
                  <div
                    key={blog._id}
                    className="col-xl-4 col-lg-4 wow fadeInUp"
                    data-wow-delay="300ms"
                  >
                    <Link to={`/blog/${blog.slag}`}>
                      <div className="blog-one__single">
                        <div className="blog-one__img-box">
                          <div className="blog-one__img">
                            <img
                              src={blog.blogimage}
                              alt={blog.blogtitle}
                              style={{ height: "200px" }}
                            />
                          </div>
                        </div>
                        <div className="blog-one__content-box">
                          <div className="blog-one__date">
                            <p>
                              <span>Admin</span>
                              {blog.formattedDate}
                            </p>
                          </div>
                          <h3 style={{paddingBottom:'10px'}} className="blog-one__title blog-title">
                            {blog.blogtitle}
                          </h3>
                          <span className="blog-description">{blog.blogdese}</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {!loading && (
          <div className="blog-page__pagination">
            <ul className="pg-pagination list-unstyled">
              {Array.from({ length: totalPages }, (_, index) => (
                <li
                  key={index + 1}
                  className={currentPage === index + 1 ? "active" : ""}
                >
                  <a href="#" onClick={() => handlePageChange(index + 1)}>
                    {index + 1}
                  </a>
                </li>
              ))}
              <li className="next">
                <a
                  href="#"
                  onClick={() =>
                    handlePageChange(Math.min(currentPage + 1, totalPages))
                  }
                  aria-label="Next"
                >
                  <i className="fa fa-arrow-right"></i>
                </a>
              </li>
            </ul>
          </div>
        )}
      </section>

      <style jsx="true">{`
        .blog-title,
        .blog-description {
          display: -webkit-box;
          overflow: hidden;
          -webkit-box-orient: vertical;
        }

        .blog-title {
          -webkit-line-clamp: 2;
          font-size: 1.5rem;
        }

        .blog-description {
          -webkit-line-clamp: 4;
          font-size: 1rem;
          text-align: justify;
        }

        /* Skeleton Styles */
        .blog-skeleton {
          background: #fff;
          border-radius: 8px;
          padding: 15px;
          margin-bottom: 30px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .blog-skeleton__img {
          width: 100%;
          height: 200px;
          background: #f0f0f0;
          border-radius: 8px;
          margin-bottom: 15px;
          animation: pulse 1.5s infinite;
        }

        .blog-skeleton__content {
          padding: 15px;
        }

        .blog-skeleton__date {
          width: 40%;
          height: 20px;
          background: #f0f0f0;
          margin-bottom: 15px;
          border-radius: 4px;
          animation: pulse 1.5s infinite;
        }

        .blog-skeleton__title {
          width: 100%;
          height: 30px;
          background: #f0f0f0;
          margin-bottom: 15px;
          border-radius: 4px;
          animation: pulse 1.5s infinite;
        }

        .blog-skeleton__description div {
          width: 100%;
          height: 15px;
          background: #f0f0f0;
          margin-bottom: 10px;
          border-radius: 4px;
          animation: pulse 1.5s infinite;
        }

        .blog-skeleton__description div:last-child {
          width: 80%;
        }

        @keyframes pulse {
          0% {
            opacity: 0.6;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            opacity: 0.6;
          }
        }
      `}</style>

      <Footer />
      <a
        aria-label="top"
        href="#"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          backgroundColor: "#00a7eb",
          color: "#fff",
          height: "50px",
          width: "50px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000,
        }}
      >
        <i className="fa fa-angle-up"></i>
      </a>
    </div>
  );
}

export default Blog;