import { social } from '@/config/data';

export default function SocialLinks() {
  return (
    <div className="flex space-x-4">
      {social.map(({ title, icon: Icon, href }) => (
        <a key={title} href={href} target="_blank" rel="noopener noreferrer" className="text-light hover:text-neonBlue transition-colors duration-300">
          <Icon size={24} />
        </a>
      ))}
    </div>
  );
}
