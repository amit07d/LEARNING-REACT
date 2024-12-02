import React, { useEffect, useState } from 'react';
// import { Container, PostForm } from '../components';
import { PostFrom,Container } from '..';
// import appwriteService from '../appwrite/config';
import service from '@/appwrite/config';
import { useParams, useNavigate } from 'react-router-dom';


function EditPost() {
  const [post, setPosts] = useState(null);
  const { slug } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPosts(post)
        }
      })
    } else {
      navigate('/')
    }
  }, [slug, navigate])

  return post ? (
    <div className='py-8'>
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default EditPost;