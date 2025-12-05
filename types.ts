import { LucideIcon } from 'lucide-react';

export interface PricingItem {
  id: string;
  name: string;
  price: string;
  description?: string;
  icon?: LucideIcon;
}

export interface FeatureItem {
  title: string;
  description: string;
  details: string[];
  icon: LucideIcon;
}

export interface DeviceItem {
  name: string;
  category: string;
}
