"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import ServiceLayout from '@/app/courses/components/ServiceLayout';
import RichTextRenderer from '@/components/RichTextRenderer';

const ServicePage = () => {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await fetch(`https://dev.bonzhivar.com/api/services?populate=*&filters[Slug][$eq]=${slug}`);
        const data = await response.json();
        
        if (data.data && data.data.length > 0) {
          setService(data.data[0]);
        }
      } catch (error) {
        console.error('Error fetching service:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center" dir="rtl">
        <div className="w-8 h-8 border-2 border-accent/20 border-t-accent rounded-full animate-spin" />
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center" dir="rtl">
        <div className="text-center">
          <h1 className="text-3xl font-bold font-IranYekan text-accent mb-4">خطا</h1>
          <p className="text-accentDark/80 font-IranYekan">سرویس مورد نظر یافت نشد.</p>
        </div>
      </div>
    );
  }

  return (
    <ServiceLayout
      title={service.Title}
      imagePath={`https://dev.bonzhivar.com${service.Cover.url}`}
    >
      <div className="max-w-4xl mx-auto space-y-24 direction-rtl">
        {/* Introduction Section */}
        <div className="border-r-2 border-accent pr-6">
          <h2 className="text-3xl font-bold font-IranYekan text-accent mb-6">{`درباره ${service.Title}`}</h2>
          <div className="text-lg leading-relaxed text-accentDark/80 font-IranYekan">
            <RichTextRenderer content={service.Content} />
          </div>
        </div>

        {/* Features Grid */}
        {service.Feature && service.Feature.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {service.Feature.map((feature, index) => (
              <div key={index} className="border-t border-accent/20 pt-6">
                <h3 className="text-xl font-bold font-IranYekan text-accent mb-3">
                  {feature.FeatureTitle}
                </h3>
                <p className="text-accentDark/80 font-IranYekan">
                  {feature.FeatureDescription}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center pt-12 border-t border-accent/20">
          <Link 
            href="/courses"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-white text-lg font-IranYekan rounded-xl hover:bg-accent/90 active:scale-95 shadow-lg shadow-accent/20 transition-all duration-300"
          >
            <span>مشاهده همه دوره‌ها</span>
          </Link>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default ServicePage;
