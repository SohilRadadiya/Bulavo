import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import page from "../assets/images/backgrounds/page-header-bg-img.jpg";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Side from '../components/Side';
import Footer from '../components/footer/Footer';

const Blogs = () => {
  const { slag } = useParams();
  const [blogPost, setBlogPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch main blog post
        const blogResponse = await axios.get(`https://bulavo-backend1-xi.vercel.app/blog/${slag}`);
        setBlogPost(blogResponse.data.data);

     
       
        
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [slag]);
  

  if (loading) return <div>Loading...</div>;
  if (!blogPost) return <div>Blog not found.</div>;

  return (
    <div className="page-wrapper">
      <Header/>
      
      <section className="page-header">
        <div
          className="page-header__bg"
          style={{ backgroundImage: `url(${page})` }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-header__inner">
                <h2 className="page-header__title">Full Blog</h2>
                <ul className="thm-breadcrumb list-unstyled">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Blog</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div  className="container">
        <div className="row" style={styles.contentWrapper}>
          {/* Main Article Column */}
          <div className="col-lg-8 gg">
            <article style={styles.mainArticle}>
              <span style={styles.tagline} className="section-title__tagline">
                {blogPost.blogtitle}
              </span>
              
              <div style={styles.metaInfo}>
                <span style={styles.date}>
                  {new Date(blogPost.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
                <span style={styles.author}>By Admin</span>
              </div>

              <div style={styles.imageContainer}>
                <img
                  src={blogPost.blogimage}
                  alt={blogPost.blogtitle}
                  style={styles.mainImage}
                />
              </div>

              <div style={styles.content}>
                {blogPost.blogdese}
              </div>
            </article>
          </div>

          {/* Sidebar Column */}
         <Side/>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

const styles = {
  contentWrapper: {
    marginTop: '40px',
    marginBottom: '40px',
  },
  mainArticle: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '30px',
    marginBottom: '30px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  },
  tagline: {
    display: 'block',
    marginBottom: '20px',
    fontSize: '16px',
    color: '#666',
  },
  metaInfo: {
    marginBottom: '20px',
    color: '#6c757d',
    fontSize: '14px',
  },
  date: {
    marginRight: '15px',

  },
  author: {
    fontStyle: 'italic',
  },
  imageContainer: {
    marginBottom: '25px',
    borderRadius: '8px',
    overflow: 'hidden',
    maxHeight: '500px',
  },
  mainImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  content: {
    lineHeight: '24px',
    color: '#212529',
    fontSize: '16px',
    textAlign: 'justify',
  },
  sidebar: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '25px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  },
  sidebarTitle: {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '20px',
    paddingBottom: '10px',
    borderBottom: '2px solid #f0f0f0',
  },
  sidebarLinkWrapper: {
    textDecoration: 'none',
    color: 'inherit',
    display: 'block',
  },
  sidebarPost: {
    display: 'flex',
    marginBottom: '20px',
    padding: '10px',
    borderRadius: '6px',
    transition: 'background-color 0.3s ease',
    ':hover': {
      backgroundColor: '#f8f9fa',
    },
  },
  sidebarImageContainer: {
    width: '80px',
    height: '80px',
    borderRadius: '6px',
    overflow: 'hidden',
    marginRight: '15px',
    flexShrink: 0,
  },
  sidebarImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  sidebarContent: {
    flex: 1,
  },
  sidebarPostTitle: {
    fontSize: '15px',
    fontWeight: '500',
    marginBottom: '5px',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  '@media (max-width: 991px)': {
    sidebar: {
      marginTop: '30px',
    },
  }
};

export default Blogs;