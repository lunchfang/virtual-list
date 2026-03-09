import * as React from 'react';
export interface VirtualListProps<T = any> {
  /** Array of items to render */
  items: T[];
  /** Fixed height of each item in pixels */
  itemHeight: number;
  /** Container height (number in pixels or string like "100%") */
  height?: number | string;
  /** Container width (number in pixels or string like "100%") */
  width?: number | string;
  /** Number of extra items to render above/below visible area */
  overscan?: number;
  /** Render function for each item */
  renderItem: (item: T, index: number) => React.ReactNode;
  /** Custom scroll event handler */
  onScroll?: (e: React.UIEvent<HTMLDivElement>) => void;
}
export interface VirtualListHandle {
  /** Scroll to the item at the specified index */
  scrollToIndex: (index: number, options?: { align?: 'start' | 'center' | 'end' }) => void;
}
declare const VirtualList: React.ForwardRefExoticComponent<
  VirtualListProps & React.RefAttributes<VirtualListHandle>
>;
export default VirtualList;
