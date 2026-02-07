
export interface Milestone {
  id: string;
  title: string;
  value: string;
  description: string;
  icon: string;
}

export interface ChatInteraction {
  id: string;
  user: string;
  message: string;
  date?: string;
}

export interface Institute {
  name: string;
  category: 'IIT' | 'NIT' | 'IIIT' | 'Others';
}
