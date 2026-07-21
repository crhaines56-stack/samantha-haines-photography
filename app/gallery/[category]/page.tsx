import type { Metadata } from 'next';
import PortfolioGalleryClient from '@/components/ui/PortfolioGalleryClient';

const categoryLabels: Record<string, string> = {
  boudoir: 'Boudoir',
  senior: 'Senior Portraits',
  family: 'Family',
  maternity: 'Maternity & Newborn',
  branding: 'Branding & Headshots',
};

const categoryServiceLinks: Record<string, string> = {
  boudoir: '/boudoir-photographer-austin',
  senior: '/senior-portrait-photographer-austin',
  family: '/family-photographer-austin',
  maternity: '/maternity-photographer-austin',
  branding: '/headshots-branding-photographer-austin',
};

type PageProps = {
  params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const label = categoryLabels[category] || category;
  return {
    title: `${label} Portfolio | Samantha Haines Photography`,
    description: `Full ${label.toLowerCase()} portfolio — Samantha Haines Photography, Austin TX.`,
  };
}

export async function generateStaticParams() {
  return ['boudoir', 'senior', 'family', 'maternity', 'branding'].map((category) => ({
    category,
  }));
}

export default async function GalleryPage({ params }: PageProps) {
  const { category } = await params;
  const label = categoryLabels[category] || category;
  const serviceLink = categoryServiceLinks[category] || '/contact';
  return (
    <PortfolioGalleryClient
      category={category}
      label={label}
      serviceLink={serviceLink}
    />
  );
}
