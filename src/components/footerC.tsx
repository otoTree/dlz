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
            <p className="uppercase text-xs font-semibold text-gray-300 mb-3">{t('汕头南茂针织实业有限公司')}</p>
            <p className="text-sm mb-2">
              <a href="mailto:zhangze742@gmail.com" className="hover:underline">{t('zhangze742@gmail.com')}</a>
            </p>
            <p className="text-sm mb-2">{t('+86 13502981447')}</p>
            <p className="text-sm mb-4">
              {t('中国广东省汕头市潮阳区谷饶镇')}
            </p>
            <div className="flex justify-end">
              <div className="text-center">
                <Image 
                  src="/images/whatapp.jpg"
                  alt="WhatsApp 二维码"
                  width={120}
                  height={120}
                  className="mb-1"
                />
                <p className="text-xs">{t('微信')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#2d2d2c] py-4">
        <div className="container-wrapper">
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} 汕头南茂针织实业有限公司
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
