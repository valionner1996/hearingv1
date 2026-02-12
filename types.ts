import React from 'react';

export interface OrderFormData {
  fullName: string;
  address: string;
  city: string;
  zipCode: string;
  phone: string;
  email: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}