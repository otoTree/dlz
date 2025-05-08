"use client";

import Link from 'next/link';
import Image from 'next/image';
import { getMessages } from '../i18n';
import { useState } from 'react';

const Footer = () => {
  const [showLargeImage, setShowLargeImage] = useState(false);
  
  const t = (key: string) => {
    // TODO: Implement translation logic using getMessages
    return key;
  };
  return (
    <footer className="footer">
      <div className="container-wrapper py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Link href="/">
              <Image
                src="/images/logo.jpg"
                alt="Unigrace"
                width={180}
                height={45}
                className="mb-6"
              />
            </Link>
          </div>
          <div className="md:text-right">
            <p className="uppercase text-xs font-semibold text-gray-300 mb-3">{t('Shantou Nanmao Knitting Industry Co., Ltd.')}</p>
            <p className="text-sm mb-2">
              <a href="mailto:zhangze742@gmail.com" className="hover:underline">{t('zhangze742@gmail.com')}</a>
            </p>
            <p className="text-sm mb-2">{t('+86 13502981447')}</p>
            <p className="text-sm mb-4">
              {t('Gurao Town, Chaoyang District, Shantou City')}
            </p>
            <div className="flex justify-end">
              <div className="text-center">
                <div 
                  className="relative cursor-pointer"
                  onClick={() => setShowLargeImage(true)}
                >
                  <Image 
                    src="/images/whatapp.jpg"
                    alt="WhatsApp QR Code"
                    width={120}
                    height={120}
                    className="mb-1 transition-transform duration-300 hover:scale-125"
                  />
                </div>
                <p className="text-xs">{t('WhatsApp')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#2d2d2c] py-4">
        <div className="container-wrapper">
          <div className="text-sm text-gray-400">
            © 2025 Shantou Nanmao Knitting Industry Co., Ltd. All rights reserved.
          </div>
        </div>
      </div>
      
      {/* Image Modal */}
      {showLargeImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={() => setShowLargeImage(false)}
        >
          <div className="relative max-w-[90%] max-h-[90vh]">
            <Image
              src="/images/whatapp.jpg"
              alt="WhatsApp QR Code"
              width={400}
              height={400}
              className="object-contain"
            />
            <button 
              className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
                setShowLargeImage(false);
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
