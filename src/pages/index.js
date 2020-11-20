import React from 'react';
import ProForm from '../components/ProForm';
import Layout from '../components/Layout';
import SocialMedia from '../components/SocialMedia';
import Gallery from '../components/Gallery';
import SafetyPack from '../components/SafetyPack';
import Slider from '../components/Slider.js';

export default function Home() {
  return (
    <Layout>
      <Slider />
      <ProForm />
      <SocialMedia />
      <Gallery />
      <SafetyPack />
    </Layout>
  );
}
