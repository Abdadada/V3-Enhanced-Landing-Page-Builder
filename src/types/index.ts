export interface MediaData {
  src: string;
  alt: string;
  type: 'image' | 'video';
  file?: File;
  stretchToFill?: boolean;
  aspectRatio?: string;
}

export interface TextBlockData {
  content: string;
  alignment: 'left' | 'center' | 'right';
  fontSize: string;
  color: string;
}

export interface CTAButtonData {
  text: string;
  url: string;
  backgroundColor: string;
  textColor: string;
  size: 'small' | 'medium' | 'large';
}

export interface TextStyle {
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  textAlign?: 'left' | 'center' | 'right';
}

export interface EnhancedBannerText {
  content: string;
  style?: TextStyle;
}

export interface EnhancedBannerData {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  textColor?: string;
  style?: {
    backgroundColor?: string;
    secondaryColor?: string;
    height?: string;
    borderRadius?: string;
  };
}

export interface ProductItem {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  description?: string;
}

export interface ProductGridData {
  items: ProductItem[];
  columns: number;
  showPrices: boolean;
  showDescriptions: boolean;
}

export type ComponentBlockData = 
  | MediaData 
  | TextBlockData 
  | CTAButtonData 
  | EnhancedBannerData
  | ProductGridData;

export interface ComponentBlock {
  id: string;
  type: 'media' | 'text' | 'cta' | 'banner' | 'product-grid';
  name: string;
  position: {
    x: number;
    y: number;
  };
  data: ComponentBlockData;
}

export type DeviceType = 'desktop' | 'tablet' | 'mobile';
