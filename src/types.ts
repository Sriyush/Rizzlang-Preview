
import React from 'react';

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface TranslationResult {
  cppCode: string;
  explanation: string;
}
