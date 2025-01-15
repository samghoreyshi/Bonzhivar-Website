import React from 'react';
import Link from 'next/link';
import Modal from '../../components/modal';
import Announcements from '@/components/Announcements';


export default async function News() {


  return (
    <div className="bg-background p-5">
      <Announcements /> {/* Include announcements section if needed */}
      <Modal />
    </div>
  );
}
