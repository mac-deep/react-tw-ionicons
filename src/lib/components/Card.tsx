import React, { SVGProps } from 'react'

type CardProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function Card({ extraStyles, ...rest }: CardProps) {
  const defaultProps: CardProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: CardProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M32,376a56,56,0,0,0,56,56H424a56,56,0,0,0,56-56V222H32Zm66-76a30,30,0,0,1,30-30h48a30,30,0,0,1,30,30v20a30,30,0,0,1-30,30H128a30,30,0,0,1-30-30Z" />
        <path d="M424,80H88a56,56,0,0,0-56,56v26H480V136A56,56,0,0,0,424,80Z" />
      </svg>
    </>
  )
}
