import React, { SVGProps } from 'react'

type FolderSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function FolderSharp({ extraStyles, ...rest }: FolderSharpProps) {
  const defaultProps: FolderSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: FolderSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M16,420a28,28,0,0,0,28,28H468a28,28,0,0,0,28-28V208H16Z" />
        <path d="M496,124a28,28,0,0,0-28-28H212.84l-48-32H44A28,28,0,0,0,16,92v84H496Z" />
      </svg>
    </>
  )
}
