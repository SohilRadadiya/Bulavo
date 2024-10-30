import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Side() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

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
                console.log(response);
                
                // Shuffle the blogs and take the first 5
                const shuffledBlogs = blogsWithFormattedDates.sort(() => 0.5 - Math.random());
                setBlogs(shuffledBlogs.slice(0, 5));
            } catch (error) {
                console.error("Error fetching blogs:", error);
            } finally {
                setLoading(false); // End loading
            }
        };

        fetchBlogs();
    }, []);

    if (loading) return <div>Loading...</div>; // Show loading state
    if (!blogs.length) return <div>No blogs found.</div>; // Handle case with no blogs

    return (
        <div className="col-lg-4">
            <aside style={styles.sidebar}>
                <h3 style={styles.sidebarTitle}>Recent Posts</h3>
                {blogs.map((blog) => (
                    <Link
                        key={blog._id}
                        to={`/blog/${blog.slag}`}
                        style={styles.sidebarLinkWrapper}
                    >
                        <div style={styles.sidebarPost}>
                            <div style={styles.sidebarImageContainer}>
                                <img
                                    src={blog.blogimage}
                                    alt={blog.blogtitle}
                                    style={styles.sidebarImage}
                                />
                            </div>
                            <div style={styles.sidebarContent}>
                                <h4 style={styles.sidebarPostTitle}>
                                    {blog.blogtitle}
                                </h4>
                            </div>
                        </div>
                    </Link>
                ))}
            </aside>
        </div>
    );
}

const styles = {
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
        width: '60px', // Smaller image size
        height: '60px', // Smaller image size
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
        fontSize: '14px', // Adjusted font size for title
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
    },
};

export default Side;
