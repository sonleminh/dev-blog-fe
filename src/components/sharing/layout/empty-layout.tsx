import React from 'react';

type LayoutType = {
  children?: React.ReactNode;
};

export function EmptyLayout({ children }: LayoutType) {
  return <>{children}</>;
}
