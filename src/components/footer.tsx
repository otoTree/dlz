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
              <a href="mailto:info@unigrace.cn" className="hover:underline">{t('footer.email')}</a>
            </p>
            <p className="text-sm mb-2">{t('footer.wechat')}</p>
            <p className="text-sm">
              {t('footer.address')}
            </p>
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
