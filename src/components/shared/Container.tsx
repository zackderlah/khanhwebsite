interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export const Container = ({ children, className = '' }: ContainerProps) => {
  return (
    <div className={`max-w-[1200px] mx-auto px-6 md:px-12 lg:px-24 ${className}`}>
      {children}
    </div>
  )
} 