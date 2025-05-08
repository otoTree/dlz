import Link from 'next/link';
import Image from 'next/image';
import { getMessages } from '../i18n';

const Footer = () => {
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
                <Image 
                  src="/images/whatapp.jpg"
                  alt="WhatsApp QR Code"
                  width={120}
                  height={120}
                  className="mb-1"
                />
                <p className="text-xs">{t('WhatsApp')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#2d2d2c] py-4">
        <div className="container-wrapper">
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Shantou Nanmao Knitting Industry Co., Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
