import React from 'react';
import Layout from '../components/Layout';
import Founder from '../components/FounderComponent';
import Contributors from '../components/ContributorsComponent';
import Testimonials from '../components/TestimonialsComponent';

export default function CommunityPage() {
  return (
    <Layout>
      <div style={{ height: '3rem', backgroundColor: '#e5e5e5' }} />
      <Founder />
      <Contributors />
      <Testimonials />
    </Layout>
  );
}
