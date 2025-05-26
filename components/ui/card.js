export function Card({ children }) {
  return <div className='rounded shadow bg-white mb-4'>{children}</div>;
}
export function CardContent({ children, className }) {
  return <div className={className}>{children}</div>;
}
