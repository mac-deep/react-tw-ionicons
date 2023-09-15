import React, { SVGProps } from 'react'

type BasketSharpProps = {
  extraStyles?: React.SVGAttributes<SVGElement>['style']
} & Omit<SVGProps<SVGSVGElement>, 'style'>

export default function BasketSharp({ extraStyles, ...rest }: BasketSharpProps) {
  const defaultProps: BasketSharpProps = {
    width: '20px',
    height: '20px',
    fill: 'currentColor',
  }

  const mergedProps: BasketSharpProps = { ...defaultProps, ...rest }
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...mergedProps}>
        <path d="M339.2,217.6,256,106.67,172.8,217.6l-25.6-19.2,96-128a16,16,0,0,1,25.6,0l96,128Z" />
        <path d="M441.59,192H70.41a12,12,0,0,0-11.68,14.77L112.59,434H399.41l53.86-227.23A12,12,0,0,0,441.59,192ZM256,351.66A37.71,37.71,0,1,1,293.89,314,37.88,37.88,0,0,1,256,351.66Z" />
      </svg>
    </>
  )
}
