"use client"

import config from '@/sanity.config';
import { NextStudio, NextStudioProps } from 'next-sanity/studio';

interface CustomNextStudioProps extends NextStudioProps {
  config: any;
}

export default function AdminPage() {
  const customProps: CustomNextStudioProps = { config }; 
  return <NextStudio {...customProps} />; 
}
