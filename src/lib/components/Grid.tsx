import React, { SVGProps } from 'react'

type GridProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function Grid({ extraStyles, ...rest }: GridProps) {
  const defaultProps: GridProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: GridProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M204,240H68a36,36,0,0,1-36-36V68A36,36,0,0,1,68,32H204a36,36,0,0,1,36,36V204A36,36,0,0,1,204,240Z" />
        <path d="M444,240H308a36,36,0,0,1-36-36V68a36,36,0,0,1,36-36H444a36,36,0,0,1,36,36V204A36,36,0,0,1,444,240Z" />
        <path d="M204,480H68a36,36,0,0,1-36-36V308a36,36,0,0,1,36-36H204a36,36,0,0,1,36,36V444A36,36,0,0,1,204,480Z" />
        <path d="M444,480H308a36,36,0,0,1-36-36V308a36,36,0,0,1,36-36H444a36,36,0,0,1,36,36V444A36,36,0,0,1,444,480Z" />
      </svg>
    </>
  )
}
